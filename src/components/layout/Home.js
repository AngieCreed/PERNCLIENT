// import React, { Component } from 'react';
// import Login from '../auth/Login';
// import Signup from '../auth/Signup';

// class Home extends Component {
//     constructor() {
//         super() 
//         this.state = {
//             isUser: false
//         }
//     }

//     changeUserStatus = () => this.setState({isUser: !this.state.isUser})

//     authViewShow = () => {
//         if(this.state.isUser) {
//             return (
//                 <Login toggleForm = {this.changeUserStatus} />
//             )
//         } else {
//             return (
//                 <Signup toggleForm={ this.changeUserStatus} />
//             )
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.authViewShow()}
//             </div>
//         )
//     }
   
// }

// export default Home;