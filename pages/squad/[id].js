import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { players } from "../../components/pages/squad/data";

const Player = () => {
    const router = useRouter();
    const { id } = router.query;

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const findPlayer = idFromUrl => {
        const playerInfo = players.length > 0 ? players.filter(it => it.squadNumber === +idFromUrl) : null;
        setSelectedPlayer(playerInfo);
    };

    useEffect(() => {
        findPlayer(id);
    }, [id]);

    const getIdFromUlr = url => {
        const splitedArr = url.split("/");
        const IdFromUlr = splitedArr[splitedArr.length - 1];
        findPlayer(IdFromUlr);
    };

    useEffect(() => {
        if (!id) {
            getIdFromUlr(window.location.href);
        }
    }, []);

    return (
        <div className='player'>
            {selectedPlayer ? (
                <>
                    <h1 className='player-title'>{selectedPlayer[0].name}</h1>
                    <div className='player-photo'>
                        <img src={selectedPlayer[0].img} alt='selectedPlayerImage' />
                    </div>
                    <div className='player-info'>
                        <p>
                            <span>Name:</span>
                            {selectedPlayer[0].name}
                        </p>
                        <p>
                            <span>Squad number:</span>
                            {id}
                        </p>
                        <p>
                            <span>Born:</span>
                            {selectedPlayer[0].born}
                        </p>
                        <p>
                            <span>Arsenal debut:</span>
                            {selectedPlayer[0].arsenalDebut}
                        </p>
                        <p>
                            <span>Previous clubs:</span>
                            {selectedPlayer[0].previousClubs}
                        </p>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Player;
