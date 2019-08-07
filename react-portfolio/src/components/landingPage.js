import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return (
            <div style= {{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img src="https://library.kissclipart.com/20190806/req/kissclipart-transparency-drawing-smiley-avatar-e7f8ee41456556af.png"
                        alt="avatar" className="avatar-img"
                        />

                        <div className="banner-text"> 
                            <h1> Full Stack Web Dev</h1>
                            <hr/>
                            <p> HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB <p/>
                            </p>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;