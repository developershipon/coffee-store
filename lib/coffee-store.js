import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_Unsplash_Access_Key,
  //...other fetch options
});

const max = 29;
const query = "coffee";
const ll = "41.8781,-87.6298";

const getUrl = (query, ll, max) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${ll}&client_id=${process.env.NEXT_PUBLIC_Client_Id}&${process.env.NEXT_PUBLIC_Client_Secret}&limit=${max}`;
};

const getListImage = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    orientation: "landscape",
    perPage: max,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((item) => item.urls["small"]);
};

export const fetchCoffeeStore = async () => {
  const photos = await getListImage();
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.Auth,
    },
  };

  const response = await fetch(getUrl(query, ll, max), options);
  const data = await response.json();
  const coffeestores = data.results;
  // console.log(coffeestores);
  // console.log("categories", coffeestores[0].categories);

  return coffeestores.map((item, i) => {
    return {
      ...item,
      imgUrl: photos[i],
    };
  });
};
