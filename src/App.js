import MyNav from './Component/Navbar/Nabvar';
import ImgSlider from './Component/ImgSlider/ImgSlider'
import img1 from './Component/images/main-banner1.jpg';
import img2 from './Component/images/main-banner2.jpg';
import img3 from './Component/images/main-banner3.jpg';
import Services from './Component/Services/Services';
import Featured from './Component/Featured/Featured';
import Stranger from './Component/Stranger/Stranger';
import Brands from './Component/Brands/Brands';
import Persons from './Component/Persons/Persons';
import Newses from './Component/Newses/Newses';
import Tastis from './Component/Tastis/Tastis';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Up from './Component/Up/Up';
function App() {
  return (
    <div className="App">
      <MyNav/>
      <ImgSlider imgs={[img1, img2, img3]} />
      <Services/>
      <Featured secTitle='Featured Product'/>
      <Stranger/>
      <Featured secTitle='New Product'/>
      <Brands />
      <Persons/>
      <Newses/>
      <Tastis/>
      <Contact/>
      <Footer/>
      <Up/>
    </div>
  );
}

export default App;



