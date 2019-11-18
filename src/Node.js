import React, { Component } from 'react';

import Pod from './Pod.js';

class Node extends Component {

    constructor(props) {
        super(props);
        this.nodeInfo = this.nodeInfo.bind(this);
    }

    mode() {
        return process.env.REACT_APP_MODE || 'light'
    }

    nodeInfo() {
        if (this.props.name !== 'Unscheduled') {
            return (
                <div className="node">
                    <div className={"node-name-" + this.mode()}><strong>Name:</strong> {this.props.name}</div>
                    <div className={"node-role-" + this.mode()}><strong>Role:</strong> {this.props.role}</div>
                    <div className={"node-ip-" + this.mode()}><strong>IP:</strong> {this.props.ip}</div>
                    <div className="node-pods">
                        {this.props.pods.map((p, i) =>
                            <Pod key={i} {...p} />
                        )}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="node">
                    <div className="node-name-light">Unscheduled Pods</div>
                    <div className="node-pods-light">
                        {this.props.pods.map((p, i) =>
                            <Pod key={i} {...p} />
                        )}
                    </div>
                </div>
            )
        }
    }

    render() {
        return(this.nodeInfo())
    }
}

export default Node;