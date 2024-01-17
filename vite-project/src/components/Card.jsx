function Card({ user }) {
  return (
    <>
      <div
        style={{ cursor: "pointer", margin: "10px",border:"1px solid black" }}
        className="w-full p-4 shadow-md lg:max-w-lg"
      >
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
            <figcaption className="text-gray-600"></figcaption>
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-600">
            Username : {user.username}
          </h3>
          <h3 className="text-l font-semibold text-gray-600">
            Real name : {user.name}
          </h3>
          <p className="text-gray-600">Email : {user.email}</p>
          {/* {movie.rating} */}
        </div>
        </figure>
        <div className="mb-5 gap-4">
        
          <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
            <figcaption className="text-gray-600">
              <div className="text-gray-600">Address :</div>
              <p>
                {user.address.street} <br /> {user.address.city},{" "}
                {user.address.suite}, {user.address.zipcode}
                = <br />
                Geolocation:
                <br /> Lat: {user.address.geo.lat}
                <br /> Long : {user.address.geo.lng}
              </p>
            </figcaption>
          </figure>
        </div>
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
          <figcaption className="text-gray-600">
            <div className="text-gray-600">
              Company :
              <br /> Name: {user.company.name}
              <br /> Bs : {user.company.bs}
              <br /> catchPhrase: {user.company.catchPhrase}
            </div>
          </figcaption>
        </figure>
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer mt-8">
          <figcaption className="text-gray-600">
            <div className="text-gray-600">
              Contact :
              <br /> Phone n¤: {user.phone}
              <br /> Website: {user.website}
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default Card;
