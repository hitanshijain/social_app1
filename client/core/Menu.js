import React, { useState, useEffect }  from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const axios = require('axios');

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffa726'}
  else
    return {color: '#ffffff'}
}
let users = []
let newUsers = []
axios.get('/api/users').then((response) => {
    console.log(response)
    users = response.data
  });

const Menu = withRouter(({history}) => {
  const [searchShow, setSearchShow] = useState(false); 
  const [inputText, setInputText] = useState("")
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase)
    // print(lowerCase)
    setInputText(lowerCase);
    if(e.target.value=="")
      setSearchShow(false);
    else 
      setSearchShow(true);
    newUsers = users.filter(value => value.name.toLowerCase().includes(lowerCase))
    console.log(newUsers)
  };
  // const filtered = newUsers.map(person =>  <Card key={person._id} person={person} />);
  return(
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        MERN Social
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon/>
        </IconButton>
      </Link>
      {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In
            </Button>
          </Link>
        </span>)
      }
      {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      }
      <Link to={"/chat"}>
      
<Button color="inherit" style={isActive(history, "/signup")} text-align='right'>chat

</Button>

</Link>
<div className="search" >
  
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
          color='primary'
        />
      </div>
    <div>
      <ul>
            {searchShow?newUsers.map((item) => (
                <li key={item._id}>{item.name}</li>
            )):null}
        </ul>
        </div>
    </Toolbar>
  </AppBar>
)})

export default Menu
