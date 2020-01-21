import React from 'react';

class GetUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    };

    changeHandler = event => {
        this.setState({name: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.setName(this.state.name);
    };

    resetHandler = event => {
        event.preventDefault();
        this.props.setName("");
        this.setState({name: ""})
    };

    render() {
        if(this.props.userName !== "") 
            return (
            <form onSubmit={this.resetHandler}>
                <button type="submit">Reset</button>
            </form>
            )

        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Enter Github User name" value={this.state.name} onChange={this.changeHandler} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default GetUser;