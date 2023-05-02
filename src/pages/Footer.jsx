import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full mt-20 bg-black text-white py-28 px-20">
        <div className="text-center flex flex-col-reverse justify-center items-center mb-10">
          <img
            className="w-24 text-center rounded-full"
            src="https://www.narita-airport.jp/img/original/31997"
            alt=""
          />
          <p className="text-xl font-semibold font-serif text-amber-400 ">
            The Royal Taste
          </p>
        </div>
        <div className="md:flex justify-center gap-10 pb-12  items-center">
          <img
            className="w-12 h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
          />
          <img
            className="w-12 h-12"
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
            alt=""
          />
          <img
            className="w-12 h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
            alt=""
          />
          <img
            className="w-12 h-12"
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-pinterest-social-media-icon-png-image_4235825.jpg"
            alt=""
          />
        </div>
        <div className="md:flex justify-center gap-10 pb-12 items-center">
          <a className="border-r-4 pr-4" href="/">
            Home
          </a>
          <a className="border-r-4 pr-4" href="/">
            Menu
          </a>
          <a className="border-r-4 pr-4" href="/">
            Chefs
          </a>
          <a href="/">Recipes</a>
        </div>
        <p className="text-center">
          <small>
            <span>&copy;</span> All Rights Reserved.
          </small>
        </p>
      </footer>
      <div className="w-full bg-blue-400 text-white py-10 text-center">
        <h1 className="text-3xl font-semibold">Healthy food is Life</h1>
      </div>
    </div>
  );
};

export default Footer;
