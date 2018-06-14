import React, { Component } from 'react';
import axios from 'axios';
import Chart from './chart';

export default class PersonalityInsight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: 'Coldplay',
            profile: {},
            
            
           
        }
        this.getProfile = this.getProfile.bind(this)
    }

    componentDidMount(){
        
    }

    

    getProfile() {
        axios.post('/api/getProfile', { name: this.state.nameInput }).then(res => { 
            let obj = {
                openness: res.data.personality[0].percentile,
                conscientousness: res.data.personality[1].percentile,
                extraversion:res.data.personality[2].percentile,
                agreeableness:res.data.personality[3].percentile,
                neuroticism: res.data.personality[4].percentile,
            }
            
            this.setState({profile: obj})
            })
    }

  

    // setProfile() {
    //     axios.post('/api/getProfile', { name: this.state.nameInput }).then(res => { this.setState({profile: res.data.personality[0]})
    //         console.log(`getprofile console`,res.data) })
    // }

    render() {
        console.log(this.state.profile)
        return (
            <div>
                <button onClick={() => {this.getProfile()}}>Get Profile</button>
                <br />
                {this.state.profile.openness}
               
                <Chart />

                






            </div>
        )
    }






}