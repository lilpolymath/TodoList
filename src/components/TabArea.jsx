import React, { Component } from 'react';
import { Paper, Tabs, Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import {tags} from "../messages.js"

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 10,
    marginTop: 10
  }
};

class TabArea extends Component {
  
  render() {
    //eslint-disable-next-line
    const { category, classes, onSelect } = this.props;
    const index = category 
    ? tags.findIndex(tag => tag === category) + 1
    : 0

    const onTagSelect = (e, index) => 
      onSelect(index === 0 ? '' : tags[index -1])

    return (
      <Paper className={classes.root}>
        <Tabs
          value = {index}
          onChange = {onTagSelect}
          indicatorcolor ="primary"
          textColor="primary"
          centered
        >
        <Tab label = "All" />
        {
          tags.map((tag) => (
          <Tab label={tag} />
          ))
        };
        
        
        </Tabs>
      </Paper>
    )
  }
}

export default withStyles(styles)(TabArea);