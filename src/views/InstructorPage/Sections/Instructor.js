import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/blogStyle.js";

const useStyles = makeStyles(styles);

export default function SectionInstructors(props) {
  const classes = useStyles();
  const { instructors } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>Latest Articles</h2>
        <GridContainer>
          {instructors.map((instructor) => (
            <GridItem md={4} sm={4}>
              <Card blog>
                <CardHeader image>
                  <a href={"profile-page/" + instructor._id}>
                    {/* const urlRandomGenerator = () => {
                         

                    } */}
                    <img src={instructor.imgURL} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${instructor.imgURL})`,
                      opacity: 1,
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <h3
                    className={classNames(
                      classes.cardCategory,
                      classes.textRose
                    )}
                  >
                    {instructor.name}
                  </h3>
                  <h4 className={classes.cardTitle}>
                    <a href={"profile-page/" + instructor._id}>ID</a>
                  </h4>
                  <p className={classes.cardDescription}>
                    {instructor.description}
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

SectionInstructors.propTypes = {
  instructors: PropTypes.any,
};
