import React, { useEffect, useState } from 'react'
import './row.css'
import axios from '../../axios'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"
    console.log(fetchUrl)
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img key={movie.id} className={`row_poster ${isLargeRow && "rowLargePoster"}`} src={`${BASE_IMG_URL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name} />
                    ))
                }
            </div>

        </div>
    )
}

export default Row
