import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./student.css";
export default function Student({ cstudent, setCstudent }) {
  useEffect(() => {
    console.log(cstudent);
    setFname(cstudent?.fname);
    setLname(cstudent?.lname);
  }, [cstudent]);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleClick = async () => {
    const body = { lname };
    const response = await fetch("http://localhost:5000/students/" + fname, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setFname("");
    setLname("");
    setCstudent(null);
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
        <label className="lb">UPDATE DETAILS </label>
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
          Update
        </Button>
      </Box>
    </>
  );
}
