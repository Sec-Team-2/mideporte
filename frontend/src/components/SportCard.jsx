import './../assets/styles/components/SportCard.css';

const SportCard = ({ sport, description, image, hoverEffect}) => {
	return (
		<div className='card-container'> 
			<div className={`card ${hoverEffect ? 'hover-effect' : ''}`}> 
				<img className="sport-image" src={image} alt={sport} />
				<div className="card-content">
					<h2 className="sport-title">{sport}</h2>
					<p className="sport-description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default SportCard;
