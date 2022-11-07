import mon1 from '../../../assets/images/dishs/mon1.jpg'
import './listorder.scss'
function TeamplateOrder(props) {
     console.log(props);
     return (
          <div className="item">
               <div className="row ">
                    <div className='wrap'>
                         <div className='col-1'><img src={mon1} className="col-1 " alt='' /></div>
                         <div className="col-4 name">Set a India veg and 4 others</div>
                         <div className="col-1 status">IN QUEUE</div>
                         <div className="col-3 time">Lunch - Thu 18 Nov, 2021</div>
                         <div className="col-1 money">$41,98</div>
                         <div className="col-2 btn-detail">
                              <a href='.' >details</a>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default TeamplateOrder;
