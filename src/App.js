import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componutes/Header';
import Category from './componutes/Category';
import Sheps from './componutes/Sheps';
import Voyage from './componutes/Voyage';
import Customerfavorite from './componutes/Customerfavorite';
import Shop from './componutes/Shop';
import Aboutus from './componutes/Aboutus';
import Icone from './componutes/Icone';
import Footers from './componutes/Footers';

function App() {
  return (
    <>
      <Header />
      <Category />
      <Sheps />
      <Voyage />
      <Customerfavorite />
      <Shop />
      <Aboutus />
      <Icone/>
      <Footers/>
    </>
  );
}

export default App;
