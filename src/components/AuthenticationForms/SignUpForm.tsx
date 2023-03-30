import {
  Box,
  Button,
  createStyles,
  Divider,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// * Types
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type SignUpFormProps = {
  step: () => void;
};

// * Component Styling
const useStyles = createStyles((apomapTheme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "1rem",
    maxWidth: "450px",
    padding: "0.5rem",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    gap: "0.8rem",
  },
  input: {
    width: "100%",
  },
  half: {
    width: "50%",
  },
  fullBtn: {
    width: "100%",
    marginTop: "1.2rem",
  },
  halfBtn: {
    width: "50%",
    alignSelf: "center",
    backgroundColor: apomapTheme.colors.gray[6],
  },
}));

const SignUpForm = ({ step }: SignUpFormProps) => {
  //  * Initiators
  const { classes } = useStyles();

  // * Event Handlers
  const handleFormSwitch = () => {
    // setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  // TODO Handle Form Data
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password should have at least 6 characters",
      repeatPassword: (value, values) =>
        value === values.password ? null : "Passwords should match",
    },
  });

  // TODO Handle Submit
  const handleCreateAccount = () => {
    step();
  };

  return (
    <Box className={classes.formContainer}>
      <form className={classes.form}>
        <Box className={classes.rowContainer}>
          <TextInput
            className={classes.half}
            withAsterisk
            label="First Name"
            type="text"
            placeholder="Max"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            className={classes.half}
            withAsterisk
            label="Last Name"
            type="text"
            placeholder="Mustermann"
            {...form.getInputProps("lastName")}
          />
        </Box>

        <TextInput
          className={classes.input}
          withAsterisk
          label="Email Address"
          type="text"
          placeholder="maxmustermann@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          className={classes.input}
          withAsterisk
          label="Password"
          placeholder="minimum 6 characters"
          {...form.getInputProps("password")}
        />

        <PasswordInput
          className={classes.input}
          withAsterisk
          label="Repeat Password"
          placeholder="minimum 6 characters"
          {...form.getInputProps("repeatPassword")}
        />

        <Button
          className={classes.fullBtn}
          type="submit"
          onClick={handleCreateAccount}
        >
          Sign Up
        </Button>
      </form>

      <Divider
        mt="lg"
        size="xs"
        w="100%"
        label="Already have an account?"
        labelPosition="center"
      />

      <Button className={classes.halfBtn} onClick={handleFormSwitch}>
        Login
      </Button>
    </Box>
  );
};

export default SignUpForm;
