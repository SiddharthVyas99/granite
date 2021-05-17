import React, { useEffect } from "react";
import CreateTask from "components/Tasks/CreateTask";

import Dashboard from "components/Dashboard";
import ShowTask from "components/Tasks/ShowTask";
import EditTask from "components/Tasks/EditTask";

import { initializeLogger } from "common/logger";
import { ToastContainer } from "react-toastify";
import { registerIntercepts } from "apis/axios";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    registerIntercepts();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        {/* // <--- rest of the code if any -----> */}
        <Route exact path="/tasks/:slug/edit" component={EditTask} />
        <Route exact path="/tasks/:slug/show" component={ShowTask} />
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
