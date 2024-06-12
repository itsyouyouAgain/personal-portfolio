import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Admin DashBoard",
      description: "MERN",
      imgUrl: projImg1,
      link:"https://github.com/itsyouyouAgain/admin-dashboard",
    },
    {
      title: "Ride-Sharing",
      description: "AWS project",
      imgUrl: projImg2,
      link:"https://github.com/itsyouyouAgain/Ride-Sharing",
    },
    {
      title: "MagicVilla",
      description: "C# with .NET framework",
      imgUrl: projImg5,
      link:"https://github.com/itsyouyouAgain/MagicVilla_API",
    },
    {
      title: "Recipe-app API",
      description: "Python & Django",
      imgUrl: projImg3,
      link:"https://github.com/itsyouyouAgain/recipe-app-api",
    },
    {
      title: "Breast Cancer Classification",
      description: "",
      imgUrl: projImg4,
      link:"https://github.com/itsyouyouAgain/Breast-Cancer-Classification"
    },
    {
      title: "Medical Insurance Cost Prediction",
      description: "",
      imgUrl: projImg4,
      link:"https://github.com/itsyouyouAgain/Medical-Insurance-Cost-Prediction",
    },
    {
      title: "LeetCode",
      description: "",
      imgUrl: projImg6,
      link:"https://github.com/itsyouyouAgain/leetcode",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">LeetCode</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 4).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <Row>
                        {
                          projects.slice(3, 5).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.slice(5, 6).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}