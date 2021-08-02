import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import FaceMarc from "assets/img/faces/marc.jpg";


const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are hardcore snowboarders and coders :)</h2>
          <h5 className={classes.description}>
            Meet my partner(s)!
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12}>
          <Card profile plain>

            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceMarc} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>William Wang</h4>
              <h6 className={classes.textMuted}>co-Developer</h6>
              <p className={classes.cardDescription}>
                Oh man I LOVE CODING, and I hope you like Snowboard Paradise :))
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
