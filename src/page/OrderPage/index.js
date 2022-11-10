import { DefaultLayout } from "~/components/Layout"
import ListDish from "./ListDish"
import Menu from "~/components/Layout/components/Menu"
import Carousel from "~/components/Layout/components/Carousel"
import fakeListDish from "~/model/FakeDish"
import { useState } from 'react'


function OrderPage() {

     const [stateList, setStateList] = useState(fakeListDish);
     const [stateSt, setStateSt] = useState('All');
     const [lcart, setLCart] = useState(0);



     function handlerDataMenu(val, st) {
          if (val) {
               setStateList(val)
               setStateSt(st)
          }
     }

     function handlerDataOption(val) {
          let data = []
          fakeListDish.forEach((item) => {
               item.group.forEach((item2) => {
                    if (item2 === val) {
                         data.push(item)
                    }
               })
          })
          setStateList(data)
          setStateSt(val)

     }
     function handlerSttCart(params) {
          setLCart(params)
     }
     return (
          <div>
               <DefaultLayout />
               <Menu sendData={handlerDataMenu} listOrder={lcart} />
               <Carousel senData={handlerDataOption} />
               <ListDish data={stateList} st={stateSt} stt={handlerSttCart} />
          </div>
     )
}

export default OrderPage
