import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countries, setCountries] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState("");
  console.log(defaultCountry, countries);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/countries.json",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  useEffect(() => {
    if (countries?.data?.[18]) {
      setDefaultCountry(countries?.data?.[18].country);
    }
  }, [countries]);

  return (
    <>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sure Name"
                    name="lastName"
                    autoComplete="family-name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="dateofbirth"
                    label="Date of birth"
                    name="dateofbirth"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                    value="2019-05-24"
                    inputProps={{ min: "2019-01-24", max: "2030-05-31" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="Re-enter Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12} bgcolor="#f5f5f5"
                paddingX={2}
                paddingY={4}
                marginTop={4}
                marginBottom={1}
              >
                  <Typography
                fontSize={15}
                    variant="h6"
                    align="left"
                  color="text.primary"
                  
                    >
                    For your security please ensure your password:
                  </Typography>
                  <Typography >Is between 8 and 30 characters long</Typography>
                  <Typography>
                    Contains a mix of upper (capital)and lower case letters
                  </Typography>
                  <Typography> Contains at least one number</Typography>
                  <Typography>
                    Contains at least one special character
                    {" (*:@|#%,;[]{}?-_~$&<>'“^()/!`)"}
                  </Typography>
                </Grid>

              
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sure Name"
                    name="lastName"
                    autoComplete="family-name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    </>
  );
}
