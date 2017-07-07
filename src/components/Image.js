import React from 'react';
import { Col, Card, CardImg} from 'reactstrap';
import './styles.css';
const Image = (props) => (
    <Col>
        <Card>
            <div id="thumb">
            <CardImg onClick = {props.show} width="100%" height="100%" src={props.link} />
            </div>
        </Card>
    </Col>
)

export default Image;
