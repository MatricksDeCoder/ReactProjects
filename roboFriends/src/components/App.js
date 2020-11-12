import React, {Component} from 'react';
import Cards from './Cards';
import SearchBox from './SearchBox';
import './App.css';
import Spinner from 'react-spinner-material'; 
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import {connect} from 'react-redux';
import {searchChange,requestRobots} from '../actions/actions';
import Header from './Header';

//relook components
const mapStateToProps = (state) => {
    return {
        searchBox:state.onSearchChange.searchBox, //part of reducer
        robots:state.onRequestRobots.robots,
        isPending:state.onRequestRobots.isPending,
        error:state.onRequestRobots.error,   
    }
}

const mapDispatchToProps = (dispatch) => {//triggers sends action
    return {
        onSearchChange: (event) => dispatch(searchChange(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {

    componentDidMount() {

        this.props.onRequestRobots();

    }

    render() {

        const {robots,searchBox,isPending, error,onSearchChange} =this.props;

        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchBox.toLowerCase()));

        if(isPending)  {
            return (
                <div className = 'tc'>
                    <h1>Loading</h1>
                    <Spinner size={80} spinnerColor={"#228B22"} spinnerWidth={7} visible={true} />
                </div>
                
            )
        } else if(error) {
            return <h1 className='tc'>Something went wrong</h1>
        }      
        else {
            return (
                <div className = 'tc'>
                    <Header />
                    <SearchBox searchChange = {onSearchChange} searchBox = {this.props.searchBox} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cards robots = {filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }        
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);


