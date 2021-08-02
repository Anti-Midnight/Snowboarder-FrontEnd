import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            Welcome! My name is Frank Li, the main designer of Snowboard Paradise! I'm currently an incoming grade 12 student
            at Semiahmoo Secondary School in South Surrey, Canada. I'm a certified CASI Level 1 Snowboard Instructor
            who is also passionate about computer programming. <br/><br/>The purpose of this website is to connect the snowboarders around the world to
            share their interesting experiences. Ever felt lonely when snowboarding? Snowboard Paradise will be the right place 
            for you to build strong relationships with other snowboarders.<br/>
                                      I think that's it, thanks for reading :)
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
