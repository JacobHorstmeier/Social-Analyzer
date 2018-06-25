import React, {Component} from 'react';
import Header from '../Header/Header';
import './About.css';

export default class About extends Component {
    render (){


        return (
            <div>
                <Header />
                <div className='About'>
                <h3>How are results obtained?</h3>
                <p>This web application uses IBM's Watson Personality Profile api to analyze the most recent album of the artist inputed and returns a profile based on the Big 5 Ocean Traits</p>
                <h3>What does the Big 5 Mean?</h3>
                <p>The Big Five is a research-driven approach in psychology which derives from the notion that the most common personality traits can be captured by five core dimensions: Openness to Experience. Conscientiousness. Extroversion. Agreeableness.</p>
                </div>
            </div> 
        )
    }
}