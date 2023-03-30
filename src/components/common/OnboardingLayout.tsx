import { ReactNode } from "react";

import { Box, createStyles } from "@mantine/core";

import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

// * Layout Styling
const useStyles = createStyles((apomapTheme) => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100vh",
    width: "100vw",
  },
  children: {
    display: "flex",
    justifyItems: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  footer: {
    height: "5%",
    width: "100%",
  },
}));

const OnboardingLayout = ({ children }: Props) => {
  //  * Initiators
  const { classes } = useStyles();

  return (
    <Box className={classes.layout}>
      <main className={classes.children}>{children}</main>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Box>
  );
};

export default OnboardingLayout;
