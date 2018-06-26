import React, { Component } from 'react';
import Header from '../Header/Header';
import './Insights.css';
import axios from 'axios';


export default class Insights extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

componentDidMount(){
    axios.get('/api/getSavedProfiles').then(res => {
        
    })
}

    render() {
        // console.log(this.props)
        return (
            <div>
                <Header />
                <div className='Insights'>
                    Insights page
                    <h1>{this.props.profile}</h1>
                </div>
            </div>
        )
    }
}