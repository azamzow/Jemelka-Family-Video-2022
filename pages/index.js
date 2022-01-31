import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      {/* <Head>
      </Head> */}

    {/* <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>  */}

      <Header title="Jemelka Gift and Family Video" />
      <div id="Jemelka2022">
          <iframe width="1167" height="656" src="https://www.youtube.com/embed/xW44WSdgLEo" 
          title="Jemelka Gift and Family Video" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <main>

      </main>

      {/* <Footer /> */}
    </div>
    
  )
  
}

