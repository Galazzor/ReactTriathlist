import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import MainContent from "./MainContent";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <MainContent>{props.children}</MainContent>
    </Fragment>
  );
}

export default Layout;
