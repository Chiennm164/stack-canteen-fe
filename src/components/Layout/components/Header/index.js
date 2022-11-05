import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import './header.scss'
function Header() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-2 d-flex">
                         <Logo />
                    </div>
                    <div className="col-8">
                         <Navbar />
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                         <Profile />
                    </div>
               </div>
          </div>
     );
}

export default Header;
