import { useState } from "react";

import { Box, createStyles, Stepper, Button, Group } from "@mantine/core";

import SignUpForm from "@/components/AuthenticationForms/SignUpForm";
import OnboardingLayout from "@/components/common/OnboardingLayout";
import LocationForm from "@/components/onboarding/LocationForm";
import VerificationPage from "@/components/onboarding/VerificationPage";

type Props = {};

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
    height: "80%",
  },
  image: {
    flex: 1,
    height: "100%",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },
}));

const SignUpPage = (props: Props) => {
  // * Initiators
  const { classes } = useStyles();
  // * States
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  //   const prevStep = () =>
  //     setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <OnboardingLayout>
      <Box className={classes.wrapper}>
        <Box className={classes.form}>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="First step" description="Create an account">
              <SignUpForm step={nextStep} />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
              <LocationForm step={nextStep} />
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
              <VerificationPage />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </Box>
        <Box className={classes.image}> </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default SignUpPage;
