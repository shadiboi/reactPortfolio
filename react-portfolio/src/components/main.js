import React from "react";
import Landing from "./landingPage";
import LandingPage from "./landingPage";
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component={LandingPage}></Route>
        <Route path = "/aboutme" component={AboutMe}></Route>
        <Route path = "/contact" component={Contact}></Route>
        <Route path = "/projects" component={Projects}></Route>
        <Route path = "/resume" component={Resume}></Route> 
    </Switch>
)

export default Main;