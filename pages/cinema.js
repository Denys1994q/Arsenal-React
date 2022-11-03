import { useEffect } from "react";

import Search from "../components/cinema/cinema_Search/Search";
import Movies from "../components/cinema/cinema_MoviesList/Movies";

// export const getStaticProps = async () => {
//     const res = await fetch("https://www.omdbapi.com/?apikey=e8ceae38&s=arsenal");
//     const data = await res.json();

//     return {
//         props: { cards: data },
//     };
// };

const Cinema = ({ cards }) => {
    useEffect(() => {
        console.log(1);
    }, []);

    // const list = cards.Search.map(item => {
    //     return <li>{item.Title}</li>;
    // });

    return (
        <div className='cinema'>
            <Search />
            <Movies />
            {/* <ul>{list}</ul> */}
        </div>
    );
};

export default Cinema;
