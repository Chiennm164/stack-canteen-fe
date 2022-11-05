import Header from '~/components/Layout/components/Header'
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';

function DefaultLayout() {
     return (
          <div>
               <Header />
               <Menu />
               <Carousel />
          </div>
     );
}

export default DefaultLayout;
