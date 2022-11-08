import { TemplateDish } from "~/components/Template";
import './lishdish.scss'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
// import fakeListDish from "~/model/FakeDish";

function ListDish(props) {
     let lishdish = props.data
     return (
          <div id="listDish">
               <div className="container">
                    <div className="row">
                         <div className="show-amount">
                              Show 27 healthy menu
                         </div>
                    </div>
                    <div className="row">
                         {
                              lishdish.map((item, index) => {
                                   return (<div key={index} className="col-4">
                                        <TemplateDish data={item}
                                        />
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
