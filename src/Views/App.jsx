import React from 'react';
import { 
     BrowserRouter,
     Routes,
     Route
} from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/> 
          <Route path='contact' element={<Contact />}/>
          <Route path='signin' element={<Signin />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
