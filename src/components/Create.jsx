import React, { Component, Fragment } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    formControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        form: {
            primary: "",
            secondary: "",
            person: ""
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            form: {
                [name]: value
            }
        })
    }

    handleSubmit = () => {
        const {form}= this.state
        this.props.onCreate(form)
    }

    render() {
        const { open, form: { primary, secondary, person } } = this.state,
            { tags: tag, classes } = this.props
        return <Fragment>
            <Fab
                aria-label="Add"
                onClick={this.handleToggle}
                size="medium">
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Create a new Todo
            </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Fill out the form below
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            value={primary}
                            onChange={this.handleChange('primary')}
                            margin="normal"
                            className = {classes.formControl}
                        />
                        <br />
                        <FormControl className = {classes.formControl}>
                            <InputLabel htmlFor="peson">Tag</InputLabel>
                            <Select
                                value={person}
                                onChange={this.handleChange('person')}>
                                {
                                    tag.map((tags) => (
                                        <MenuItem value={tags}>{tags}</MenuItem>
                                    ))
                                };
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            label="Description"
                            value={secondary}
                            multiline
                            rows="4"
                            onChange={this.handleChange('secondary')}
                            margin="normal"
                            className = {classes.formControl}
                        />
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick= {this.handleSubmit} >
                        Create
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
})