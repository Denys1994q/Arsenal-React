import Link from "next/link";

import { players } from "./data";

const Squad = ({ setShowTab }) => {
    const showData = position => {
        const playersOnPosition = players.filter(item => item.position === position);

        const showPlayers = playersOnPosition.map(item => {
            return (
                <li onClick={() => setShowTab(false)} key={item.squadNumber}>
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
            <div className='header-tab-item'>
                <p>GOALKEEPERS</p>
                <ul>{showData("goalkeepers")}</ul>
            </div>
            <div className='header-tab-item'>
                <p>DEFENDERS</p>
                <ul>{showData("defenders")}</ul>
            </div>
            <div className='header-tab-item'>
                <p>MIDFIELDERS</p>
                <ul>{showData("midfielders")}</ul>
            </div>
            <div className='header-tab-item'>
                <p>FORWARDS</p>
                <ul>{showData("forwards")}</ul>
            </div>
        </>
    );
};

export default Squad;
