import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

class AddItem extends Component {
    state = {
        title: ''
    };


    changing = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    submitting = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({title: ''})

    };

// Add todo

    render() {
        return (
            <form onSubmit={this.submitting} style={{display: 'flex'}}>
                <input type="text"
                       name="title"
                       placeholder='Add Todo...'
                       value={this.state.title}
                       style={{flex: 10, padding: '5px'}}
                       onChange={this.changing}
                />
                <input type="submit"
                       value="Submit"
                       className='btn'
                       style={{flex: 1}}

                />
            </form>
        );
    }
}

AddItem.propTypes = {
    addItem: PropTypes.func.isRequired,

};
export default AddItem;
