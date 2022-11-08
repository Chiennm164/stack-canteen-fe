import { DefaultLayout } from "~/components/Layout"
import ListDish from "./ListDish"
import Menu from "~/components/Layout/components/Menu"
import Carousel from "~/components/Layout/components/Carousel"
import fakeListDish from "~/model/FakeDish"
import { useState } from 'react'


function OrderPage() {
     const [state, setState] = useState(fakeListDish)
     function handlerData(val) {
          if (val) {
               setState(val)
          }
     }
     return (
          <div>
               <DefaultLayout />
               <Menu sendData={handlerData} />
               <Carousel />
               <ListDish data={state} />
          </div>
     )
}

export default OrderPage
