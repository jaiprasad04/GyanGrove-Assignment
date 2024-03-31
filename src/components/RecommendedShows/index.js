import { useEffect, useState } from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

import RecommendedEvents from '../RecommendedEvents'
import './index.css'

const RecommendedShows = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getRecommendedData = async () => {
            const url = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
            const response = await fetch(url)
            const responseData = await response.json()
            
            // console.log(responseData.events)

            if (response.ok) {
                const updatedData = responseData.events.map(event => ({
                    ...event,
                    imgUrl: convertDriveLinkToDirectDownload(event.imgUrl)
                }));
                setData(updatedData);
            }
        }
        getRecommendedData()
    }, [])

    const convertDriveLinkToDirectDownload = (driveLink) => {
        const fileId = driveLink.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://lh3.googleusercontent.com/d/${fileId[0]}`;
        } else {
            console.error('Invalid Google Drive link:', driveLink);
            return driveLink; 
        }
    };

    return (
        <div className="recommended-container">
            <div className="hij">
                <div className="rose">
                    <p className="recommended-heading">Recommended shows <FaArrowRightLong /></p>
                    <p className="see-all">see all</p>
                </div>
                
                <ul className="recommended-list">
                    {data.map((item, index) => (
                        <RecommendedEvents key={index} eventData={item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecommendedShows




