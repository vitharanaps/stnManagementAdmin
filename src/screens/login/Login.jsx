import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url("https://images.unsplash.com/photo-1527295110-5145f6b148d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80")`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          height: "50vh",
          width: "30vw",
          boxShadow: "0px 23px 17px -14px rgba(0, 0, 0, 0.1)",
          borderRadius: 10,
          padding: 3,
          gap: 5,
        }}
      >
        <Box>
          <Typography variant="h6" color="gray">
            Welcome To STN Manager
          </Typography>
        </Box>
        <form onSubmit={handleLogin}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="Youreemail@gmail.com"
                type="text"
                size="fullwidth"
              />
            </Box>

            <Box>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="fullwidth"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" type="submit">
                Sign In
              </Button>
              <Button variant="outlined" type="reset">
                Reset
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
