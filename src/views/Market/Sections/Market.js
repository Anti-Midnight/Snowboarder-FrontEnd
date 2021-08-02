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

export default function SectionSnowboards(props) {
  const classes = useStyles();
  const { snowboards } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.sectionTitle}>Snowboard Snowboard List</h2>
        <GridContainer>
          {snowboards.map((snowboard) => (
            <GridItem md={4} sm={4}>
              <Card blog>
                <CardHeader image>
                  <a href={"profile-page/" + snowboard._id}>
                    {/* const urlRandomGenerator = () => {
                         

                    } */}
                    <img src={snowboard.imgURL} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${snowboard.imgURL})`,
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
                    {snowboard.name}
                  </h3>
                  <h4 className={classes.cardTitle}>
                    <a href={"profile-page/" + snowboard._id}>ID</a>
                  </h4>
                  <p className={classes.cardDescription}>
                    {snowboard.description}
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

SectionSnowboards.propTypes = {
  snowboards: PropTypes.any,
};
