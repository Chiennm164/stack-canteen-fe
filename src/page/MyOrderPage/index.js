import { OnlyHeaderLayout } from "~/components/Layout"
import ListOrder from "./ListOder"
import './myOder.scss'
function MyOrderPage() {

     return (<div>
          <OnlyHeaderLayout />
          <div id="content">
               <div className="container">
                    <div className="row">
                         <div className="head">
                              <div className="text"></div>
                              <div className="sort">
                                   <p>Your Menu History (5)</p>
                                   <div className="dropdown">Sort by :
                                   </div>
                              </div>
                         </div>
                    </div>
                    <ListOrder />

               </div>
          </div>
     </div>

     )
}

export default MyOrderPage
