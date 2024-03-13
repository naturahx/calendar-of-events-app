import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Box, FormControl, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState(false);
  const [value, setValue] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  function handleClick() {
    setLoading(true);
  }

  return (
    <>
      <header className="header">
        {loading ? (
          <Header value={value} />
        ) : (
          <button className="login" onClick={() => setLog(true)}>
            LOGIN
          </button>
        )}
      </header>
      {log ? (
        <div className="container">
          <div className="form">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: 10,
              }}
            >
              <h1 className="titleAuth">Authorazation</h1>
              <TextField
                sx={{ m: 1, width: "50ch" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
                <Link to="/calendar">
                  <span>Sign in</span>
                </Link>
              </LoadingButton>
            </Box>
          </div>
        </div>
      ) : (
        <>
          <h1 className="title">Welcome to calendar!</h1>
          <h3 className="subtitle">
            Click <span className="span">LOGIN</span> and start planning events
            today!
          </h3>
        </>
      )}
    </>
  );
};

export default App;
