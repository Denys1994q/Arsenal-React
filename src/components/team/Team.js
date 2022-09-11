// картинки
import hulk from "../../imgs/team-card-hulk.jpg";
import team_header from "../../imgs/team-header.jpg";
import Skeleton from "../skeleton/Skeleton";
// хуки
import { useState } from "react";
// компоненти
import TeamSubs from "./TeamSubs";
import TeamPlayersBoard from "./TeamPlayersBoard";
import TeamList from "./TeamList";
import TeamPlayerDescription from "./TeamPlayerDescription";

const Team = () => {
  const [activeHero, setActiveHero] = useState(null);
  const [cardImgs, setCardImgs] = useState([
    {
      img: hulk,
      num: 0,
      loading: false,
      name: "  ",
      description: "",
      position: "Goalkeeper",
      captain: false,
    },
    {
      img: hulk,
      num: 1,
      loading: false,
      name: "",
      description: "",
      position: "Left Back",
      captain: false,
    },
    {
      img: hulk,
      num: 2,
      loading: false,
      name: "",
      description: "",
      position: "Center Back",
      captain: false,
    },
    {
      img: hulk,
      num: 3,
      loading: false,
      name: "",
      description: "",
      position: "Center Back",
      captain: false,
    },
    {
      img: hulk,
      num: 4,
      loading: false,
      name: "",
      description: "",
      position: "Right Back",
      captain: false,
    },
    {
      img: hulk,
      num: 5,
      loading: false,
      name: "",
      description: "",
      position: "Left midfielder",
      captain: false,
    },
    {
      img: hulk,
      num: 6,
      loading: false,
      name: "",
      description: "",
      position: "Center midfielder",
      captain: false,
    },
    {
      img: hulk,
      num: 7,
      loading: false,
      name: "",
      description: "",
      position: "Right midfielder",
      captain: false,
    },
    {
      img: hulk,
      num: 8,
      loading: false,
      name: "",
      description: "",
      position: "Left forward",
      captain: false,
    },
    {
      img: hulk,
      num: 9,
      loading: false,
      name: "",
      description: "",
      position: "Center forward",
      captain: false,
    },
    {
      img: hulk,
      num: 10,
      loading: false,
      name: "",
      description: "",
      position: "Right forward",
      captain: false,
    },
  ]);

  const content = activeHero || activeHero === 0 ? 
    <div className='char__info-box'>
      <TeamPlayerDescription cardImgs={cardImgs} activeHero={activeHero} />
    </div> : 
  <Skeleton />
  
  return (
    <>
      <div className='team'>
        <div className='team-left'>
          <div className='team-left-img'>
            <img src={team_header} alt='' />
          </div>
          <div className='team-left-text'>
            <ol>
              <li>Click on a card and get your random hero</li>
              <li>Choose a captain</li>
              <li>Make three substitutions if you need</li>
            </ol>
            <div className='team-left-squad'>
              <ul>
                <TeamList cardImgs={cardImgs} setCardImgs={setCardImgs} setActiveHero={setActiveHero} />
              </ul>
            </div>
          </div>
        </div>
        <div className='team-right team-container'>
          <TeamPlayersBoard cardImgs={cardImgs} setCardImgs={setCardImgs} />
        </div>
      </div>
      <div className='team-bottom'>
        <div className='char__info'>
          {content}
        </div>
        <div className='team-bottom-subs'>
          <TeamSubs cardImgs={cardImgs} setCardImgs={setCardImgs} />
        </div>
      </div>
    </>
  );
};

export default Team;
