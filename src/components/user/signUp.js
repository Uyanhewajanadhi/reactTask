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

  root2: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 242,
      alignItems: "center",
    },
  },

  card: {
    borderRadius: 30,
    maxWidth: 550,
    textAlign: "center",
    padding: "20px",
    margin: "120px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    overflow: "visible",
  },
  media: {
    margin: "10px auto 0",
    width: "30%",
    height: 80,
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

function SignUp() {

    const classes = useStyles();
    const [fname, setFname] = useState(``);
    const [lname, setLnam] = useState(``);
    const [contactnum, setContactnum] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [confpassword, setConfpassword] = useState(``);
    
  
    const signUpAttempt = async (fname, lname, contactnum, email, password, confpassword) => {
      // localStorage.setItem('userData', {fName: fname, lName: lname,
      // contact: contactnum, email: email});
      localStorage.setItem('userfName', fname);
      localStorage.setItem('userlName', lname);
      localStorage.setItem('usercontact', contactnum);
      localStorage.setItem('useremail', email);
            
      var axios = require("axios");
      // axios
      //   .post(`${window.backendURL}/sign-up`, {
      //     fname: fname,
      //     lname: lname,
      //     contactnum: contactnum,
      //     email: email,
      //     password: password,
      //     confpassword: confpassword,
      //   })
    };
 
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
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
            <form className={classes.root2} noValidate autoComplete="off">
                <div>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="fname"
                    placeholder="M.N"
                    autoFocus
                    onChange={(e) => {
                      e.preventDefault();
                      setFname(e.target.value);
                    }}

                />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    placeholder="Gunawardana"
                    autoFocus
                    onChange={(e) => {
                      e.preventDefault();
                      setLnam(e.target.value)
                    }}
                />                
                </div>
            </form>
                    

            
  
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="telephone"
                label="Contact Number"
                name="telephone"
                inputProps={{ maxLength: 10 }}
                placeholder="eg: +94 123 456 789"
                autoFocus
                onChange={(e) => 
                  {
                    e.preventDefault();
                    setContactnum(e.target.value);
                  }}
              />

            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                placeholder="eg: npguna@gmail.com"
                autoFocus
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value)}}
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
                onChange={(e) =>{
                  e.preventDefault(); 
                  setPassword(e.target.value)}}
              />

            <TextField
                className={classes.textfield}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Re-enter Password"
                type="password"
                id="confirmPassword"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                component={Link}
                to="/"
                onClick={(e) => {
                  // e.preventDefault();
                  signUpAttempt(fname, lname, contactnum, email, password, confpassword);
                }}
                
                >
            
                Set Up Account
              </Button>
            </form>
            
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SignUp;