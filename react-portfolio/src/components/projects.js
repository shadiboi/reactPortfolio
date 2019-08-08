import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions,Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            activeTab: 2 
        };
    }
    toggleCategories(tabId){
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }}>React Project</CardTitle>
                   <CardText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</CardText>
                   <CardActions border>
                       <Button colored>Github</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name="share"></IconButton>
                   </CardMenu>
               </Card>

               {/* Project 3 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }}>React Project</CardTitle>
                   <CardText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</CardText>
                   <CardActions border>
                       <Button colored>Github</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name="share"></IconButton>
                   </CardMenu>
               </Card>

               {/* Project 3 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }}>React Project</CardTitle>
                   <CardText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</CardText>
                   <CardActions border>
                       <Button colored>Github</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name="share"></IconButton>
                   </CardMenu>
               </Card>
               </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div><h1>This is Express</h1></div>
            )
        } else if (this.state.activeTab === 3){
            return(
                <div><h1>This is Node</h1></div>
            )
        }
    }
   
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Express</Tab>
                    <Tab>Node</Tab>
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
           
            </div>
        )
    }
}

export default Projects;

