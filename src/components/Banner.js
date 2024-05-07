import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
    // indicate the index which word is currently displayed on the screen
    const [loopNum, setLoopNum] = useState(0);
    // is the word being typed out
    const [isDeleting, setIsDeleting] = useState(false);
    // component needs to know what text we're showing right now
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    // words to be displayed
    const toRotate = [ "Software Engineer", "Web Developer", "Data Analyst" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);

        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Emma Qing `}<span className="wrap">{text}</span></h1>
                        <p>I fell in love with programming</p>
                        <p>I am fluent in classics like Java, Javascript, Python and C#.</p>
                        <p>My field of Interest's are building new  Web Technologies, Backend and Services Technologies, Data Analysis</p>
                        {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}