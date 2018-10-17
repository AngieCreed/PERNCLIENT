import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap'
import ChemCreate from './ChemCreate'
import ChemTable from './ChemTable'
import ChemEdit from './ChemEdit'
import './chem.css'

class ChemIndex extends Component{
constructor(props) {
    super(props)
    this.state = {
        chem: [],
        updatePressed: false,
        chemToUpdate: {}
    }
}

componentWillMount() {
    this.fetchChem()
}

fetchChem = () => {
    fetch('http://localhost:3003/chem', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
    .then((res) => res.json())
    .then((logData) => {
        return this.setState({chem: logData})
    })
}

chemDelete = (event) => {
    fetch(`http://localhost:3003/chem/${event.target.id}`, {
        method: 'DELETE',
        body: JSON.stringify({chem: {id:event.target.id}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    }).then((res) => this.fetchChem())
}

chemUpdate = (event, chem) => {
    fetch(`http://localhost:3003/chem/${chem.id}`, {
        method: 'PUT',
        body: JSON.stringify({ chem: chem }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    }).then((res) => {
        this.setState({ updatePressed: false})
        this.fetchChem();
    })
}

setUpdatedChem = (event, chem) => {
    this.setState({
        chemToUpdate: chem,
        updatePressed: true
    })
}

    render(){
        const chem = this.state.chem.length >= 1?
        <ChemTable chem={this.state.chem}
        delete={this.chemDelete} update={this.setUpdatedChem} /> : <h2>Log Your Chem Levels To See History</h2>
        return (
            <Container className='chemindex'>
                <Row>
                    <Col md='3'>
                        <ChemCreate token={this.props.token} updateChemArray={this.fetchChem} />
                    </Col>
                    <Col md='9'>
                        {chem}
                    </Col>
                </Row>
                    <Col md="12">
                    {
                        this.state.updatePressed ? <ChemEdit t={this.state.updatePressed} update={this.chemUpdate} chem={this.state.chemToUpdate} /> : <div></div>
                    }
                    </Col>
                
            </Container>
        )
    }
}

export default ChemIndex;

