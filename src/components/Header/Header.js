import React, {Component} from 'react';
import './Header.css';




export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            width: '0px'
        }
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }

 
   openNav() {
    this.setState({
        width: '250px'
    })
        // document.getElementById("mySidenav").style.width = "250px"
    }
    
     closeNav() {
        this.setState({
            width: '0px'
        })
    //    document.getElementById("mySidenav").style.width = "0"
    }


    render (){
        return (
        <div className='header'>
          
          
          <div>
  <div id="mySidenav" className="sidenav" style={{width:this.state.width}}>
    <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>×</a>
    <a href="#/home">Home</a>
    <a href="#/insights">Insights</a>
    <a href="#/private">Profile</a>
    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
  </div>
  
 
  <span style={{fontSize: 30, cursor: 'pointer'}} onClick={() => this.openNav()}> ☰</span>
</div>




        </div>
        )
    }
}