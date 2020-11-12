import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1 className = 'f1'>Something went wrong! Try again</h1>
            )
        } else {
            return this.props.children;
        }
    }
}


export default ErrorBoundary;