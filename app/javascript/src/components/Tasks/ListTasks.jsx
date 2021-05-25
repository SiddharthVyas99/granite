import React from "react";
import Table from "./Table";

const ListTasks = ({
  data,
  type,
  destroyTask,
  updateTask,
  showTask,
  handleProgressToggle,
  starTask,
}) => {
  return (
    <Table
      type={type}
      data={data}
      destroyTask={destroyTask}
      updateTask={updateTask}
      showTask={showTask}
      handleProgressToggle={handleProgressToggle}
      starTask={starTask}
    />
  );
};

export default ListTasks;
