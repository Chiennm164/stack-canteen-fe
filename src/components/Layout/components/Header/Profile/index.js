import { IoMdNotificationsOutline } from 'react-icons/io'
import avatar from '../../../../../assets/images/avatar.jpg'
import './profile.scss'
function Profile() {
     return (
          <div className='profile'>
               <span>  <IoMdNotificationsOutline /></span>
               <p>Alexandro</p>
               <div className='avatar'>
                    <img src={avatar} alt="avatar" />
                    <div className='tab'>
                         <div className='tab-wrap'>
                              <a className='tab-item' href=".">My Account</a>
                              <a className='tab-item' href=".">Settings</a>
                              <a className='tab-item' href=".">Log out</a>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Profile;
