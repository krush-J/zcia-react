const PlaceCard = ({ placeData }) => {
    return (
      <div className="mb-4" data-aos="zoom-in-up">
        <div className="bg-white rounded-sm overflow-hidden shadow-md p-4">
          <h2 className="text-lg font-semibold text-gray-900 text-ellipsis">
            {placeData['place name']}
          </h2>
          <p className="text-gray-600">
            {placeData['state']}, {placeData['country']}
          </p>
          <p className="mt-2 text-gray-700">
            Longitude: {placeData['longitude']}, Latitude: {placeData['latitude']}
          </p>
        </div>
      </div>
    );
  };

  export default PlaceCard;