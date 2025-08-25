const api_key = "vImNSOzO8O8ae2npu23OJPzqOByt0ra6";
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    console.log(data.images.original.url);
  })
  .catch(console.warn);

//esto se conoce como promesas en cadenas
