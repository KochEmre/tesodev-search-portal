import './Card.scss';

const Card = ({ newsData }) => {
  const { name, price, imageUrl } = newsData; //name: title, price, description

  return (
    <div className="slider-card" >
      <div className="slider-card-image" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
      <p className="slider-card-title">{name}</p>
      <p className="slider-card-description">{price}</p>
    </div>
  );
};

export default Card;
