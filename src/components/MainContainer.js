import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import config from '../config/config';
import Image from './Image';
import images from '../mockup/images.json';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
        }
    }
    componentDidMount() {
        // Bai tap.
        // Sua thanh load online.
        this.setState({
            normal: this.state.images.normal.slice(0, 5),
            sexy: this.state.images.sexy.slice(0, 5)
        })
    }
    render() {
        console.log(this.state);
        if (this.state.normal) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <h1>Beautiful Girl Extension</h1>
                        </Col>
                    </Row>
                    <Row>
                        {
                            this.state.normal.map((item, id) => (
                                <Image link={item} key={id} />
                            ))
                        }
                    </Row>
                    <Row>
                        {
                            this.state.sexy.map((item, id) => (
                                <Image link={item} key={id} />
                            ))
                        }
                    </Row>
                </Container>
            )
        }
        return <h2>Loading</h2>
    }
}

export default MainContainer;