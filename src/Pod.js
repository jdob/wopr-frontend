import React, { Component } from 'react';


class Pod extends Component {

    render() {
        return(
            <div className="pod">
                <img src="tic-tac-toe.gif" width="60px" height="60px" />
                <div className="pod-name">{this.props.name}</div>
                {/* <div className="pod-image"><strong>Image:</strong> {this.props.image}</div> */}
            </div>
        )
    }

}

export default Pod;