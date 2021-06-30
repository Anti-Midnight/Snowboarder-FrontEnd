import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui icons
import Grid from "@material-ui/icons/GridOn";
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// images
import SchoolLogo from "assets/img/SchoolLogo.jpeg";
import SchoolLogo2 from "assets/img/SchoolLogo2.png";
import profilePic1 from "assets/img/assets-for-demo/test1.jpg";
import profilePic2 from "assets/img/assets-for-demo/test2.jpg";
import profilePic3 from "assets/img/assets-for-demo/test3.jpg";

import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.js";

const useStyles = makeStyles(overviewStyle);

export default function SectionOverview() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div
        className={classes.features5}
        style={{
          backgroundImage: `url(${require("assets/img/assets-for-demo/features-5.jpg")})`
        }}
      >
        <GridItem md={8} className={classNames(classes.mlAuto, classes.mrAuto)}>
          <h2 className={classes.title}>Your work will get much easier</h2>
        </GridItem>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Share Your Interesting Experiences"
                description={
                  <p>
                    Want to share your snowboarding experiences but don{"'"}t know where to post?
                    Snowboard Paradise allows you to do that and can also connect you all the snowboarders around the world!
                  </p>
                }
                icon={Grid}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Create Your Own Account"
                description={
                  <p>
                    Snowboard Paradise allows you to create your own account!
                    If you are a certified snowboard instructor, you can be on our profile!
                    You can also trade snowboards here. Try your all kinds of snowboards!
                  </p>
                }
                icon={PhoneLink}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Save Time"
                description={
                  <p>
                   Want to snowboard but don{"'"}t know where to start or find instructors? 
                   Don't worry, we{"'"}ve got a lot for you to choose! Browse all the available instructors in the Instructor Page
                   :) 
                  </p>
                }
                icon={AccessTime}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
            <GridItem sm={3} className={classes.featuresShow}>
              <InfoArea
                title="Save Money"
                description={
                  <p>
                    Snowboard Paradise is dedicated to help you find the most suitable and cheapest instructors!
                    Browse all the available instructors in the Instructor Page
                  </p>
                }
                icon={AttachMoney}
                iconColor="gray"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div className={classes.sectionTestimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>Trusted by 3000+ People</h2>
              <h5 className={classes.description}>
                The website we{"'"}ve created are
                used by
                <b> 3000+ hard-core snowboarders.</b> {" "}
                This is what some of them think:
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic1 + ")",
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic1 + ")",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Khaldi Yass</h4>
                      <p className={classes.cardDescription}>
                        {'"'}As soon as I saw this website, snowboarding becomes so much easier. I just can{"'"}t describe it
                        guys! Thank you for this work!{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic2 + ")",
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic2 + ")",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Josh Murray</h4>
                      <p className={classes.cardDescription}>
                        {'"'}Great website! I found my instructor here and have been following him for only one season, but my skills
                        skyrocketed! I have commended to all my friends who are interested in snowboarding
                        {'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
              <Card plain profile>
                <GridContainer>
                  <GridItem md={3} sm={3}>
                    <CardHeader image plain>
                      <a href="#pablo">
                        <img src={profilePic3} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic3 + ")",
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url(" + profilePic3 + ")",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem md={9} sm={9}>
                    <CardBody plain className={classes.alignLeft}>
                      <h4 className={classes.cardTitle}>Michael Onubogu</h4>
                      <p className={classes.cardDescription}>
                        {'"'}Damn, Snowboard Paradise is very creative! It allows me to share my interesting experiences with the snowboarders around the world, and t
                        that feels amazing!
                        Amazing work!{'"'}
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <div className={classes.ourClients}>
            <GridContainer justify="center">
              <GridItem md={3} sm={3}>
                <img src={SchoolLogo} alt="semiahmoo secondary schoool 1" />
              </GridItem>

              <GridItem md={3} sm={3}>
                <img src={SchoolLogo2} alt="semiahmoo secondary schoool 2" />
              </GridItem>
             
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
