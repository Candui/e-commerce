import './product-card.styles.scss'
import Button from '../button/button.component';

const ProductCard = ({ product })=>{
const { name,price,imageUrl } = product;
return(
    <div className='Product-card-container'>
    <img src={imageUrl} alt={'${name}'}/>
    <div className='footer'>
    <span className='Name'>{name}</span>
    <span className='Price'>{price}</span>
    </div>
    <Button buttonType='inverted'>Add to card</Button>
    </div>
    );

};

export default ProductCard;