import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography,List,ListItem,Chip,ListItemText,Button,TextField} from '@material-ui/core';
import {CTX} from './Store';

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

    const [allChats] = React.useContext(CTX);
    console.log({allChats});

    const topics = Object.keys(allChats);
    const [activeTopic,changeActiveTopic] = React.useState(topics[0]);

    const [textValue, changeTextValue] = React.useState('');

        return (
            <div>
                <Paper className={classes.root}>
                    <Typography variant="h4" component="h4" color="error">
                       Chaty
                    </Typography>
                    <Typography variant="h5" component="h5" color="primary">
                        {activeTopic}
                    </Typography>
                    <div className={classes.flex}>
                            <div className={classes.topicsWindow}>
                                    <List>
                                        {
                                            topics.map(topic => {
                                                return(
                                                    <ListItem onClick={e => {changeActiveTopic(e.target.innerText)}} key={topic} button>
                                                        <ListItemText primary={topic}/>
                                                    </ListItem>
                                                )
                                            })
                                        } 
                                    </List>
                            </div>
                            <div className={classes.chatWindow}>
                                        {
                                            allChats[activeTopic].map((chat, i) => {
                                                return(
                                                    <div className={classes.flex} key={i}>
                                                             <Chip label={chat.from}  className={classes.chip}/>
                                                             <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
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
                                            value={textValue}
                                            onChange={(e) => changeTextValue(e.target.value)}
                                />
                                <Button variant="contained" color="primary">Send</Button>
                    </div>
                </Paper>
            </div>
        )
}