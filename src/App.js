import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './Components/Todos'
import Header from './Components/Header'
import AddItem from './Components/AddItem'
// import uuid from 'uuid';
import About from './Components/pages/About'
import axios from 'axios'

class App extends Component {

    state = {
        todos: []
    };

    // ngOnit set state of todos to res.data.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
            this.setState({todos: res.data});
            console.log(res.data)
        });
    }


    // toggle completed or not.
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => this.setState({
                todos: [...this.state.todos.filter(
                    todos => {
                        return todos.id !== id;
                    }
                )]
            }));
    };
    addItem = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {title})
            .then(response => this.setState({todos: [...this.state.todos, response.data]}))
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>

                                <AddItem addItem={this.addItem}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       deleteItem={this.deleteItem}/>
                            </React.Fragment>
                        )}/>
                    </div>
                    {/*About Route*/}
                    <Route path='/About' render={props => (
                        <About/>
                    )}/>
                </div>
            </Router>
        );
    }
}

export default App;
