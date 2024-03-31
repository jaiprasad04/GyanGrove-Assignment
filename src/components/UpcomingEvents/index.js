import { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import UpcomingShows from '../UpcomingShows'

import './index.css'

const UpcomingEvents = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);

            const responseData = await response.json();
            if (response.ok) {
                const updatedData = responseData.events.map(event => ({
                    ...event,
                    imgUrl: convertDriveLinkToDirectDownload(event.imgUrl)
                }));
                setData(prevData => [...prevData, ...updatedData])
                setPage(page + 1); // Use functional update
                if (page >= 5) { // Use prevPage instead of page
                    setHasMore(false);
                }
            }
        }
        if (hasMore) {
            fetchData()
        }
        
        
    }, [page, hasMore])

    const convertDriveLinkToDirectDownload = (driveLink) => {
        const fileId = driveLink.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://lh3.googleusercontent.com/d/${fileId[0]}`;
        } else {
            // console.error('Invalid Google Drive link:', driveLink);
            return driveLink; 
        }
    };

    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          // Load more data when scrolled to the bottom of the page
          if (hasMore) {
            setPage(prevPage => prevPage + 1);
          }
        }
      };
    
      // Attach scroll event listener when component mounts
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      });

    console.log(data)
    return (
        <div className="">
            <p className="upcoming-events-heading">Upcoming events <FaArrowRightLong /></p>
            <ul className="upcoming-list">
                {data.map((item, index) => (
                    <UpcomingShows key={index} eventData={item} />
                ))}
            </ul>
        </div>
    )
}

export default UpcomingEvents