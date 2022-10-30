// хуки
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Player = (props) => {
    const {players} = props;
    const [allPlayers, setAllPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    
    const {id} = useParams();

    const findPlayer = () => {
        const w = allPlayers.length > 0 ? allPlayers.filter(it => it.squadNumber === +id) : null
        setSelectedPlayer(w)
    }

    const makePlayersArr = () => {
        let newArr = [];
        return players ? players.map(item => {
        const g = item.goalkeepers ? item.goalkeepers.map(it => {
            newArr.push(it)
        }) : null
        const d = item.defenders ? item.defenders.map(def => {
            newArr.push(def)
        }) : null
        const m = item.midfielders ? item.midfielders.map(mid => {
            newArr.push(mid)
        }) : null
        const f = item.forwards ? item.forwards.map(forw => {
            newArr.push(forw)
        }) : null
        setAllPlayers(newArr)
        }) : null
    }

    useEffect(() => {
        makePlayersArr()
    }, [])

    useEffect(() => {
        findPlayer()
    }, [allPlayers, id])

    return (
        <div className="player">
            {selectedPlayer !== null ? 
            <>
            <h1 className="player-title">{selectedPlayer[0].name}</h1>
            <div className="player-photo"><img src={selectedPlayer[0].img} alt="" /></div>
            <div className="player-info">
                <p><span>Name:</span>{selectedPlayer[0].name}</p>
                <p><span>Squad number:</span>{id}</p>
                <p><span>Born:</span>{selectedPlayer[0].born}</p>
                <p><span>Arsenal debut:</span>{selectedPlayer[0].arsenalDebut}</p>
                <p><span>Previous clubs:</span>{selectedPlayer[0].previousClubs}</p>
            </div>
            </> : 
            ''}
        </div>
    )
}

export default Player;