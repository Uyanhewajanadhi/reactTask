import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import logo from "../../resources/comLogo.jpg";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    Height: "100%",
    display: "flex",
  },

  card: {
    borderRadius: 30,
    maxWidth: 440,
    textAlign: "center",
    padding: "20px",
    margin: "120px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    overflow: "visible",
  },
  media: {
    margin: "10px auto 0",
    width: "30%",
    height: 60,
    position: "relative",
    zIndex: 1000,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  grid: {
    flexGrow: 1,
  },
}));

function LogIn({ onLogin, onAdmin }) {

    const classes = useStyles();
    // const [email, setEmail] = useState(``);
    // const [password, setPassword] = useState(``);
  
    // const loginAttempt = async (email, password) => {
    //   var axios = require("axios");
    //   axios
    //     .post(`${window.backendURL}/login`, {
    //       email: email,
    //       password: password,
    //     })
    //     .then((res) => {
    //       let data = res.data;
    //       // console.log(data);
    //       // Token should be avail. if successful
    //       if (data.token) {
    //         window.token = data.token;
    //         if (data.info.isAdmin) {
    //           onAdmin(true);
    //         }
    //         onLogin(data.token);
    //         //   alert(data.info.initialSetup);
    //       } else {
    //         alert("Login failed!");
    //       }
    //     });
    // };
 
  return (
    <Grid
      container
      spacing={0}
      align="center"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={logo} title="logo" />
          <CardContent>
            <Typography variant="h5" align="left">
              Log In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                // onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div className={classes.grid}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                      align="left"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Link href="#" variant="body2" align="right">
                      {"Forgot Password"}
                    </Link>
                  </Grid>
                </Grid>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                
                // onClick={(e) => {
                //   e.preventDefault();
                //   loginAttempt(email, password);
                // }}
              >
                Sign In
              </Button>
            </form>
            <div className={classes.list}>
              <Typography align="center">Don't have an account?</Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                component={Link}
                to="/sign-up"
              >
                Sign Up
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LogIn;

