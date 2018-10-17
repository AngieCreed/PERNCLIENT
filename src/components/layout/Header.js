import React from 'react';
// import {Jumbotron, Container} from 'reactstrap'
// import './App.css'

class Header extends React.Component {
   
    render() { 
        return (  
            <div className='jumbo'>
            <header>
            <div className="jumbotron jumbotron-fluid newjumbo">
                <div className="container">
                    <h1 className="display-6">Pool Chemistry Diary</h1>
                    <p className="lead">Keep a record of your pool's basic chem levels</p>
                </div>
            </div>
            </header>
            </div>
        );
    }
}
 
export default Header;

 


