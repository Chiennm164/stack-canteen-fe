import Alcohol from '../../../../assets/images/options/Alcohol.jpg'
import American from '../../../../assets/images/options/American.jpg'
import Asian from '../../../../assets/images/options/Asian.jpg'
import Beverages from '../../../../assets/images/options/Beverages.jpg'
import Burgers from '../../../../assets/images/options/Burgers.jpg'
import Chicken from '../../../../assets/images/options/Chicken.jpg'
import Healthy from '../../../../assets/images/options/Healthy.jpg'
import Pasta from '../../../../assets/images/options/Pasta.jpg'
import Pizza from '../../../../assets/images/options/Pizza.jpg'
import Smoothie from '../../../../assets/images/options/Smoothie.jpg'
import Steak from '../../../../assets/images/options/Steak.jpg'
import './carousel.scss'

import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'

function Carousel() {

     const options = [

          {
               _name: 'Alcohol',
               src: Alcohol
          },
          {
               _name: 'American',
               src: American
          },
          {
               _name: 'Asian',
               src: Asian
          },
          {
               _name: 'Beverages',
               src: Beverages
          },
          {
               _name: 'Burgers',
               src: Burgers
          },
          {
               _name: 'Chicken',
               src: Chicken
          },
          {
               _name: 'Healthy',
               src: Healthy
          },
          {
               _name: 'Pasta',
               src: Pasta
          },
          {
               _name: 'Pizza',
               src: Pizza
          },
          {
               _name: 'Smoothie',
               src: Smoothie
          },
          {
               _name: 'Steak',
               src: Steak
          },
     ]
     console.log(options);
     return (
          <div id="options">
               <div className="container">
                    <div className="row">
                         <div className='option-wrap'>
                              <div className='btn-left'>
                                   <BsChevronLeft />
                              </div>
                              <div className='group-option'>
                                   {
                                        options.map((ot, index) => {
                                             return (
                                                  <div key={index} className="option">
                                                       <div className="img-wrap">
                                                            <img src={ot.src} alt="a" />
                                                       </div>
                                                       <div className="name-option">
                                                            {ot._name}
                                                       </div>
                                                  </div>
                                             )
                                        })
                                   }
                              </div>
                              <div className='btn-right'>
                                   <BsChevronRight />

                              </div>
                         </div>

                    </div>

               </div>
          </div>
     );
}

export default Carousel;
