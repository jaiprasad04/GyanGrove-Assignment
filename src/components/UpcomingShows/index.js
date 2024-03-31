import { TiLocation } from "react-icons/ti";


import './index.css'

const UpcomingShows = props => {
    const {eventData} = props
    const {cityName, date, distanceKm, eventName, imgUrl, weather} = eventData

    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date1 = new Date(date);
        return date1.toLocaleDateString('en-US', options);
    };
    
    const formattedDate = formatDate(date);

    return (
        <li className="upcoming-list-card">
            <div style={{
                backgroundImage: `url(${imgUrl})`,
                objectFit: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '250px',
                width: '340px',
                borderRadius: '8px',
            }} className="upcoming-img">
                <p className="xyz">{formattedDate}</p>
            </div>
            <p className="pqr">{eventName}</p>
            <div className="abcd">
                <p className="pqr-stu"><TiLocation /> {cityName}</p>
                <div className="efgh">
                    <p className="efg-ijk">{weather} | {Math.floor(distanceKm/100)} Km</p>
                </div>
            </div>
        </li>
    )
}

export default UpcomingShows