import React, {Component} from 'react';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        //can alos use state, nextProps, nextState to decide if to rerender 
        // eg. if(this.state.propertyInState !== nextState.propertyinState) return true
        return false;
    }
    render() {
        return (<h1 className='f1'>Robofriends</h1>);
    }
}

export default Header;