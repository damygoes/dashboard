import { Box, Button, createStyles, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import KassenSystemSelect from "../common/KassenSystemSelect";

// * Types
type FormValues = {
  pharmacyName: string;
  pharmacyAddress: string;
  posSystem: string;
  telephoneNo: string;
};

type LocationFormProps = {
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

const LocationForm = ({ step }: LocationFormProps) => {
  //  * Initiators
  const { classes } = useStyles();

  // * Event Handlers
  // TODO Handle Form Data
  const form = useForm<FormValues>({
    initialValues: {
      pharmacyName: "",
      pharmacyAddress: "",
      posSystem: "",
      telephoneNo: "",
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    //   password: (value) =>
    //     value.length >= 6 ? null : "Password should have at least 6 characters",
    //   repeatPassword: (value, values) =>
    //     value === values.password ? null : "Passwords should match",
    // },
  });

  const handleNavigation = () => {
    step();
  };

  return (
    <Box className={classes.formContainer}>
      <form className={classes.form}>
        <TextInput
          className={classes.input}
          withAsterisk
          label="Pharmacy Name"
          type="text"
          placeholder="Apotheke der apomap"
          {...form.getInputProps("pharmacyName")}
        />
        <TextInput
          className={classes.input}
          withAsterisk
          label="Address"
          type="text"
          placeholder="Musterstraße 1, 12345 Apostadt"
          {...form.getInputProps("pharmacyAddress")}
        />
        <Box className={classes.rowContainer}>
          <KassenSystemSelect />
          <TextInput
            className={classes.half}
            label="Telephone No."
            type="tel"
            placeholder="123/555-555-5555"
            {...form.getInputProps("telephoneNo")}
          />
        </Box>
        <Button className={classes.fullBtn} onClick={handleNavigation}>
          Proceed
        </Button>
      </form>
    </Box>
  );
};

export default LocationForm;
