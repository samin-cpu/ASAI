import React from 'react';
import Sidebar from '../../Components/SideBar'
import TopBar from '../../Components/TopBar'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

export default function Leads() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <CssBaseline />
          <TopBar pageTitle={'Leads'}/>
          <Sidebar currentPage={9} />
          <main classname={classes.content}>
            <div classname={classes.toolbar} />

            <div classname="mb-2">
              <a href="/Leads/shopItem"><Button bsStyle="success" fill>ShopItem</Button></a><p></p>
              <a href="/Lead/sale"><Button bsStyle="success" fill>Sale</Button></a><p></p>
              
            </div>
            
          </main>
        </div>
    );
}
