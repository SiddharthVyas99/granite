import React, { useState, useEffect } from "react";
import { all, isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListTasks from "components/Tasks/ListTasks";
import PageLoader from "components/PageLoader";
import tasksApi from "apis/tasks";

const Dashboard = ({ history }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      // setAuthHeaders();
      const response = await tasksApi.list();
      // setTasks(response.data.tasks);
      const { pending, completed } = response.data.tasks;
      setPendingTasks(pending);
      setCompletedTasks(completed);
      setLoading(false);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const destroyTask = async slug => {
    try {
      await tasksApi.destroy(slug);
      await fetchTasks();
    } catch (error) {
      logger.error(error);
    }
  };

  const updateTask = slug => {
    history.push(`/tasks/${slug}/edit`);
    // history.push(`/tasks/${taskDetails.slug}/edit`);
  };

  const handleProgressToggle = async ({ slug, progress }) => {
    try {
      await tasksApi.update({ slug, payload: { task: { progress } } });
      await fetchTasks();
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const showTask = slug => {
    history.push(`/tasks/${slug}/show`);
  };

  const starTask = async (slug, status) => {
    try {
      const toggledStatus = status === "starred" ? "unstarred" : "starred";
      await tasksApi.update({
        slug,
        payload: { task: { status: toggledStatus } },
      });
      await fetchTasks();
    } catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (all(either(isNil, isEmpty), [pendingTasks, completedTasks])) {
    return (
      <Container>
        <h1 className="my-5 text-xl leading-5 text-center">
          You have not created or been assigned any tasks 🥳
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      {/* <ListTasks
          data={tasks}
          destroyTask={destroyTask}
          updateTask={updateTask}
          showTask={showTask}
        /> */}
      {!either(isNil, isEmpty)(pendingTasks) && (
        <ListTasks
          data={pendingTasks}
          destroyTask={destroyTask}
          updateTask={updateTask}
          showTask={showTask}
          handleProgressToggle={handleProgressToggle}
          starTask={starTask}
        />
      )}
      {!either(isNil, isEmpty)(completedTasks) && (
        <ListTasks
          type="completed"
          data={completedTasks}
          destroyTask={destroyTask}
          updateTask={updateTask}
          handleProgressToggle={handleProgressToggle}
        />
      )}
    </Container>
  );
};

export default Dashboard;
