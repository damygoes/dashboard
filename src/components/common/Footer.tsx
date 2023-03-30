import { Box, Text, createStyles } from "@mantine/core";
import Link from "next/link";

// * Layout Styling
const useStyles = createStyles((apomapTheme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "0.5rem",
    backgroundColor: apomapTheme.colors.dark[1],
  },
  footerLinks: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "20%",
    color: apomapTheme.white,
  },
}));

const Footer = () => {
  //  * Initiators
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <h1>LOGO</h1>
      <Box className={classes.footerLinks}>
        <Link href="">
          <Text fz="xs">Impressum</Text>
        </Link>
        <Link href="">
          <Text fz="xs">Datenshutzm</Text>
        </Link>
        <Link href="">
          <Text fz="xs">AGB</Text>
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
