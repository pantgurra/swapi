import { Outlet, ScrollRestoration, useLocation } from "react-router";

import PageContainer from "./PageContainer";
import { HeaderNav } from "@/components/organisms";
import FabButton from "@/components/atoms/FabButton";
import { StormTrooper } from "@/icons";
import { theme } from "@/styles/theme";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderNav isRoot={pathname === "/"} />
      <PageContainer $isRoot={pathname === "/"}>
        <Outlet />
        <FabButton aria-label="List added characters" to="/people">
          <StormTrooper color={theme.colors.secondary.main} />
        </FabButton>
      </PageContainer>
      <ScrollRestoration />
    </>
  );
};

export default Layout;
