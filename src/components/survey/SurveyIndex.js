import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'
import SurveyCreate from './SurveyCreate'
import APIURL from './helpers/environment';


class SurveyIndex extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                survey: [],
            }
        }

      componentWillMount() {
          this.fetchSurvey()
      }
        
      fetchSurvey = () => {
          fetch(`${APIURL}/survey`, {
              method: 'GET',
              headers: new Headers({
                  'Content-Type': 'application/json',
                  'Authorization': this.props.token
              })
          })
          .then((res) => res.json())
          .then((logData) => {
              return this.setState({survey: logData})
          })
      }

    render() {

        return (
            <Container className='survindex'>
                <Row className='row justify-content-center'>
                    <Col md='5'>
                    <SurveyCreate token={this.props.token} updateSurveyArray={this.fetchSurvey} />
                    </Col>
                    
                </Row>
            </Container>
        )
    }

    }

    export default SurveyIndex;


