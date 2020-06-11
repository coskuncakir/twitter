import React from "react";
import Layout from "../components/layout";
import useWindowSize from "../hooks/useWindowSize";
import CONST from "../constants";
import LeftSidebar from "../components/col-left";
import Main from "../components/col-main";
import RightSidebar from "../components/col-right";

function HomePage() {
  const windowSize = useWindowSize();
  return (
    <Layout>
      <LeftSidebar flat={windowSize.width < CONST.DESKTOP_SIZE}>
        Left Sidebar
      </LeftSidebar>
      <Main>{JSON.stringify(windowSize)}</Main>
      {windowSize.width > CONST.TABLET_SIZE && (
        <RightSidebar>Right Sidebar</RightSidebar>
      )}
    </Layout>
  );
}

export default HomePage;
