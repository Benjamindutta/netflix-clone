import React from 'react'
import Nav from '../components/HomeScreen/Nav'
import "./HomeScreen.css"
import Banner from '../components/HomeScreen/Banner'
import request from '../Request'
import Row from '../components/Row'
const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
            <Row title="Top rated" fetchUrl={request.fetchTopRated} />
            <Row title="Trending" fetchUrl={request.fetchTranding} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

        </div>
    )
}

export default HomeScreen
