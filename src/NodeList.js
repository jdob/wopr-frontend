import React, { Component } from 'react';

import Node from './Node.js';

class NodeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
        this.loadData = this.loadData.bind(this)
    }

    generateUrl(path) {
        let host = process.env.REACT_APP_BACKEND_HOST || 'localhost:5000';
        let url = 'http://' + host + '/' + path;
        return url;
    }

    loadData() {
        let url = this.generateUrl('nodes');

        fetch(url).then(results => {
            return results.json();
        }).then(data => {
            this.setState({nodes: data.nodes});
        })
    }

    componentDidMount() {
        // Initial load
        this.loadData()

        // Reload on an interval
        setInterval(this.loadData, 2000)
    }

    render() {
        return(
            <div className="node-list">
                {this.state.nodes.map((n, i) =>
                    <Node key={i} {...n} />
                )}
            </div>
        );
    }

}

export default NodeList;