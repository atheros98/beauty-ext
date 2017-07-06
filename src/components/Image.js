import React from 'react';
import { Col, Card, CardImg} from 'reactstrap';

const Image = (props) => (
    <Col>
        <Card>
            <CardImg onClick = {props.show} width="100%" src={props.link} />
        </Card>
    </Col>
)

export default Image;
