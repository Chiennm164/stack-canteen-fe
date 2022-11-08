import { BsSuitHeart } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './menu.scss'
import fakeListDish from '~/model/FakeDish'
function Menu(props) {
     const listMenu = [
          {
               id: 1,
               value: 'lunch',
          },
          {
               id: 2,
               value: 'dinner',
          },
          {
               id: 3,
               value: 'breakfast',
          },
          {
               id: 4,
               value: 'snacks',
          }
          ,
          {
               id: 5,
               value: 'Favorite',

          }
     ]

     const handlerData = (e) => {
          let dataSend = []
          switch (e) {
               case 1:
               case 2:
               case 3:
               case 4:
                    dataSend = fakeListDish.filter((item) => item.mealTime === e)
                    break;
               case 5:
                    dataSend = fakeListDish.filter((item) => item.like === true)
                    break;
               default:
                    break;
          }
          props.sendData(dataSend)
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
                                                  return (<button key={index} onClick={(e) => { handlerData(item.id) }} ><span><BsSuitHeart /></span>{item.value}</button>)
                                             } else {
                                                  return (<button key={index} onClick={(e) => { handlerData(item.id) }}> {item.value}</button>)
                                             }
                                        })
                                   }
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
