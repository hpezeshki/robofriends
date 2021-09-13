import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }


    render() {
        const fliteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
                <h1>Robo Freinds App</h1>
                <SearchBox className='ma5' searchChange={this.onSearchChange}/>
                <Scroll>
                  <ErrorBoundry>
                    <CardList robots={fliteredRobots}/>
                  </ErrorBoundry>
                </Scroll>
                
            </div>
        );
    }

}

export default App;