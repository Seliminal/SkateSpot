import { GiSkateboard } from 'react-icons/gi';

function Spots({ skateSpotState }) {
  if (!skateSpotState || skateSpotState.length === 0) {
    return <p>No skate spots found.</p>;
  }

  return (
    <div className="page">
      <div className='header'>
        <h1>Skate Spots</h1>

      </div>
      <div className='skate-spots-container'>
      {skateSpotState.map((spot, index) => (
      //Spot card
      <div key={spot.id} className="spot-card">

          <div className='spot-image'>
            <img
              src={spot.image}
              alt="Photo"
            />
            </div>

          <div className='spot-text'>
          <h2>
            {spot.name} {spot.hasSkateboardIcon && <GiSkateboard />}
          </h2>
          <p>{spot.location}</p>
          <p>Level: {spot.level}</p>
          </div>
        </div>

      //Spot card end
      ))}
      </div>
    </div>
  );
}

export default Spots;