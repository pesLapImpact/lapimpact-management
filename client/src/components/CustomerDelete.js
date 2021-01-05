import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DialogContentText } from '@material-ui/core';


class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(() => {
            this.props.stateRefresh();
        });

    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>delete</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        warning delete
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            delete selected customer info
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primay" onClick={(e) => {this.deleteCustomer(this.props.id)}}>delete</Button>
                        <Button variant="outlined" color="primay" onClick={this.handleClose}>close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete;