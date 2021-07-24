import React from "react";
import "../../App.css";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupWorkRoundedIcon from "@material-ui/icons/GroupWorkRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EventIcon from "@material-ui/icons/Event";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import BusinessIcon from '@material-ui/icons/Business';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { useState } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import logo from "../../resources/comLogo.jpg";


const drawerWidth = 240;

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

  root1: {
    display: "flex",
  },
  apptitle: {
    padding: theme.spacing(2),//16px
    fontWeight: 500,
    textDecoration: 'none',
    color: "#BDEDFF"
}
,
appspace: {
    padding: theme.spacing(2),//16px
    fontWeight: 500,
    color: "#E3E6F5"
},
appbar: {
    background: '#151B54',
},
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Profile(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

    const fName = localStorage.getItem('userfName');
    const lName = localStorage.getItem('userlName');
    const contact = localStorage.getItem('usercontact');
    const email  = localStorage.getItem('useremail');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <Box  m={1}
              alignItems= "center"
              justify="center"
              justifyContent="center">

            <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems= "center"
                    justify="center"
                    justifyContent="center"
              >
                <AccountCircleIcon fontSize="Large"/>
                {/* <Avatar alt="A Pathirana" src="../../resources/logo_big.png" className={classes.large} /> */}

              </Grid>

              <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems= "center"
                    justify="center"
                    justifyContent="center"
              >
              <Typography color="initial" >
              {fName} {lName}
              </Typography>
              </Grid>
          </Box>


      <Divider />
      <List>
        {[
          { name: "Organization", link: "/organization" },
          { name: "Divisions", link: "/divisions" },
          { name: "Teams", link: "/teams" },
          { name: "User Roles & Permissions", link: "/user-roles" },
          { name: "Employees", link: "/employees" },
          { name: "Profile", link: "/profile" },
          { name: "Settings", link: "/settings" },
        ].map((text, index) => (
         
          <ListItem button key={text.name} component={Link} to={text.link}>
            { <ListItemIcon>
              {index=== 0 ? <BusinessIcon /> : <RecentActorsIcon />}
            </ListItemIcon> }
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
        <ListItem>
          <Button variant="contained" 
                  color="primary"   
                  component="span" 
                  component={Link}
                  to="/"
                  onClick={(e) => {
                    localStorage.clear()
                  }}
                  
                  >
            Log Out
          </Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root1}>
      <CssBaseline />

        <AppBar
                position="fixed"
                color="primary"
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <Typography variant="h5" className={classes.appspace}>
                        spacespacespaice
                    </Typography>
                    {/* <DashboardIcon color="primary" className={classes.appbaricon} fontSize="large" /> */}
                    <Typography variant="h5" className={classes.apptitle} color="primary" component={Link} to="/">
                        Dashboard
                    </Typography>
                    
                     
                    
                </Toolbar>
            </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
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
              User Profile
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fName"
                label="FirsName"
                name="fName"
                autoFocus
                value={fName}
              />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="lName"
                label="LastName"
                name="lName"
                autoFocus
                value={lName}
              />     
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="contact"
                label="Contact"
                name="contact"
                autoFocus
                value={contact}
              />     
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoFocus
                value={email}
              />  
            </form>
           
          </CardContent>
        </Card>
      </Grid>
    </Grid>
 
      </main>
    </div>
  );
}

Profile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Profile;;
