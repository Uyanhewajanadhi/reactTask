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
import NumOfSignedUpUsers from "./NumOfSignedUpUsers";
import CurrentLogedIn from "./CurrentLogedIn";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
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

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
                  A.T. Pathirana
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
          { name: "Log Out", link: "/" },
        ].map((text, index) => (
         
          <ListItem button key={text.name} component={Link} to={text.link}>
            { <ListItemIcon>
              {index=== 0 ? <BusinessIcon /> : <RecentActorsIcon />}
            </ListItemIcon> }
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
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
        <div className={classes.toolbar} />
   
     <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <NumOfSignedUpUsers/>
            {/* <Paper className={classes.paper}>item</Paper> */}
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
           <CurrentLogedIn/>
            {/* <Paper className={classes.paper}>item</Paper> */}
          </Grid>
        </Grid>

      </Grid>

       
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;;
