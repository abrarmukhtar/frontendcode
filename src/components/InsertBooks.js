import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const InsertBooks = () => {
  const [bname, setBName] = useState("");
  const [author, setauthor] = useState("");
  const [sname, setSName] = useState(null);
  const [bdate, setBdate] = useState(null);
  const [rdate, setRDate] = useState(null);
  const handleClick = async () => {
    const body = { author, sname, bdate, rdate };

    const response = await fetch("http://localhost:5000/books/" + bname, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setBName("");
    setauthor("");
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
        <label className="lb">ADD BOOKS</label>
        <TextField
          name="bname"
          onChange={(e) => setBName(e.target.value)}
          label="Name"
          variant="standard"
          value={bname}
          inputProps={{ style: { textTransform: "uppercase" } }}
        />
        <TextField
          name="aname"
          onChange={(e) => setauthor(e.target.value)}
          label="Author"
          variant="standard"
          value={author}
          inputProps={{ style: { textTransform: "uppercase" } }}
        />
        <Button variant="outlined" onClick={handleClick}>
          Add Book
        </Button>
      </Box>
    </>
  );
};
