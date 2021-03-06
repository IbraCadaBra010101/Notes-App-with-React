import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todos from "./Todos";

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        // destructuring the props property in the component class.
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

// proptypes

//
const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
};
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
};
export default TodoItem
