import React from 'react';
import './App.css';
import {Navigation,Header,Layout,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div>
        <div className="demo-big-content">
            <Layout>
                <Header className='header-color' title="Shadi Aoutabachi" scroll>  
                  <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="S.A.">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main></Main>
                </Content>
            </Layout>
        </div>
    </div>
  );
}

export default App;
