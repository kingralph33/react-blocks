import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className="absolute inset-x-0 top-0 box-border w-screen h-32 p-4 border-4 bg-green-600">
                <h1>Header</h1>
            </div>
        )
    }
}

export default Header;