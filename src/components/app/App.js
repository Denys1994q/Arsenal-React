// стилі і картинки
import "../../style/style.sass";
// хуки
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// компоненти
import Header from "../header/Header";
import Main from "../main/Main";
import Team from "../team/Team";
import Cinema from "../cinema/Cinema";
import Shop from "../shop/Shop";
import Player from "../squad/squad_Player/Player";
import Contact from "../contact/Contact";

function App() {
    return (
        <div className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/squad/:id' element={<Player />} />
                    <Route path='/cinema' element={<Cinema />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
