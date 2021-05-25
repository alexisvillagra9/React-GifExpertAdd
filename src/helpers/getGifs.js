export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=MQbb7Y7rdHL5TDFPeA1snDDWlasodWxq&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();
  // console.log(data);

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
