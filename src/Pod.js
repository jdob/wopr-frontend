import React, { Component } from 'react';


class Pod extends Component {

    render() {
        return(
            <div className="pod">
                <div className="pod-name"><strong>Name:</strong> {this.props.name}</div>
                <div className="pod-image"><strong>Image:</strong> {this.props.image}</div>
            </div>
        )
    }

}

export default Pod;