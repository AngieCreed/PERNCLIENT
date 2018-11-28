import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ChemEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            fcLevel: '',
            phLevel: '',
            taLevel: '',
            cyaLevel: '',
            chLevel: '',
            owner: '',
           
        }
    }

    componentWillMount() {
        this.setState({
            id: this.props.chem.id,
            fcLevel: this.props.chem.fcLevel,
            phLevel: this.props.chem.phLevel,
            taLevel: this.props.chem.taLevel,
            cyaLevel: this.props.chem.cyaLevel,
            chLevel: this.props.chem.chLevel,
            owner: this.props.chem.owner
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader className='modal-font'>Log Your Pool Chemistry Levels</ModalHeader>
                    <ModalBody>
                            <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label className='modal-font' for="fcLevel">Free Chlorine</Label>
                                <Input id="fcLevel" type="number" name="fcLevel" value={this.state.fcLevel} placeholder="enter FC level" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label className='modal-font' for="phLevel">pH</Label>
                                <Input id="phLevel" type="number" name="phLevel" value={this.state.phLevel} placeholder="enter pH level" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label className='modal-font' for="taLevel">Total Alkalinity</Label>
                                <Input id="taLevel" type="number" name="taLevel" value={this.state.taLevel} placeholder="enter TA level" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label className='modal-font' for="cyaLevel">CYA</Label>
                                <Input id="cyaLevel" type="number" name="cyaLevel" value={this.state.cyaLevel} placeholder="enter CYA level" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label className='modal-font' for="chLevel">Calcium Hardness</Label>
                                <Input id="chLevel" type="number" name="chLevel" value={this.state.chLevel} placeholder="enter CH level" onChange={this.handleChange} />
                            </FormGroup>
                            <Button className='log-button' type="submit" >Enter</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ChemEdit;