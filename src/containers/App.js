import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/EorroBoundry";
import './App.css';

//STATE = description of you app - an object
//State >> props so Parent to child, child can never change it


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
        // console.log("constructor")
    }

    componentDidMount() {
        // console.log('did mount')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        }).then(robots => {
            this.setState({robots: robots})
        })
        
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        //console.log(event.target.value)
        
    }

    render () {
        // console.log('render')
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        //this could result in a zero
        if(!robots.length) {
            return <h1>Loading</h1>
        } else {
             return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>   
        )
        }
       
    }
    
}

export default App;