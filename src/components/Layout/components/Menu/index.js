import { BsSuitHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './menu.scss'
function Menu() {
     // const listMenu = ['lunch', 'dinner', 'breakfast', 'snacks']

     return (
          <section id="menu">
               <div className="container">
                    <div className="row">
                         <div className="wrap">
                              <div className='list'>
                                   <a href=".">lunch</a>
                                   <a href=".">dinner</a>
                                   <a href=".">breakfast</a>
                                   <a href=".">snacks</a>
                                   <a href="."><span><BsSuitHeart /></span>Favorite</a>
                              </div>
                              <div className='cart'>
                                   <span >
                                        <AiOutlineShoppingCart />
                                   </span>
                                   <div className='cart-num'>
                                        2
                                   </div>
                              </div>

                         </div>

                    </div>
               </div>
          </section>
     );
}

export default Menu;
