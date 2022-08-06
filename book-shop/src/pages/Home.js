import NavBar from '../components/Navbar'
import image from '../images/main-reading.jpeg'
const Home = () =>{
    return(
        <div>
            <NavBar />
            <main>
                <div className="intro_container">

                    <h1>Welcome to the Bookerino </h1>
                    <h3>Where we fill all of your book shopping needs</h3>
                </div>

            </main>
        </div>

    )

}


export default Home;