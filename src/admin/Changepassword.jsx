import React, { useState } from "react";
import Headers from "../components/Header";
import { Box, TextField, Button, FormControl, FormHelperText } from "@mui/material";

function Changepassword() {
  // State for password fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    // Add the logic to handle the password change, such as making an API request

    setError(""); // Clear error if everything is fine
    alert("Password changed successfully.");
  };

  return (
    <div>
      <Headers title="Change password" />

      <Box  component="form" onSubmit={handleSubmit}>
       <label htmlFor="oldPassword">Current Password</label>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Current Password"
          size="small"
          type="password"
          variant="outlined"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <label htmlFor="oldPassword">New Password</label>
        <TextField
          fullWidth
          margin="normal"
          placeholder="New Password"
          size="small"
          type="password"
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
         <label htmlFor="oldPassword">Confirm Password</label>
        <TextField
          fullWidth
          margin="normal"
          placeholder="New Password"
          size="small" 
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && (
          <FormControl fullWidth margin="normal" error>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        )}
      <Box sx={{ display: "flex", justifyContent: "right", marginTop: "20px"  }}>
        <Button sx={{backgroundColor: "#de9a25"}} type="submit" variant="contained" color="primary" >
          Change Password
        </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Changepassword;
