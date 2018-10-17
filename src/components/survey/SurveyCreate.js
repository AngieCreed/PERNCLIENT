import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

class SurveyCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            easeofuse: '',
            quality: '',
            meetsneed: '',
            satisfaction: '',
            feedback: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3003/survey/complete` , {
            method: 'POST',
            body: JSON.stringify({ survey: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            this.props.updateSurveyArray();
            this.setState({
                id: '',
                easeofuse: '',
                quality: '',
                meetsneed: '',
                satisfaction: '',
                feedback: ''
            })
            alert('Thank you for completing this survey!')
        })
    }

    render() {
        return (
            <div>
                <h3>Please Complete This Brief Survey</h3>
                <h5>Select on a Scale of 1 to 5</h5>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                      <Label for='easeofuse'><b>Ease of Use</b></Label>
                          <Input type="select" name="easeofuse" id="easeofuse" value={this.state.easeofuse} onChange={this.handleChange}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>  
                  </FormGroup>
                  <FormGroup>
                      <Label for='quality'><b>Quality of App</b></Label>
                          <Input type="select" name="quality" id="quality" value={this.state.quality} onChange={this.handleChange}>  
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>  
                  </FormGroup>
                  <FormGroup>
                      <Label for='meetsneed'><b>Meets Your Needs</b></Label>
                          <Input type="select" name="meetsneed" id="meetsneed" value={this.state.meetsneed} onChange={this.handleChange}>  
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>  
                  </FormGroup>
                  <FormGroup>
                      <Label for='easeofuse'><b>Satisfaction With This App</b></Label>
                          <Input type="select" name="satisfaction" id="satisfaction" value={this.state.satisfaction} onChange={this.handleChange}>  
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Input>  
                  </FormGroup>
                  <FormGroup>
                      <Label for='feedback'><b>Please Provide Any Feedback</b></Label>
                          <Input type="text" name="feedback" id="feedback" value={this.state.feedback} placeholder="enter feedback" onChange={this.handleChange}>  
                          </Input>  
                  </FormGroup>
                  <Button className='log-button' type="submit" >Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SurveyCreate;