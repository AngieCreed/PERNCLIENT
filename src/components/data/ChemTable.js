import React from 'react';
import {Table, Button} from 'reactstrap'

const ChemTable = (props) => {
    return (
        <div className='chemtable'>
            <h3>Chem Log History</h3>
            <hr />
            <Table hover>
                <thead>
                    <tr>
                        <th>Log#</th>
                        <th>FC</th>
                        <th>pH</th>
                        <th>TA</th>
                        <th>CYA</th>
                        <th>CH</th>
                    </tr>
                </thead>
                <tbody>
                    {props.chem.map((chem, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{chem.id}</th>
                                <td>{chem.fcLevel}</td>
                                <td>{chem.phLevel}</td>
                                <td>{chem.taLevel}</td>
                                <td>{chem.cyaLevel}</td>
                                <td>{chem.chLevel}</td>
                                <td>
                                    <Button id={chem.id} onClick={props.delete} className='log-button'>DELETE</Button>
                                    <Button id={chem.id} onClick={event => props.update(event, chem)} className='log-button'>EDIT</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ChemTable;