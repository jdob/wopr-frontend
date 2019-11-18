import React, { Component } from 'react';


class Pod extends Component {

    mode() {
        return process.env.REACT_APP_MODE || 'light'
    }

    render() {
        return(
            <div className={"pod pod-status-" + this.props.phase.toLowerCase() + "-" + this.mode()}>
                <img src="tic-tac-toe.gif" width="80px" height="80px" alt="TTT" />
                <div className={"pod-name-" + this.mode()}>{this.props.name}</div>
                <div className={"pod-status-" + this.mode()}>{this.props.phase}</div>
                {/* <div className="pod-image"><strong>Image:</strong> {this.props.image}</div> */}
            </div>
        )
    }

}

export default Pod;