import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRateApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

	  const genreApi = api.get(
		`/genre/movie/list?api_key=${API_KEY}&language=en-US`
	  );



      let [popularMovies, topRatedMovies, upComingMovies,genreList] = await Promise.all([
        popularMovieApi,
        topRateApi,
        upComingApi,
		genreApi,
      ]);

	  console.log("genreList",genreList)

      console.log(popularMovieApi);
      console.log(topRatedMovies);
      console.log(upComingApi);

      dispatch({
        type: "GET_MOVIES_SUCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
		  genreList:genreList.data.genres
        },
      });

      //api 여러개를 한번에 받을때 promiss all 사용
    } catch (error) {
      dispatch({type:"GET_MOVIES_FAILURE"})
    }
  };
}



export const movieAction = { getMovies };
