import mon1 from '../../../assets/images/dishs/mon1.jpg';
import { AiFillStar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { GoPrimitiveDot } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCheckCircle } from 'react-icons/bs'


import './dish.scss'
function TemplateDish() {
     return (
          <div className="dish">
               <div className="dish-wrap">
                    <div className='dish-wrap-p'>
                         <div className="dish-img">
                              <img src={mon1} alt="mon1" />
                              <span> <AiOutlineHeart /></span>
                         </div>
                         <div className="content">
                              <div className="title">Set a India vegetable</div>
                              <div className="review">
                                   <div className='star'><span><AiFillStar /></span>4.5/755</div>
                                   <div className='time'><span><BiTime /></span>12mm</div>
                              </div>
                              <div className="check"><span><GoPrimitiveDot /></span>No allergenic </div>
                              <div className="price">$25.99</div>
                         </div>
                         <div className='btn-card'>
                              <span><BsCheckCircle /></span>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default TemplateDish;
