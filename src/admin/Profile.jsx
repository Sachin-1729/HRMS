import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
} from "@mui/material";
import Header from "../components/Header";

function Profile() {
  // State to manage the form data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., send data to the backend
    alert("Profile saved successfully!");
  };

  return (
    <Box>
        <Header title="My Profile"></Header>
      <Typography variant="h6" gutterBottom>
        Profile Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Update your account's profile information and email address.
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <FormLabel>Full Name</FormLabel>
          <TextField
            fullWidth
            id="full-name"
            size="small"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <FormLabel>Email</FormLabel>
          <TextField
            fullWidth
            id="email"
            size="small"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "right", marginTop: "20px"  }}>
        <Button sx={{backgroundColor: "#de9a25"}} type="submit" variant="contained" color="primary" >
         Save
        </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Profile;
