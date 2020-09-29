import React, { Component } from 'react'
import '../App.css'

export default class AddFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addTaskToTasksList(this.state);

        this.setState({
            title: "",
            author: "",
            details: "",
        });
    };

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            // onChange={this.handleChange}
                            onChange={(event) => {
                                this.handleChange(event);
                            }}
                        />
                    </label>
                    <label>
                        Calories:{" "}
                        <input
                            type="text"
                            name="calories"
                            value={this.state.calories}
                            // onChange={this.handleChange}
                            onChange={(event) => {
                                this.handleChange(event);
                            }}
                        />
                    </label>
                    <label>
                        Image:
                        <input
                            type="text"
                            name="image"
                            value={this.state.image}
                            // onChange={this.handleChange}
                            onChange={(event) => {
                                this.handleChange(event);
                            }}
                        />
                    </label>

                    <button>Add Food</button>
                </form>
            </div>
        )
    }
}
