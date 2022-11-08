import { AiFillStar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoIosAddCircleOutline } from 'react-icons/io'
import fakeListDish from '~/model/FakeDish'

import './dish.scss'
import { useState } from 'react'
function TemplateDish(props) {

     let data = props.data
     function btnLike(id, e) {
          let a = e.currentTarget.classList.toggle("btnLike");
          if (a === true) {
               fakeListDish.forEach((item) => {
                    if (item.id === id) {
                         item.like = true;
                         console.log(item);
                    }
               })
          } else {
               fakeListDish.forEach((item) => {
                    if (item.id === id) {
                         item.like = false;
                         console.log(item);
                    }
               })
          }
     }
     const [stateAdd, setStateAdd] = useState('false')

     function btnAdd(e) {
          let a = e.currentTarget.classList.toggle('btn-add')
          if (a === true) {
               setStateAdd(false)
          } else {
               setStateAdd(true)
          }
     }

     function handlerAddBtn() {
          if (stateAdd === false) {
               return (<span><IoIosCheckmarkCircleOutline /></span>)

          } else {
               return (<span><IoIosAddCircleOutline /></span>)
          }
     }
     return (
          <div className="dish">
               <div className="dish-wrap">
                    <div className='dish-wrap-p'>
                         <div className="dish-img ">
                              <img src={data.src} alt="mon1" />
                              <span onClick={(e) => {
                                   btnLike(data.id, e)
                              }} className={data.like === true ? "like-element btnLike" : "like-element"} > <AiOutlineHeart /></span>
                         </div>
                         <div className="content">
                              <div className="title">{data.name}</div>
                              <div className="review">
                                   <div className='star'><span><AiFillStar /></span>{data.star}</div>
                                   <div className='time'><span><BiTime /></span>{data.time}</div>
                              </div>
                              <div className="check"><span><GoPrimitiveDot /></span>{data.allergenic} </div>
                              <div className="price">{data.price}</div>
                         </div>
                         <div onClick={(e) => { btnAdd(e) }} className='btn-card'>
                              {
                                   handlerAddBtn()
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default TemplateDish;
