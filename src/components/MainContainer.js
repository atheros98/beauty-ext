import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import config from '../config/config';
import Image from './Image';
import Lightbox from 'react-image-lightbox';
import './styles.css';
// import images from '../mockup/images.json';
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            normal: [],
            sexy: [],
            photoIndex: 0,
            isOpenNormal: false,
            isOpenSexy: false
        }
    }
    componentDidMount() {
        var that = this;
        axios.get(config.API_URL)
             .then(function(respone){
                 that.setState({
                    normal: respone.data.normal.slice(0, 5),
                    sexy: respone.data.sexy.slice(0, 5)
        })
             })
             .catch(error => console.log(error));
    }
    
    render() {
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
                                <Image show={()=>{
                                    this.setState({photoIndex: id});
                                    this.setState({isOpenNormal: true})
                                    
                                    }} link={item} key={id} />
                            ))
                        }
                    </Row>
                    <Row>
                        {
                            this.state.sexy.map((item, id) => (
                                <Image show={()=>{
                                    this.setState({photoIndex: id});
                                    this.setState({isOpenSexy: true})
                                    }} link={item} key={id} />
                            ))
                        }
                    </Row>
                     {this.state.isOpenNormal &&
                    <Lightbox
                        mainSrc={this.state.normal[this.state.photoIndex]}
                        nextSrc={this.state.normal[(this.state.photoIndex + 1) % this.state.normal.length]}
                        prevSrc={this.state.normal[(this.state.photoIndex + this.state.normal.length - 1) % this.state.normal.length]}

                        onCloseRequest={() => this.setState({isOpenNormal: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (this.state.photoIndex + this.state.normal.length - 1) % this.state.normal.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (this.state.photoIndex + 1) % this.state.normal.length,
                        })}
                    />
                }
                    {this.state.isOpenSexy &&
                    <Lightbox
                        mainSrc={this.state.sexy[this.state.photoIndex]}
                        nextSrc={this.state.sexy[(this.state.photoIndex + 1) % this.state.sexy.length]}
                        prevSrc={this.state.sexy[(this.state.photoIndex + this.state.sexy.length - 1) % this.state.sexy.length]}

                        onCloseRequest={() => this.setState({ isOpenSexy: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (this.state.photoIndex + this.state.sexy.length - 1) % this.state.sexy.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (this.state.photoIndex + 1) % this.state.sexy.length,
                        })}
                    />
                }
                </Container>
            )
        }
        return <h2>Loading</h2>
    }
}

export default MainContainer;