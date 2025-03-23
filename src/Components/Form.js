import React, {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props)
        this.state={username:''}
        this.state={Comment:''}
        this.state={topic:''}
    }
    handleUsernameChange=(event)=>{
        this.setState({username:event.target.value})
    }
   
    handleCommentsChange=(event)=>{
        this.setState({Comment:event.target.value})
    }
    handleTopicChange=(event)=>{
        this.setState({topic:event.target.value})
    }

    handleSubmit = (event)=>{
        alert(`${this.state.username} ${this.state.Comment} ${this.state.topic}`)
        event.preventDefault()

    }
        
        render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                
                <label>Username</label>
                <input type="text"
                 value={this.state.username} 
                 onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                
                <label>Comments</label>
                <input type="text"
                 value={this.state.Comment} 
                 onChange={this.handleCommentsChange}></input>
            </div>
            <div>
                
                <label>Topic</label>
                <select value={this.state.topic}>onChange={this.handleTopicChange}
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <button type="submit">submit</button>

            </div>
        </form>
        )
    }
}
    
export default Form