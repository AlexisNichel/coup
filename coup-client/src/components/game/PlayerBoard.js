import React from 'react'
import './PlayerBoardStyles.css'
import BackCard from "../../assets/back.png"
import Duke from "../../assets/duke.png"
import Captain from "../../assets/captain.png"
import Assassin from "../../assets/assassin.png"
import Contessa from "../../assets/contessa.png"
import Ambassador from "../../assets/ambassador.png"
import Coin from "../../assets/coin.png"


export default function PlayerBoard(props) {
    let boardItems = null
    let influenceCard = {
        duke: Duke,
        captain: Captain,
        assassin: Assassin,
        contessa: Contessa,
        ambassador: Ambassador
    }
    if (props.players.length > 1) {
        console.log(props.players);
        boardItems = props.players.map((player, index) => player.name !== props.current ?
            <span className="PlayerBoardItem" style={{ backgroundColor: `${player.color}` }} key={index}>
                <h2>{player.name}</h2>
                {player.influences.map((influence, index) => {
                    return <div key={index} className="InfluenceUnitContainerBack">
                        <img src={BackCard} alt="" />
                        <br></br>
                    </div>
                })
                }
                {player.deadInfluences.map((deadInfluence, index) => {
                    return <div key={index} className="InfluenceUnitContainerBack">
                        <img src={`${influenceCard[deadInfluence]}`} alt="" />
                        <br></br>
                    </div>
                })
                }
                <br></br>
                <hr></hr>
                <img className="coinImage" src={Coin} alt="" /> <h3>{player.money}</h3>
             {
           
         }
            </span> : <span></span>
        );
    }
    
    return (
        <div className="PlayerBoardContainer" style={{ textAlign: "center" }}>
            {boardItems}
        </div>
    )
}



