import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textDecorationColor:'blue',
    borderRadius: 10,
    padding: "20px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    overflow: "visible",
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



  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function CurrentLogedIn() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <Typography align="center">Curently Logged In Users</Typography>
      <Typography align="center">4/35</Typography>
      <br/>
      <table >
        <tr>
            <Avatar alt="A.M Perera" src="../../resources/Perera.jpg" className={classes.small} />
            <td><Typography>A.M Perera</Typography></td>
        </tr>
        
        <tr>
            <Avatar alt="Dholt" src="../../resources/Dholt.jpg" className={classes.small} />
            <td><Typography>Anne Dholt</Typography></td>
        </tr>

        <tr>
            <Avatar alt="Sean" src="../../resources/Sean.jpg" className={classes.small} />
            <td><Typography>John H. Sean</Typography></td>
        </tr>

        <tr>
            <Avatar alt="Lex" src="../../resources/Lex.jpg" className={classes.small} />
            <td><Typography>Lex K.</Typography></td>
        </tr>



    </table>
      

    </Card>
  );
}

export default CurrentLogedIn;