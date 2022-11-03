import OrderPage from '~/page/OrderPage'
import MyOrderPage from '~/page/MyOrderPage'
import AccountPage from '~/page/AccountPage'
import FeedBackPage from '~/page/FeedBackPage'
import SettingPage from '~/page/SettingPage'
import SupportPage from '~/page/SupportPage'


const publicRoute = [
     { path:'/', component: OrderPage },
     { path:'/myOrder', component: MyOrderPage },
     { path:'/feedBack', component: FeedBackPage },
     { path:'/support', component: SupportPage },
     { path:'/account', component: AccountPage },
     { path:'/setting', component: SettingPage }
]
const privateRoute = [

]
export { publicRoute, privateRoute }
