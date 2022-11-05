import { TemplateDish } from "~/components/Template";
import './lishdish.scss'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
function ListDish() {


     return (
          <div id="listDish">
               <div className="container">
                    <div className="row">
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div> <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div> <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div> <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
                         <div className="col-4">
                              <TemplateDish />
                         </div>
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
