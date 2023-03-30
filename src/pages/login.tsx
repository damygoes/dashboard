import { Box, createStyles } from "@mantine/core";

import LoginForm from "@/components/AuthenticationForms/LoginForm";
import OnboardingLayout from "@/components/common/OnboardingLayout";

const useStyles = createStyles((apomapTheme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  form: {
    flex: 1,
    padding: "2rem",
  },
  image: {
    flex: 1,
    height: "100%",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },
}));

const LoginPage = () => {
  // * Initiators
  const { classes } = useStyles();

  return (
    <OnboardingLayout>
      <Box className={classes.wrapper}>
        <Box className={classes.form}>
          <LoginForm />
        </Box>
        <Box className={classes.image}> </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default LoginPage;
