import {
  Box,
  Button,
  createStyles,
  Divider,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

// * Types
type FormValues = {
  email: string;
  password: string;
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

const LoginForm = () => {
  //  * Initiators
  const { classes } = useStyles();
  const router = useRouter();

  // * Event Handlers
  const handleFormSwitch = () => {
    router.push("/signup");
  };

  // TODO Handle Form Data
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password should have at least 6 characters",
    },
  });

  // TODO Handle Submit
  const handleSubmit = () => {};

  return (
    <Box className={classes.formContainer}>
      <Title order={3}> Login </Title>
      <form className={classes.form}>
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

        <Button
          className={classes.fullBtn}
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </form>

      <Divider
        mt="lg"
        size="xs"
        w="100%"
        label="Don't have an account yet?"
        labelPosition="center"
      />
      <Button className={classes.halfBtn} onClick={handleFormSwitch}>
        Sign Up
      </Button>
    </Box>
  );
};

export default LoginForm;
