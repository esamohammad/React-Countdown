import React, { Component } from 'react';
import './App.css';
class State extends Component {

    
    //constrctor ----rconst
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    //add ..increment event handller
    handleIncrement = () => {
        // console.log('clicked')
        this.setState({
            count: this.state.count + 1
        })
    }

    //minus..decrement event handller
    handleDecrement = () => {
        // console.log('clicked')
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        //destructure
        const { count } = this.state;
        return (

            <div className='App-header'>
                <p>Count : {count}</p>

                <div className='App-button'>
                    <button className='App-button' onClick={this.handleIncrement}>+</button>
                    <button onClick={this.handleDecrement} disabled={count === 0 ? true : false}>-</button>
                </div>
            </div>



        );
    }
}

export default State;
