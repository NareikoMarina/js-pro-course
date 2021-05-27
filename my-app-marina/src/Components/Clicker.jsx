import React from 'react';
import plus from '../Images/plus.svg';
import minus from '../Images/minus.svg';
import reset from '../Images/reset.svg';

import './Clicker.css';

class Clicker extends React.Component {

    state = {
        count: 0,
    };

    increment = () => {
        this.setState({
            count: this.state.count +1,
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count -1,
        });
    };

    reset = () => {
        this.setState({
            count: 0,
        });
    };

    render() {
        return (
            <div className = 'container'>
                <div className = 'value'>{this.state.count}</div>
                <div className = 'button button__plus' onClick = {this.increment}>
                    <img className = 'button__icon' src = {plus} alt = 'plus'></img>
                </div>
                <div className = 'button button__reset' onClick = {this.reset}>
                    <img className = 'button__icon' src = {reset} alt = 'reset'></img>
                </div>
                <div className = 'button button__minus' onClick = {this.decrement}>
                    <img className = 'button__icon' src = {minus} alt = 'minus'></img>
                </div>
            </div>
        );
    };
};

export default Clicker;