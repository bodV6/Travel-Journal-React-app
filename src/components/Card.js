import pin from "../images/Paomedia-Small-N-Flat-Map-marker.512.png";

function Card(prop) {

  console.log(prop);
  return (
    <section className="card--list">
      <div className="card--container">
        <div className="card--image">
          <img src={prop.imageUrl} alt=""></img>
        </div>
        <div className="card--info">
          <div className="pin-icon">
            <img src={pin} alt=""></img>
          </div>
          <h3>{prop.location}</h3>
          <a href={prop.gogoleMapUrl}>View on Google Maps</a>
          <h1>{prop.title}</h1>
          <h3>
            {prop.startDate}- {prop.endDate}
          </h3>
          <p>{prop.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;
