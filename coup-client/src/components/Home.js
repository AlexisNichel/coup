import React, { Component } from 'react'
import { Link } from "react-router-dom";
import coup from "../assets/coup.png"
import footer from "../assets/footer.png"
import RulesModal from './RulesModal';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="homeContainer">
                <img src={coup} alt="coup"/>
                <div className="subheaderContainer">
                     <img src={footer} alt="coup"/>
                     <h3>A game of deduction and deception</h3>
                </div>
                <div className="input-group-btn">
                    <Link className="home" to="/create" >Create Game</Link>
                </div>
                <div className="input-group-btn">
                    <Link className="home" to="/join" >Join Game</Link>
                </div>
                <div className="footerContainer">
                    <div className="homeModalContainer">
                    <RulesModal home={true}/> 
                </div>
                </div>
            </div>
            </>
        )
    }
}
