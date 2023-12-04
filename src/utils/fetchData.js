export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": 'b25f375cdamshdce94bad4699618p1045c6jsn5fa9fdcc7b1b',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
 export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b25f375cdamshdce94bad4699618p1045c6jsn5fa9fdcc7b1b',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
