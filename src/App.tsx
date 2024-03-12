import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import "./App.css";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <>
      <header className="header">
        <div className="user">FRFR</div>
        <button className="login">Login</button>
      </header>
      <div className="container">
        <div className="form">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 13,
            }}
          >
            <TextField
              sx={{ m: 1, width: "50ch" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingIndicator="Loading…"
              variant="outlined"
              sx={{ width: "200px", m: 2 }}
            >
              <span>Sign in</span>
            </LoadingButton>
          </Box>
        </div>
      </div>
    </>
  );
};

export default App;
