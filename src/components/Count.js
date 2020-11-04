import React from 'react';
import './Count.css';

class Count extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    handleClickPlus() {
        // this.setState({ count: this.state.count + 1});
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1});
        }


    }

    handleClickMinus() {
        this.setState({ count: this.state.count - 1});
        if (this.state.count < 1) {
            this.setState({ count: this.state.count = 0});
        }
    }

    render()
    {
        let score;
        let stop;

        if(this.state.count > 9) {
            score = (
                <div className="modal">
                    <div className="container">
                         <p>{this.props.modal}</p>
                    </div>
                </div>
            )

        }

        return (
            
            <div className="count">
                <h2>{this.props.question}</h2>
                <div className="content">
                    <h1>{this.state.count}</h1>
                    <button onClick={()=>{this.handleClickMinus()}}>-</button>
                    <button onClick={()=>{this.handleClickPlus()}}>+</button>
                    {score}
                    {stop}
                </div>
            </div>
            
        );

    }

}

export default Count;