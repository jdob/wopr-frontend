import React, { Component } from 'react';

import Pod from './Pod.js';

class Node extends Component {

    render() {
        return(
            <div className="node">
                <div className="node-name"><strong>Name:</strong> {this.props.name}</div>
                <div className="node-ip"><strong>IP:</strong> {this.props.ip}</div>
                {this.props.pods.map((p, i) =>
                    <Pod key={i} {...p} />
                )}
            </div>
        )
    }
}

export default Node;