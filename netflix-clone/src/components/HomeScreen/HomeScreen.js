import React from 'react'
import requests from '../../Request'
import Banner from '../Banner/Banner'
import './HomeScreen.css'
import Nav from '../Navbar/Nav'
import Row from '../Row/Row'


function HomeScreen() {
  return (
      <div className='homescreen'>
          <Nav />
          <Banner />
          <Row
            title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

      </div>
  )
}

export default HomeScreen