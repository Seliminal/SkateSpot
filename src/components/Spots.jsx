import { GiSkateboard } from 'react-icons/gi';

function Spots({ skateSpotState }) {
  if (!skateSpotState || skateSpotState.length === 0) {
    return <p>No skate spots found.</p>;
  }

  return (
    <div className="Spots">
      {skateSpotState.map((spot, index) => (
        <div key={spot.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h2>
            {spot.name} {spot.hasSkateboardIcon && <GiSkateboard style={{ marginLeft: 6, verticalAlign: 'middle', color: '#333' }} />}
          </h2>
          <p>{spot.location}</p>
          <p>Level: {spot.level}</p>

          {spot.image && (
            <img
              src={spot.image}
              alt={spot.name}
              style={{ width: '300px', height: 'auto', marginTop: '1rem', borderRadius: '8px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Spots;