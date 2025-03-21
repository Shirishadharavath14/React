import { render } from "@testing-library/react";
import React, {Component} from "react";

class message extends Component {
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            message:'Thank you for Subscribing!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}
export default message