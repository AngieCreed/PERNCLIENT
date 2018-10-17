import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            }
        };
    

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleSubmit = (event) => {
            fetch('http://localhost:3003/user/createuser', {
            method: "POST", 
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>New User Signup</h3>
                <Form className='signupfont' onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" minlength='5' placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input id="su_firstname" type="firstname" name="firstname" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input id="su_lastname" type="lastname" name="lastname" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Input id="su_email" type="email" name="email" placeholder="enter email" onChange={this.handleChange}/>
                        
                    </FormGroup>
                    <Button className='log-button' type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}    

export default Signup;