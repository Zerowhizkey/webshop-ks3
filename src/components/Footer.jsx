import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <footer>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        bottom={0}
        >
        
        <Item> © 2020 Copyright</Item>
        <Item>Marcus Piri</Item>
        <Item>PAP</Item>
      </Stack>
    </footer>
  );
}

export default Footer;
