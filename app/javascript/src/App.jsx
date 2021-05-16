import React, { useEffect } from "react";
import CreateTask from "components/Tasks/CreateTask";

import Dashboard from "components/Dashboard";
import { initializeLogger } from "common/logger";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <Switch>
        {/* // <--- rest of the code if any -----> */}
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
