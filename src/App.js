import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sampul from './pages/Sampul/Sampul';
import Mempelai from './pages/Mempelai/Mempelai';
import Acara from './pages/Acara/Acara';
import Peta from './pages/Peta/Peta';
import Protocol from './pages/Protocol/Protocol';
import Penutup from './pages/Penutup/Penutup';
import Konfirmasi from './pages/Konfirmasi/Konfirmasi';
import Cover from './pages/Cover/Cover';
import PlaySound from './components/PlaySound';

function App() {
  return (
    <>
      <Router>
        <Route path='/' component={Cover} exact />
        <Route path='/sampul' component={Sampul} exact />
        <Route path='/mempelai' component={Mempelai} exact />
        <Route path='/acara' component={Acara} exact />
        <Route path='/peta' component={Peta} exact />
        <Route path='/protocol' component={Protocol} exact />
        <Route path='/penutup' component={Penutup} exact />
        <Route path='/contact' component={Konfirmasi} exact />
      </Router>
      <PlaySound />
    </>
  );
}

export default App;
