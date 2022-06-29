import Navigation from './routes/navigation-bar/navigation.component';
import Home from './routes/home.component.jsx/home.component';
import { Routes , Route  } from 'react-router-dom';
import  Authentication from './routes/authentication/authentication.component'




const App = () => {
  return (
  <Routes>
  <Route  path='/' element = {<Navigation />}>
    <Route index element =  {< Home />} />
    <Route path='shop' element = {<shop/>} />
    <Route path='auth' element = {<Authentication/>} />    
  </Route>
  
 
  </Routes>
  );
}

export default App;
