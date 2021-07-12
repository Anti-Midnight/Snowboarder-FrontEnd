/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";

import People from "@material-ui/icons/People";

import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import avatar from "assets/img/faces/avatar.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage(props) {

  const [instructor, setInstructor] = React.useState({ "contact": [], "experience": [] });
  const fetchInstructorByID = () => {
    const instructorID = props.match.params.id;
    const url = process.env.REACT_APP_REST_API_LOCATION + "/instructors/" + instructorID;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        setInstructor(data);
        data.experience.map((i) => console.log(i));
      })
      .catch(err => console.log(err))

  }

  React.useEffect(() => {
    fetchInstructorByID();
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
  }, []);
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Snowboarder Paradise"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info"
        }}
      //{...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={instructor.imgURL} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{instructor.name}</h3>
                  <h6>BEGINNER SNOWBOARDER</h6>
                  {instructor.contact.map(cont => {
                    if (cont.socialMedia == "Facebook") {
                      return (<Button
                        href={cont.id}
                        target="_blank"
                        justIcon
                        simple
                        color="facebook"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-facebook"} />
                      </Button>)
                    }else if(cont.socialMedia == "Twitter"){
                      return (<Button
                        href={cont.id}
                        target="_blank"
                        justIcon
                        simple
                        color="twitter"
                        className={classes.margin5}
                        >
                        <i className={classes.socials + " fab fa-twitter"} />
                        </Button>)
                    }else if(cont.socialMedia == "Instagram"){
                      return (<Button
                        href={cont.id}
                        target="_blank"
                        justIcon
                        simple
                        color="pinterest"
                        className={classes.margin5}
                        >
                        <i className={classes.socials + " fab fa-instagram"} />
                        </Button>)}
                  })}


                </div>
              </div>
              
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              {instructor.description}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[

                {
                  tabButton: "Connections",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        {instructor.experience.map(exp => (
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={exp.imgURL} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      {exp.title}
                                    </h4>

                                    <p className={classes.description}>
                                      {exp.detail}
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>


                        ))}


                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-profile"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
