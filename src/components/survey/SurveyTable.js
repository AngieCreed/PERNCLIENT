import React from 'react';
import {Table} from 'reactstrap'

const SurveyTable = (props) => {
    return (
        <div>
            <h3>Thank You For Completing This Survey</h3>
            <hr/>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th scope="col">Ease of Use</th>
                        <th>Quality</th>
                        <th>Meets Needs</th>
                        <th>Sastisfaction</th>
                        <th>Feedback</th>
                    </tr>
                    <tbody>
                        {props.survey.map((survey, id) => {
                            return(
                                <tr key={id}>
                                    <th scope="row">{survey.id}</th>
                                        <td>{survey.easeofuse}</td>
                                        <td>{survey.quality}</td>
                                        <td>{survey.meetsneed}</td>
                                        <td>{survey.satisfaction}</td>
                                        <td>{survey.feedback}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </thead>
            </Table>

        </div>
    )
}

export default SurveyTable;