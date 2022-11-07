import TeamplateOrder from "~/components/Template/TemplateListOrder"
import './listOder.scss'

function ListOrder() {
     return (
          <div className="row">
               <TeamplateOrder />
               <TeamplateOrder />
               <TeamplateOrder />
          </div>
     );
}

export default ListOrder;
