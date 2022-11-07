import { AiFillStar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
// import { IoIosAddCircleOutline } from 'react-icons/io'


import './dish.scss'
function TemplateDish(props) {

     // console.log(props);
     return (
          <div className="dish">
               <div className="dish-wrap">
                    <div className='dish-wrap-p'>
                         <div className="dish-img">
                              <img src={props.src} alt="mon1" />
                              <span> <AiOutlineHeart /></span>
                         </div>
                         <div className="content">
                              <div className="title">{props.name}</div>
                              <div className="review">
                                   <div className='star'><span><AiFillStar /></span>{props.star}</div>
                                   <div className='time'><span><BiTime /></span>{props.time}</div>
                              </div>
                              <div className="check"><span><GoPrimitiveDot /></span>{props.allergenic} </div>
                              <div className="price">{props.price}</div>
                         </div>
                         <div className='btn-card'>
                              {/* <span><IoIosAddCircleOutline /></span> */}
                              <span><IoIosCheckmarkCircleOutline /></span>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default TemplateDish;
