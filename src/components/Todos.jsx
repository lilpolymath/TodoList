import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const styles = {
    container: {
        padding: '10px',
        // width: "450px",
        display: "flex",
    },
    card: {
        align: "center",
        maxWidth: 275,
        height: 200,
        display: "flex",
        borderRadius: "6px",
        flex: 1,
        overflowY: "auto"

    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12,
        marginTop: 12
    },
    media: {
        height: 140
    }
};


class Todos extends Component {

    render() {
        const { classes, category, messages } = this.props
        const matchWithTag = messages.filter(function(Todo) {
            // eslint-disable-next-line
            return Todo.person == category;
        });
        console.log(matchWithTag)   

        // eslint-disable-next-line
        return matchWithTag.length == 0
        ?messages.map((messages) => (
            <Fragment>
                <Grid item xs="auto" md={3} >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h4">
                                {messages.primary}
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                Tags: {messages.person}
                            </Typography>
                            <Typography component="p">
                                {messages.secondary}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Fragment>
        ))
        : matchWithTag.map((matchWithTag) => (
            <Fragment>
                <Grid item xs="auto" md={3} >
                    <Card className={classes.card}> 
                        <CardContent>
                            <Typography variant="h5" component="h4">
                                {matchWithTag.primary}
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                Tags: {matchWithTag.person}
                            </Typography>
                            <Typography component="p">
                                {matchWithTag.secondary}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Fragment>            
        ));
    }
}

Todos.propTypes = {
    messages: PropTypes.array.isRequired
}
export default withStyles(styles)(Todos); 