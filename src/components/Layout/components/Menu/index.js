import { BsSuitHeart } from 'react-icons/bs'
import './menu.scss'
function Menu() {
     // const listMenu = ['lunch', 'dinner', 'breakfast', 'snacks']

     return (
          <section id="menu">
               <div className="container">
                    <div className="row">
                         <div className="wrap">
                              <a href=".">lunch</a>
                              <a href=".">dinner</a>
                              <a href=".">breakfast</a>
                              <a href=".">snacks</a>
                              <a href="."><span><BsSuitHeart /></span>Favorite</a>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Menu;
