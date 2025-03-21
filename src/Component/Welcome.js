import React, {Component} from "react";
class Welcome extends Component {
    render() {
        return<h1>welcome {this.props.name} a.ka. {this.props.heroname}</h1>
    }
}
export default Welcome