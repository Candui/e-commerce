import './card-dropdown.styles.scss'
import Button from '../button/button.component';
const CardDropdown = () =>{
    return(
        <div className='card-dropdown-container'>
            <div className='cart-items'/>
            <Button>Go to checkout</Button>
        
        </div>
    )
}

export default CardDropdown;