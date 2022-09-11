import my_photo from '../../imgs/me.jpg'
import git_logo from '../../imgs/git_logo.svg'
import fb_logo from '../../imgs/fb_logo.png'
import tg_logo from '../../imgs/tg_logo.png'

import { useState, useEffect } from 'react'

const Modal = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModal(true);
          }, 2000);
          return () => clearTimeout(timer);
      }, []);

    const closeModal = (e) => {
        if (e.target.classList.value == 'modall' || e.target.classList.value == 'material-icons modall__content-close') {
            setModal(false)
        }
    }

    return (
        <>
         {modal ?
                 <div onClick={(e) => closeModal(e)} className="modall">
                 <div className="modall__content">
                     <div onClick={closeModal}><i className="material-icons modall__content-close">close</i></div>
                     <div className="modall__content-photo"><img src={my_photo} alt="" /></div>
                     <div className="modall__content-text">Hi. My name is Denys Rybachok. I developed this web-page as part of my Portfolio for junior front-end developer position. This page is about my favourite football club Arsenal. During last year I studied HTML, CSS, LESS/SASS, JavaScript, React JS, Redux, Git. This app was created with help of React. Hope you will like it. </div>
                     <div>
                         <ul>
                             <li><a href="https://github.com/Denys1994q" target="_blank"><img src={git_logo} alt="" /></a></li>
                             <li><a href="https://www.facebook.com/denis.rybachok" target="_blank"><img src={fb_logo} alt="" /></a></li>
                             <li><a href="https://t.me/drybachok" target="_blank"><img src={tg_logo} alt="" /></a></li>
                         </ul>
                     </div>
                 </div>
            </div>  
          : 
          null}
        </>
    )
};

export default Modal;
