import { Outlet ,Link } from 'react-router-dom';
import { Fragment,useContext } from 'react';
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserProvider } from '../../contexts/user.context';

const Navigation = () => {
  const{ currentUser }= useContext(UserContext);
  
  console.log(currentUser)
    return(
      <Fragment>
          <div className='navigation'>
          <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
          
              <Link className='nav-link' to='/shop'>
              SHOP
              </Link>
            {currentUser?(<span className='nav-link' onClick={signOutUser}>Sign out</span>):(<Link className='nav-link' to='/auth'>
            Sign In
            <CartIcon />
              </Link>)}

               
              </div>
            </div>
          <Outlet />
      </Fragment>
    );
  }
  export default Navigation;