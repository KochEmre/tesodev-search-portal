import './Card.scss';

const Card = ({ newsData }) => {
  const { title, description, imageUrl } = newsData;

  return (
    <div className="slider-card-container" >
      <div className="slider-card-image" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}></div>
      <p className="slider-card-title">{title}</p>
      <p className="slider-card-description">{description}</p>
    </div>
  );
};

export default Card;
