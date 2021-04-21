import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "../Pages/Forms/Signup";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Login from "../Pages/Forms/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
import Home from "../Pages/home/home";
import Forget from "../Pages/Forms/forget";
import TermAndCond from "../Pages/termAndCond/termAndCond";
import Blog from "../Pages/blogs/blog";
import SelectBlog from "../Pages/blogs/oneBlogPage";
import PostHome from "../Pages/Post/PostHome";
import PostReport from "../Pages/Post/PostReport";
import Proposal from "../Pages/Proposal/Proposal"

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/_pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
          </Route>
          <Route exact path="/post">
            <PostHome />
          </Route>
          <Route exact path="/post-report">
            <PostReport />
          </Route>
          <Route exact path="/Proposal">
            <Proposal />
          </Route>
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/terms" component={TermAndCond} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={SelectBlog} />
        </Switch>
      <Footer />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
