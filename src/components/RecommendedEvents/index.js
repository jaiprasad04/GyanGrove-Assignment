import { TiLocation } from "react-icons/ti";

import './index.css'

const RecommendedEvents = props => {
    const {eventData} = props
    const {cityName, date, distanceKm, imgUrl, weather} = eventData
    
    // console.log(imgUrl)
    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date1 = new Date(date);
        return date1.toLocaleDateString('en-US', options);
    };
    
    const formattedDate = formatDate(date);
    

    return (
        <li className="list-item-card">
                <div style={{
                        backgroundImage: `url(${imgUrl})`,
                        objectFit: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '280px',
                        width: '200px',
                        borderRadius: '8px',}}
                        className="list-item-card-details">
                            <div className="abc">
                                <p className="mno">Make Agree</p>
                                <p className="abc-def">{formattedDate}</p>
                            </div>
                            <div className="abcd">
                                <p className="abc-def"><TiLocation /> {cityName}</p>
                                <div className="efgh">
                                    <p className="ijk">{weather} | {Math.floor(distanceKm/100)} Km</p>
                                </div>
                            </div> 
                </div>
        </li>
    )
}

export default RecommendedEvents