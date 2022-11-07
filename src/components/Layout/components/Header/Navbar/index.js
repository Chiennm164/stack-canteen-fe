import './navbar.scss'
// import Dash from '~/assets/icon/Dish.png'
import { BiDish } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { TbMessageDots } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
     const arrMenu = [
          {
               icon: <BiDish />,
               _name: 'order',
               src: '/',
          },
          {
               icon: <CgNotes />,
               _name: 'my order',
               src: '/myOrder',
          },
          {
               icon: <TbMessageDots />,
               _name: 'feedback',
               src: '/feedBack',
          },
          {
               icon: <FiPhoneCall />,
               _name: 'support',
               src: '/support',
          }
     ]

     return (
          <nav >
               {
                    arrMenu.map((arr, i) => {
                         return <div className='col nav' key={i} >
                              <div className='wrap'>
                                   <span> {arr.icon} </span>
                                   <a href={arr.src} alt='nav'> {arr._name}</a>
                              </div></div>
                    })
               }
          </nav>
     );
}

export default Navbar;
