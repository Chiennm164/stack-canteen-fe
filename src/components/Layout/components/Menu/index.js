import { BsSuitHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './menu.scss'
import fakeListDish from '~/model/FakeDish'
function Menu(props) {
     console.log(props.listOrder);
     const listMenu = [
          {
               id: 1,
               value: 'Lunch',
          },
          {
               id: 2,
               value: 'Dinner',
          },
          {
               id: 3,
               value: 'Breakfast',
          },
          {
               id: 4,
               value: 'Snacks',
          }
          ,
          {
               id: 5,
               value: 'Favorite',

          }
     ]
     const handlerData = (e, id, value) => {
          document.querySelectorAll('.btn-m').forEach((menu) => {
               menu.classList.remove('active-menu')
          })
          e.currentTarget.classList.toggle('active-menu');
          let dataSend = []
          switch (id) {
               case 1:
               case 2:
               case 3:
               case 4:
                    dataSend = fakeListDish.filter((item) => item.mealTime === id)
                    break;
               case 5:
                    dataSend = fakeListDish.filter((item) => item.like === true)
                    break;
               default:
                    break;
          }
          props.sendData(dataSend, value)
     }


     return (
          <section id="menu">
               <div className="container">
                    <div className="row">
                         <div className="wrap">
                              <div className='list'>
                                   {
                                        listMenu.map((item, index) => {
                                             if (item.id === 5) {
                                                  return (<button className='btn-m ' key={index} onClick={(e) => { handlerData(e, item.id, item.value) }} ><span><BsSuitHeart /></span>{item.value}</button>)
                                             } else {
                                                  return (<button className='btn-m ' key={index} onClick={(e) => { handlerData(e, item.id, item.value) }}> {item.value}</button>)
                                             }
                                        })
                                   }
                              </div>
                              <div className='cart'>
                                   <span >
                                        <AiOutlineShoppingCart />
                                   </span>
                                   <div className='cart-num'>
                                        {props.listOrder.length >= 0 ? props.listOrder.length : 0}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default Menu;
