import React, { Component } from 'react';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import Todos from "./components/Todos";
import TabArea from "./components/TabArea";
import "typeface-roboto";
import { AppBar, Toolbar, Typography, Grid, Paper } from '@material-ui/core';
import { tags,messages } from "./messages.js";
import Create from "./components/Create";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
}

class App extends Component {
  state = {
    messages
  }

  getTodosByTag() {
    return Object.entries(this.state.messages.reduce((messages, message) => {
      const { person } = message

      if (!messages[person]) {
        (messages[person] = [])
      }
      messages[person].push(message)
      return messages
    }, {}
    ))
  }

  handleChange = category => {
    this.setState({
      category
    })
  }

  onTodoCreate = tags => {

  }

  render() {
    //eslint-disable-next-line
    const sortByTags = this.getTodosByTag(),
    {category} = this.state
    return (
      <div className="App" >

        <Paper
          elevation = {8}
          style={{ padding: 15, 
          marginTop: 10, 
          marginBottom: 10, 
          overflowY: "auto" }}>

          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" style = {{ flex: 1 }}>
                My Todos
                </Typography>
                <Create 
                tags = {tags}                
                onCreate = {this.onTodoCreate}/>
            </Toolbar>
          </AppBar>
          
          <TabArea 
            category = {category}
            onSelect = {this.handleChange}
          />

          <Grid container wrap="wrap" spacing={24} alignItems="center">
            <Todos 
            category = {category}
            tags = {tags}
            messages={this.state.messages} />
          </Grid>
        
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);