import NavBar from "../Components/NavBar";
import { Hero,
         Details,
         Stocks,
         Steps,
         Testimonials,
         IndexBanner,
         Footer
        } 
from "../Components/Base";
function Home() {
    return (
        <div className=''>
           <NavBar isOnBoardPage={false} darkColorScheme=''/> 
           <Hero/>
           <Details/>
           <Stocks/>
           <Steps/>
           <Testimonials/>
           <IndexBanner/>
           <Footer/>
        </div>
    );
}

export default Home;