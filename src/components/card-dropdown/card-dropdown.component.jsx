import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import './card-dropdown.styles.scss'
import Button from '../button/button.component';
const CardDropdown = () =>{
    const {cartItems} = useContext (CartContext);
    return(
        <div className='card-dropdown-container'>
            <div className='cart-items'>{cartItems.map((item)=>(<CartItem key={item.id} cartItem = {item} />
            ))}
            </div>
            <Button>Go to checkout</Button>
        
        </div>
    )
}

export default CardDropdown;