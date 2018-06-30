import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import './PersonalityInsight.css';


class PersonalityInsight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInput: '',
            profile: {},
            showBarGraph: false,




        }
        this.getProfile = this.getProfile.bind(this)
    }

    componentDidMount() {

    }

    saveProfile() {

        axios.post('/api/saveProfile', { profile: this.state.profile, name: this.state.nameInput }).then(() => {
            alert('Saved')
        })
    }



    getProfile() {
        if (this.state.nameInput === '') {
            alert('Please fill out the required field')
        } else

            axios.post('/api/getProfile', { name: this.state.nameInput }).then(res => {
                let obj = {
                    openness: Math.round(res.data.personality[0].percentile * 100),
                    conscientiousness: Math.round(res.data.personality[1].percentile * 100),
                    extraversion: Math.round(res.data.personality[2].percentile * 100),
                    agreeableness: Math.round(res.data.personality[3].percentile * 100),
                    neuroticism: Math.round(res.data.personality[4].percentile * 100),
                }


                this.setState({ showBarGraph: true, profile: obj })
            })

    }

    render() {
        console.log(this.state.profile)

        if (this.state.showBarGraph === false) {

            return (
                <div className=''>
                    <button onClick={() => { this.getProfile() }}>Get Profile</button>
                    <br />

                    <input placeholder='Search Artist Here' onChange={(e) => this.setState({
                        nameInput: e.target.value
                    })} />
                </div>
            )
        } else
            return (
                
                <div className='upper'>

                    <button onClick={() => { this.getProfile() }}>Get Profile</button>
                    <br />
                    <input onChange={(e) => this.setState({
                        nameInput: e.target.value
                    })} />
                    <br />
                    
                    <Bar 
                        data={{
                            labels: ["Openess", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism",],
                            datasets: [{
                                label: ["Big 5 OCEAN Traits"],
                                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",],
                                borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)",],
                                borderWidth: 1,
                                data: [this.state.profile.openness, this.state.profile.conscientiousness, this.state.profile.extraversion, this.state.profile.agreeableness, this.state.profile.neuroticism]
                            }
                            ]
                        }}
                        width={380}
                        height={400}
                        options={{
                            scales: {
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        beginAtZero: true,
                                        max: 100
                                    }
                                }]
                            },
                            maintainAspectRatio: true
                        }}
                    />

                    <button onClick={() => this.saveProfile()}>Save</button>





                       

                </div>
                
            )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile,
        user: state.user


    }
}
export default connect(mapStateToProps)(PersonalityInsight)