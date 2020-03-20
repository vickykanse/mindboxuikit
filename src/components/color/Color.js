import React, { Component } from 'react';
import  Header from '../header/header';

class Color extends Component {
    state = {
        header: [
          {title: 'Desktop Grid'}
        ]
     }
    render() {
        return (
             <div className="wrapper">
                 <section className="container">
                     <div className="row">
                     <Header header={this.state.header[0].title} />
 
                     </div>
                 </section>
             </div>
        );
    }
}

export default Color;