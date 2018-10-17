import React from 'react';
import SurveyIndex from '../survey/SurveyIndex';
import { Container, Row, Col} from 'reactstrap';

const SurveySplash = (props) => {
    return (
        <div className='surv-bg'>
                 <SurveyIndex token = {props.sessionToken} />
        </div>
    )
}

export default SurveySplash;