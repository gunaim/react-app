import React, {Component} from 'react';

class Increment extends Component {
    state = {
        count: 15
    };
    handleIncrement = () => {

        this.setState(prevState => {
            return {count: prevState.count + 3}
        })

        console.log("test", this.state.count);
    };

    render() {
        return (
            <div>
                <h1 className="title">{this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    };

}

export default Increment