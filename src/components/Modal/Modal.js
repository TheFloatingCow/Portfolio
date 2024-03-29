import React, { Component } from 'react';

import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './Modal.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;