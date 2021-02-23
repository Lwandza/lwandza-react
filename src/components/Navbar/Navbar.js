import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';





function Navbar({spotify}) {
     
    
    //this.state = {
    //    data: {}
    //}

    const classes = styles();
    
    const onChange = (event) => {
        //this.setState({ data: event.target.value })
        console.log(event.target.value);
        //this.props.history.push{}
    };



    return (
      <div className={classes.root}>
        <AppBar position="static" style={{background:'#00008b'}}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Lwandza
            </Typography>
            <div className={classes.search} >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search music"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search ' }}
                onChange={onChange}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Navbar
