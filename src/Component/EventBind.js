import React, {Component} from "react";

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message: 'welcome '
        }
    }
    clickHandler() {
        console.log("cevent bind clicked")
    }

    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    
    }
}
export default EventBind