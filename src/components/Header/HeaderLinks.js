/* eslint-disable */
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { MyContext } from "Context.js";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  let context = React.useContext(MyContext);
  let history = useHistory();
  const { dropdownHoverColor } = props;
  const classes = useStyles();

  const signOut = () => {
    fetch(process.env.REACT_APP_REST_API_LOCATION + "/users/me/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.clear();
        // context.updateUserStatus();
        //console.log(context);
        console.log("Sign out res:");
        console.log(data);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Blogs"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link to="/blog-posts" className={classes.dropdownLink}>
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>

          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="User Info"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/signup-page" className={classes.dropdownLink}>
              <PersonAdd className={classes.dropdownIcons} /> Signup Page
            </Link>,
            <Link to="/instructor-page" className={classes.dropdownLink}>
              <AssignmentIndIcon className={classes.dropdownIcons} /> Instructor Page
            </Link>,
           
            <Link to="/contact-us" className={classes.dropdownLink}>
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link to="/about-us" className={classes.dropdownLink}>
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>
          ]}
        />
      </ListItem>
      {localStorage.getItem("token") ? (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            left
            caret={false}
            hoverColor={dropdownHoverColor}
            // dropdownHeader="Dropdown Header"
            buttonText={
              // <img src={profileImage} className={classes.img} alt="profile" />
              <MyContext.Consumer>
                {context => (
                  <React.Fragment>
                    <PersonIcon />
                    {"Hi, "  + context.state.userProfile["name"]} 
                    {/* {window.innerWidth < 960 &&
                      "Hi, " + context.state.userProfile["name"]} */}
                  </React.Fragment>
                )}
              </MyContext.Consumer>
            }
            buttonProps={{
              className: classes.navLink + " " + classes.imageDropdownButton,
              color: "transparent"
            }}
            dropdownList={[
              // <Link
              //   to="/profile"
              //   className={classes.dropdownLink}
              //   key={"profile"}
              // >
              //   Profile
              // </Link>,
              <Link
                to="/orders"
                className={classes.dropdownLink}
                key={"orders"}
              >
                Orders
              </Link>,
              <Link
                to="/"
                className={classes.dropdownLink}
                onClick={() => signOut()}
                key={"signout"}
              >
                Sign Out
              </Link>
            ]}
          />
        </ListItem>
      ) : (
        <ListItem className={classes.listItem}>
          <Button
            onClick={() => history.push("/login-page")}
            className={classes.navLink}
            color="transparent"
          >
            Login
          </Button>
        </ListItem>
      )}
      <ListItem className={classes.listItem}>
        <Button
          href="/market-page"
          color={window.innerWidth < 960 ? "info" : "white"}
          className={classes.navButton}
          round
        >
          <ShoppingCart className={classes.icons} /> Market
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
