import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
export const BorrowBooks = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleClick = () => {
    setFname("");
    setLname("");
  };
  return (
    <>
      <Box
        className="student-form"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <label className="lb">BORROW A BOOK</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Books" />}
        />
        <TextField
          name="fname"
          onChange={(e) => setFname(e.target.value)}
          label="First Name"
          variant="standard"
          value={fname}
          inputProps={{ style: { textTransform: "uppercase" } }}
        />
        <TextField
          name="lname"
          onChange={(e) => setLname(e.target.value)}
          label="Last Name"
          variant="standard"
          value={lname}
          inputProps={{ style: { textTransform: "uppercase" } }}
        />
        <Button variant="outlined" onClick={handleClick}>
          Add Student
        </Button>
      </Box>
    </>
  );
};

const top100Films = [
  { label: "The Shawshank Redemption", id: "xyz" },
  { label: "The Shawshank Redemption-2", id: "abc" },
];
