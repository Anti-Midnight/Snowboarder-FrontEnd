import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { MyProvider } from "Context.js";
// pages for users
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage1 from "views/BlogPostPage1/BlogPostPage.js";
import BlogPostPage2 from "views/BlogPostPage2/BlogPostPage.js";
import BlogPostPage3 from "views/BlogPostPage3/BlogPostPage.js";

import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import InstructorPage from "views/InstructorPage/InstructorPage.js";
import MarketPage from "views/Market/MarketPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

export default function App() {
  return (
    <MyProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog-post/1" component={BlogPostPage1} />
          <Route path="/blog-post/2" component={BlogPostPage2} />
          <Route path="/blog-post/3" component={BlogPostPage3} />
          <Route path="/blog-posts" component={BlogPostsPage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/ecommerce-page" component={EcommercePage} />
          <Route path="/instructor-page" component={InstructorPage} />
          <Route path="/market-page" component={MarketPage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/profile-page/:id" component={ProfilePage} />
          <Route path="/product-page/:id" component={ProductPage} />
          <Route path="/sections" component={SectionsPage} />
          <Route path="/shopping-cart-page" component={ShoppingCartPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/" component={PresentationPage} />
        </Switch>
      </Router>
    </MyProvider>
  );
}
