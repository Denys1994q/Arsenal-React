// картинки
import hulk from "../../imgs/team-card-hulk.jpg";
import Spinner from "../spinner/Spinner";

const TeamPlayersBoard = (props) => {
    const {cardImgs, setCardImgs} = props;

    const updateImgs = (imgPath, i, name, description, homepage, wiki) => {
        const index = cardImgs.findIndex((elem) => elem.num === i); // індекс елемента, по якому клікнули
        const old = cardImgs[index]; // копія елементу масиву для роботи з нею
        const newItem = {
          ...old,
          img: imgPath,
          loading: false,
          name,
          description,
          homepage,
          wiki,
        }; // новий елемент: всі свойства старого + свойство img оновлене
        const newArray = [
          ...cardImgs.slice(0, index),
          newItem,
          ...cardImgs.slice(index + 1),
        ]; // новий масив, у який входить новий елемент
        setCardImgs(newArray);
    };

    const getImg = (i) => {
        if (cardImgs[i].img === hulk) {
          const index = cardImgs.findIndex((elem) => elem.num === i); // індекс елемента, по якому клікнули
          const old = cardImgs[index]; // копія елементу масиву для роботи з нею
          const newItem = { ...old, loading: true }; // новий елемент: всі свойства старого + свойство loading оновлене
          const newArray = [
            ...cardImgs.slice(0, index),
            newItem,
            ...cardImgs.slice(index + 1),
          ]; // новий масив, у який входить новий елемент
          setCardImgs(newArray);
    
          const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    
          fetch(
            `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d958623270bfcc1cdb0952691b682b77`
          )
            .then((data) => data.json())
            .then((res) =>
              updateImgs(
                res.data.results[0].thumbnail.path +
                  "." +
                  res.data.results[0].thumbnail.extension,
                i,
                res.data.results[0].name,
                res.data.results[0].description,
                res.data.results[0].urls[0].url,
                res.data.results[0].urls[1].url
              )
            );
        }
    };

    const showCardImgs = cardImgs.map((item, i) => {
        const clazz = item.captain === true ? "active-img" : "";
        const activeCardClazz = item.captain === true ? "active-card" : "";
        
        return (
          <div key={item.num}
            onClick={() => getImg(i)}
            className={`item item-${i + 1} card-football ${activeCardClazz}`}
          >
            <div className='card-football__side card-football__side_front'>
              <div>
                {item.loading ? (
                  <div className='spinner'>
                    <Spinner />
                  </div>
                ) : (
                  <img className={clazz} src={item.img} alt='' />
                )}
              </div>
            </div>
            <div class='card-football__side card-football__side_back'>
              <div>
                {item.loading ? (
                  <div className='spinner'>
                    <Spinner />
                  </div>
                ) : (
                  <img src={item.img} alt='' />
                )}
              </div>
            </div>
          </div>
        );
    });
    return (
        showCardImgs
    )
}

export default TeamPlayersBoard;