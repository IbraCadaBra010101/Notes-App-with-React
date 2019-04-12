import React, {Component} from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../App.css';

// class
class Todos extends Component {

    //render function
    render() {
        // the render function returning a JSX element.
        return this.props.todos.map((todo) => (

            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                      deleteItem={this.props.deleteItem}/>
        ));
    }
}

// proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
};

export default Todos;
