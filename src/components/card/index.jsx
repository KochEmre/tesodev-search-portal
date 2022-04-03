import './Card.scss';

const Card = ({ news }) => {
  const { name, price, imageUrl } = news;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default Card;
