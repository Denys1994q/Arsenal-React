import Link from "next/link";

import { players } from "./data";

const Squad = ({ setShowTab, setClickedBurger }) => {
    const showData = position => {
        const playersOnPosition = players.filter(item => item.position === position);

        const closeTabAndMenu = () => {
            setShowTab(false);
            setClickedBurger(false);
        };
        const showPlayers = playersOnPosition.map(item => {
            return (
                <li key={item.squadNumber} className='players__itemText'>
                    <Link href={`/squad/${item.squadNumber}`}>
                        <span>{item.squadNumber}</span>
                        {item.name}
                    </Link>
                </li>
            );
        });

        return showPlayers;
    };

    return (
        <>
            <div className='players__itemWrapper'>
                <p>GOALKEEPERS</p>
                <ul>{showData("goalkeepers")}</ul>
            </div>
            <div className='players__itemWrapper'>
                <p>DEFENDERS</p>
                <ul>{showData("defenders")}</ul>
            </div>
            <div className='players__itemWrapper'>
                <p>MIDFIELDERS</p>
                <ul>{showData("midfielders")}</ul>
            </div>
            <div className='players__itemWrapper'>
                <p>FORWARDS</p>
                <ul>{showData("forwards")}</ul>
            </div>
        </>
    );
};

export default Squad;
