import React, { useEffect, useState } from "react";
import CreateTask from "components/Tasks/CreateTask";

import Dashboard from "components/Dashboard";
import ShowTask from "components/Tasks/ShowTask";
import EditTask from "components/Tasks/EditTask";
import Signup from "components/Authentication/Signup";
import PageLoader from "components/PageLoader";

import { initializeLogger } from "common/logger";
import { ToastContainer } from "react-toastify";
import { registerIntercepts } from "apis/axios";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    registerIntercepts();
    // setAuthHeaders(setLoading);
    logger.info("Log from js-logger");
  }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen">
  //       <PageLoader />
  //     </div>
  //   );
  // }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        {/* // <--- rest of the code if any -----> */}
        <Route exact path="/tasks/:slug/edit" component={EditTask} />
        <Route exact path="/tasks/:slug/show" component={ShowTask} />
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
