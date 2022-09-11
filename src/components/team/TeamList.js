
const TeamList = (props) => {
    const {cardImgs, setCardImgs, setActiveHero} = props;

    const showTeamSquad = cardImgs.map((item, i) => {
        const style = item.captain
          ? "fa fa-star red-color"
          : "fa fa-star black-color";
        return (
          <li key={item.num} >
            <i onClick={() => makeCaptain(i)} className={style}></i>
            {item.position} -{" "}
            <span onClick={() => makeActive(i)}>{cardImgs[i].name}</span>
          </li>
        );
    });
    
    const makeCaptain = (i) => {
        const checkPlayersChoosen = cardImgs.filter((item) => item.name === "...");
        if (checkPlayersChoosen.length === 0) {
          // ставимо всім гравцям статус капітана - false
          cardImgs.map((item) => {
            item.captain = false;
          });
          // тому, по якому клікнули, ставимо статус капітана - true
          const index = cardImgs.findIndex((elem) => elem.num === i); // індекс елемента, по якому клікнули
          const old = cardImgs[index]; // копія елементу масиву для роботи з нею
          const newItem = { ...old, captain: true }; // новий елемент: всі свойства старого + свойство captain оновлене
          const newArray = [
            ...cardImgs.slice(0, index),
            newItem,
            ...cardImgs.slice(index + 1),
          ]; // новий масив, у який входить новий елемент
          setCardImgs(newArray);
        }
      };
    
      const makeActive = (i) => {
        setActiveHero(i);
      };

    return (showTeamSquad)
}

export default TeamList;