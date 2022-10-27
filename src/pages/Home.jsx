import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import { ClipLoader } from 'react-spinners'

const Home = () => {
	const dispatch = useDispatch()
	const{popularMovies,topRatedMovies,upComingMovies,loading} = useSelector(state=>state.movie)
	//combine에 있는 movie변수


	//useEffect는 랜더링 되기 전에
	useEffect(()=>{
		dispatch(movieAction.getMovies())
	},[])

	//로딩이 true면 로딩스피너를 보여주고 로딩이 false이면 데이터를 보여준다.
	//true:데이터 도착 전
	//false: 데이터 도착 후 or 에러 났을떄

	if(loading){
		return <ClipLoader color="#ffff" loading={loading} size={150}></ClipLoader>
	}
  return (
	//조건부 랜더링
	<div>
		{/* {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}  */}
		<Banner movie={popularMovies.results[0]}/>	

		<h1>popular movie</h1>
		<MovieSlide movies={popularMovies}/>
		<h1>top rated movie</h1>
		<MovieSlide movies={topRatedMovies}/>	
		<h1>upcoming movie</h1>
		<MovieSlide movies={upComingMovies}/>		
	</div>
  )
}

export default Home