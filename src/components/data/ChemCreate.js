import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import APIURL from '../../helpers/environment';

class ChemCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            fcLevel: '',
            phLevel: '',
            taLevel: '',
            cyaLevel: '',
            chLevel: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/chem/add`, {
            method: 'POST',
            body: JSON.stringify({ chem: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => {
            this.props.updateChemArray();
            this.setState({
                id: '',
            fcLevel: '',
            phLevel: '',
            taLevel: '',
            cyaLevel: '',
            chLevel: ''
            })
        })
    }


    render() {
        return (
            <div className='chem-center'>
                <h3>Log Your Current Water Levels</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="fcLevel">Free Chlorine</Label>
                        <Input id="fcLevel" type="number" name="fcLevel" value={this.state.fcLevel} placeholder="enter FC level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phLevel">pH</Label>
                        <Input id="phLevel" type="number" name="phLevel" value={this.state.phLevel} placeholder="enter pH level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="taLevel">Total Alkalinity</Label>
                        <Input id="taLevel" type="number" name="taLevel" value={this.state.taLevel} placeholder="enter TA level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cyaLevel">CYA</Label>
                        <Input id="cyaLevel" type="number" name="cyaLevel" value={this.state.cyaLevel} placeholder="enter CYA level" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="chLevel">Calcium Hardness</Label>
                        <Input id="chLevel" type="number" name="chLevel" value={this.state.chLevel} placeholder="enter CH level" onChange={this.handleChange} />
                    </FormGroup>
                    <Button className='log-button' type="submit">Enter</Button>
                </Form>
            </div>
        )
    }
   
}

export default ChemCreate;