import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./components/AuthContext";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.dark.css";

import CalendarPage from "./pages/Calendar";
import DashboardPage from "./pages/Dashboard";
import GraphPage from "./pages/Graph";
import ProfilePage from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Switch>
          <Layout>
            <PrivateRoute
              exact
              path="/dashboard"
              component={DashboardPage}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/graph"
              component={GraphPage}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/calendar"
              component={CalendarPage}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/profile"
              component={ProfilePage}
            ></PrivateRoute>
          </Layout>
        </Switch>
      </Switch>
    </AuthProvider>
  );
}

export default App;
