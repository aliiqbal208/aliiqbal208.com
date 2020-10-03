import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Footer from "./components/Footer";
import AboutMe from "./components/home/AboutMe";
import MainBody from "./components/home/MainBody";
import Project from "./components/home/Project";
import Skills from "./components/home/Skills";
import Navbar from "./components/Navbar";
import { showBlog, showNavigationbar } from "./editable-stuff/configurations.json";
import GithubCalendarPage from "./components/home/GithubCalendarPage";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Skills />
      <Project />
      <GithubCalendarPage />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />}
    <Footer />
  </BrowserRouter>
);

export default App;
