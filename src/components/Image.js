import React from 'react';
import { Col, Card, CardImg, CardBlock, CardTitle, CardText } from 'reactstrap';

const Image = (props) => (
    <Col>
        <Card>
            <CardImg top width="100%" src={props.link} />
        </Card>
    </Col>
)

export default Image;
