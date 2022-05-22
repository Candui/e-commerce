import Navigation from './routes/navigation-bar/navigation.component';
import Home from './routes/home.component.jsx/home.component';
import { Routes , Route  } from 'react-router-dom';
import SignIn from './routes/sign-in/sign-in.component';




const App = () => {
  return (
  <Routes>
  <Route  path='/' element = {<Navigation />}>
    <Route index element =  {< Home />} />
    <Route path='shop' element = {<shop/>} />
    <Route path='signIn' element = {<SignIn/>} />    
  </Route>
  
 
  </Routes>
  );
}

export default App;
