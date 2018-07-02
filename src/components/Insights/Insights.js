import React, { Component } from 'react';
import Header from '../Header/Header';
import './Insights.css';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';




export default class Insights extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            showCharts: false,
            currentProfile: 0,
            activeID: 0
        }
        this.backButton = this.backButton.bind(this)
        this.deleteProfile = this.deleteProfile.bind(this)
    }

    componentDidMount() {
        axios.get('/api/getSavedProfiles').then(res => {
            this.setState({ profiles: res.data })
        })
    }

    handleClick(i) { this.setState({ showCharts: !this.state.showCharts, currentProfile: i, activeID: this.state.profiles[i].id }) }

    backButton() { this.setState({ showCharts: false }) }

    deleteProfile(){
       
       
        axios.delete(`/api/deleteProfile/${this.state.activeID}`).then((res) => {
            this.setState({
                showCharts:false,
                profiles:res.data
            })
        }
    )
    }

    render() {
        // console.log(this.state)
        if (this.state.showCharts === false) {
            let mappedProfiles = this.state.profiles.map(
                (e, i) => {
                    return (
                        <div key={i} className='container'>
                            <button className='button-one' onClick={() => this.handleClick(i)}>{e.artist}</button>
                        </div>
                    )
                }
            )
            return (
                <div className='BDP'>
                <div className='upper' >
                    {console.log(this.state)}
                    <Header />
                    <div className='sub-main'>
                        {mappedProfiles}
                    </div>
                    </div>
                </div>
            )
        } else return (
            <div>
                <div className='BDP'>
                <div className='upper'>
                <Header />
                <button onClick={() => this.backButton()}>Back</button>
                <button onClick={() => this.deleteProfile()}>Delete</button>
                <div className='bar'>
                <Bar
                    data={{
                        labels: ["Openess", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism",],
                        datasets: [{
                            label: ["Big 5 OCEAN Traits"],
                            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",],
                            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)",],
                            borderWidth: 1,
                            data: [this.state.profiles[this.state.currentProfile].openness, this.state.profiles[this.state.currentProfile].conscientiousness, this.state.profiles[this.state.currentProfile].extraversion, this.state.profiles[this.state.currentProfile].agreeableness, this.state.profiles[this.state.currentProfile].neuroticism]
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
                </div>
                </div>
                </div>
            </div>
        )

    }


}