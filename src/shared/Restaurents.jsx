import React from "react";
import Marquee from "react-fast-marquee";

const Restaurents = () => {
  return (
    <Marquee className="">
      <div className="card w-96 bg-base-100 shadow-xl mr-8">
        <figure>
          <img
            className="h-96"
            src="https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGV4dGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mr-8">
        <figure>
          <img
            className="h-96"
            src="https://media-cdn.tripadvisor.com/media/photo-s/11/af/e6/4a/hasienda-restaurant-outside.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mr-8">
        <figure>
          <img
            className="h-96"
            src="https://media-cdn.tripadvisor.com/media/photo-s/12/94/5c/b6/outside-restaurant.jpg"
            alt="Shoes"
          />
        </figure>
      </div>
    </Marquee>
  );
};

export default Restaurents;
