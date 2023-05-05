import React from "react";
import Marquee from "react-fast-marquee";

const Restaurents = () => {
  return (
    <div className="dark:bg-black">
      <div className="mt-28 text-center lg:mx-auto" style={{ width: "80vw" }}>
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500 font-serif">
          Top Restaurents of the Town
        </h1>
        <p className="text-center mb-5 text-xl font-bold text-amber-500 font-serif">
          Visit them to taste Authentic Royal Food ...
        </p>
      </div>
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
        <div className="card w-96 bg-base-100 shadow-xl mr-8">
          <figure>
            <img
              className="h-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuRtqGz84hf_Lb8cE9YjbCC9vH5twKWL3GQ&usqp=CAU"
              alt="Shoes"
            />
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default Restaurents;
