import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Home = (props) => {
    const projects = [
        {},
    ]

    return (
        <>
        <Container className='vertical-center'>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <p>Hola! Mi nombre es...</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Mauricio De León</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Desarrollador Front End, apasionado por la inteligencia artificial, y el diseño UI/UX</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>¡Hablemos!</Button>
                        </Col>
                    </Row>
                </Col>
                <Col><p>Image</p></Col>
            </Row>
        </Container>
        <Container>
        <Row>
            <Col>
                
                        <h1>Mauricio De León</h1>
            </Col>
        </Row>
        <Row>
            {projects.map(project => 
                <Col>
                    <ProjectCard />
                </Col>)}
        </Row>
    </Container>
    </>
    );
};

export default Home;