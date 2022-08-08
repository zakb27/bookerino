import NavBar from '../components/Navbar'
import './home.css'
import image from '../images/idea.png'

import {db} from '../tools/db'
const Home = () =>{
    return(
        <div>
            <NavBar />
            <main>
                <div className="intro_container">

                    <h1>Welcome to Bookerino </h1>
                    <h3>Home to the land of books where we fill all of your book shopping needs,
                    your book gazing needs, and are here to level up your reading skills with state of the art
                    book sorting credentials</h3>
                </div>


                <div className='offers'>
                    <div className="offer_intro">
                        <h2>What we offer</h2>
                        <p>Suspendisse potenti. Donec sed mi lorem. Quisque euismod, tortor
                            non commodo malesuada, ante nibh posuere mauris
                            , vitae bibendum augue ipsum sed tortor. Quisque sit amet est ac
                            turpis malesuada fermentum.</p>
                    </div>
                    <div className="offer_actual">
                        <div className="offer1 offer_card">
                            <i className="uil uil-book-open"></i>
                            <p>World class books</p>
                        </div>
                        <div className="offer2 offer_card">
                            <i className="uil uil-bookmark"></i>
                            <p>Best sorting algorithms</p>
                        </div>
                        <div className="offer3 offer_card">
                            <i className="uil uil-envelope"></i>
                            <p>The best mailing list</p>
                        </div>

                    </div>

                    <button>View our latest</button>
                </div>

                <div className='why_container'>
                    <img src={image} alt=""/>

                    <div className="why_text">
                        <h3>Why try books?</h3>

                        <p>Books aren't just vessels for absorbing stories, they are <i>opportunities</i>.
                            A book allows us to take what we learn from books and apply it to our real life world.
                            This is not limited to non fiction either, have a look for yourself.
                        </p>
                        <button>Sign up for our newsletter</button>
                    </div>
                </div>

            </main>


            <footer>
                <a href="https://iconscout.com/illustrations/idea" target="_blank">Idea Illustration</a>
                by <a href="https://iconscout.com/contributors/pixel-true-designs" target="_blank">Pixel True</a>
            </footer>
        </div>

    )

}


export default Home;