import Header from '../Header'
import RecommendedShows from '../RecommendedShows'
import UpcomingEvents from '../UpcomingEvents'

import './index.css'

const BookUsNow = () => {
    return (
        <>
            <Header />
            <div className="book-us-now">
                <div className="home-page-container">
                    <div className="responsive-home-page">
                        <h1 className="banner-heading">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
                        <p className="banner-discription">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per</p>
                        <RecommendedShows />
                    </div>
                </div>
                <div className="upcoming-container">
                    <UpcomingEvents />
                </div>
            </div>
        </>
        
    )
}

export default BookUsNow