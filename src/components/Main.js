import React, { Component } from 'react';

class Main extends Component {
    render(){
        return(
            <div className="box-border ml-8 w-auto h-96 p-4 border-4 bg-red-500">
                <h1>Main</h1>
                { this.props.children }
            </div>
        )
    }
}

export default Main;