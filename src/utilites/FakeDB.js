const addtoDB = (id) => {
  let favoriteCart = {};
  const storedCart = localStorage.getItem("favorite-cart");
  if (storedCart) {
    favoriteCart = JSON.parse(storedCart);
  }

  let quantity = favoriteCart[id];
  if (!quantity) {
    favoriteCart[id] = 1;
  }

  localStorage.setItem("favorite-cart", JSON.stringify(favoriteCart));
};

const getFromDB = () => {
  let favoriteCart = {};
  const storedCart = localStorage.getItem("favorite-cart");
  if (storedCart) {
    favoriteCart = JSON.parse(storedCart);
  }
  return favoriteCart;
};

const removeFromDB = (id) => {
  const storedCart = localStorage.getItem("favorite-cart");
  if (storedCart) {
    const favoriteCart = JSON.parse(storedCart);
    for (id in favoriteCart) {
      delete favoriteCart[id];
      localStorage.setItem("favorite-cart", JSON.stringify(favoriteCart));
    }
  }
};

const clearFromDB = () => {
  localStorage.removeItem("favorite-cart");
};

export { addtoDB, getFromDB, removeFromDB, clearFromDB };
