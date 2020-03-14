import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography,List,ListItem,Chip,ListItemText,Button,TextField} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
  }));


export default function Dashboard() {

    const classes = useStyles();

        return (
            <div>
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h4">
                       Chaty
                    </Typography>
                    <Typography variant="h5" component="h5">
                        Placeholder
                    </Typography>
                    <div className={classes.flex}>
                            <div className={classes.topicsWindow}>
                                    <List>
                                        {
                                            ['topic'].map(topic => {
                                                return(
                                                    <ListItem key={topic} button>
                                                        <ListItemText primary={topic}/>
                                                    </ListItem>
                                                )
                                            })
                                        } 
                                    </List>
                            </div>
                            <div className={classes.chatWindow}>
                                        {
                                            [{from: 'user', msg: 'hello'}].map((chat, i) => {
                                                return(
                                                    <div className={classes.flex} key={i}>
                                                             <Chip label={chat.from}  className={classes.chip}/>
                                                             <Typography variant="p" component="p">{chat.msg}</Typography>
                                                    </div>

                                                )
                                            })
                                        } 
                            </div>
                    </div>
                    <div className={classes.flex}>
                                <TextField
                                            className={classes.chatBox}
                                            label="Send a chat"
                                            //value={name}
                                            //onChange={handleChange}
                                />
                                <Button variant="contained" color="primary">Send</Button>
                    </div>
                </Paper>
            </div>
        )
}