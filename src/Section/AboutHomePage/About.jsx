import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./About.scss";
const AboutHomePage = () => {
    return (
        <>
            <div className="about">
                <Container className="about-container">
                    <Row className="about-row">
                        <Col className="about-col" xs={12} md={6}>
                            <h3 className="about-title">
                                find your new friend
                            </h3>
                            <p className="about-text">
                                Lorem ipsum dolor sit amet consectetur. In et sit porttitor leo auctor eu. Duis sed mauris pellentesque vitae elementum cras urna enim enim. Lobortis ut hendrerit aliquet lobortis aliquam euismod ultricies neque. Nulla ligula eu auctor eleifend amet id sit. Ullamcorper nisl consectetur facilisi at consequat massa.
                            </p>
                            <Button className="about-button" variant="primary">veiw pets</Button>
                        </Col>
                        <Col className="about-col" xs={12} md={6}>
                        <Row>
                            <Col md={4}>
                            <img src={require("../../image/image 11.png")} alt="img" />
                            </Col>
                            <Col md={4}>
                            <img src={require("../../image/image 12.png")} alt="img" />
                            </Col>
                            <Col md={4}>
                            <img src={require("../../image/image 13.png")} alt="img" />
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default AboutHomePage;