import { TemplateDish } from "~/components/Template";
import './lishdish.scss'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
// import fakeListDish from "~/model/FakeDish";
import { useState } from 'react'

function ListDish(props) {


     const [stateCart, setStateCart] = useState([])
     let lishdish = props.data
     let num = lishdish.length
     if (props.st === 'All') {
          num = '';
     }
     function addCart(params) {
          setStateCart((prive) => {
               return [...prive, params]
          })
     }

     function deleteCart(params) {
          setStateCart(stateCart.filter((i) => {
               return i.id !== params.id
          })
          )
     }

     if (stateCart.length >= 0) {
          props.stt(stateCart)
     }

     return (
          <div id="listDish">
               <div className="container">
                    <div className="row">
                         <div className="show-amount">
                              {num} {props.st} food
                         </div>
                    </div>
                    <div className="row">
                         {
                              lishdish.map((item, index) => {
                                   return (<div key={index} className="col-4">
                                        <TemplateDish data={item} add={addCart} delete={deleteCart} />
                                   </div>)
                              })
                         }

                    </div>
                    <div className="row">
                         <div className="paging">
                              <div className="paging-btn-left">

                                   <span> <AiOutlineLeft /></span>
                              </div>
                              <div className="paging-content">
                                   <div className="wrap">
                                        <button>1</button>
                                        <button>2</button>
                                        <button>3</button>
                                   </div>
                              </div>
                              <div className="paging-btn-right">
                                   <span> <AiOutlineRight /></span>

                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
}

export default ListDish;
