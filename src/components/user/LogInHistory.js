import React, { useEffect, useState }  from 'react';
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
import HistoryIcon from '@material-ui/icons/History';

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


function LogInHistory() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const timeStamp= Date.now();
  const dateTimeStamp=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp);

  const [details, setDetails] = useState([]);
    fetch(
        "https://geolocation-db.com/json/5478e9a0-e6ed-11eb-b435-8d4a35577878"
    )
    .then(response => response.json())
    .then(data=>setDetails(data));

  return (

    
    <Card className={classes.root} variant="outlined">
      <Typography align="center">Logged In History</Typography>
      <br/>
      <table >
       { details && <tr>
            <HistoryIcon/>
            {<td><Typography>{dateTimeStamp}</Typography></td> }
            <td>Ip: {details.IPv4}</td>
        </tr>}

    </table>
      

    </Card>
  );
}

export default LogInHistory;