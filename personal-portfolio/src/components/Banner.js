import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const toRotate = ["MERN Developer.", "Web Designer.", "cloud enthusiast."];
  const period = 100;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker;
    if (!isDeleting && text === toRotate[loopNum % toRotate.length]) {
      // Delay before deleting
      ticker = setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && text === '') {
      // Delay before switching to the next skill
      ticker = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prevNum) => prevNum + 1);
        setDelta(100);
      }, period);
    } else {
      // Typing or deleting
      ticker = setTimeout(() => {
        setText((prevText) =>
          isDeleting ? prevText.slice(0, -1) : toRotate[loopNum % toRotate.length].slice(0, prevText.length + 1)
        );
        setDelta(40 + Math.random() * 100);
      }, delta);
    }

    return () => clearTimeout(ticker);
  }, [text, loopNum, isDeleting, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated animate__fadeIn${isVisible ? ' visible' : ''}`}>
                  <h1>
                    {`Hi! I'm Aniket, a `} {" "}<br></br>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    As a seasoned software developer with over 4 years of experience in MERN stack, I continually explore new technologies and frontiers like machine learning and AI. In my current role in biotech and Clinical Trial Management Systems (CTMS), I impact 65,000+ users, enabling efficient planning and management of clinical trials.
                  </p>
                  <p>
                  Throughout my career, I've honed skills in AWS, SQL, GraphQL, Serverless, and ReactJS, consistently pushing boundaries to enhance my expertise.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-none d-md-block">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated animate__zoomIn${isVisible ? ' visible' : ''}`}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
