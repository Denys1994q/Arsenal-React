import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { players } from "../../components/squad/data";

// export const getStaticPaths = async () => {
//     const res = await fetch("https://localhost:3000/squad");
//     const data = await res.json();

//     const paths = data.map(item => {
//         return {
//             params: { id: item.id },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps = async context => {
//     const id = context.params.id;
// };

const Player = () => {
    const router = useRouter();
    const { id } = router.query;

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const findPlayer = () => {
        const w = players.length > 0 ? players.filter(it => it.squadNumber === +id) : null;
        setSelectedPlayer(w);
    };

    useEffect(() => {
        findPlayer();
    }, [id]);

    return (
        <div className='player'>
            {selectedPlayer !== null ? (
                <>
                    <h1 className='player-title'>{selectedPlayer[0].name}</h1>
                    <div className='player-photo'>
                        <img src={selectedPlayer[0].img} alt='' />
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
            ) : (
                <div>{id}</div>
            )}
        </div>
    );
};

export default Player;
