import React from 'react'

const TourGuide = () => {
    const TourGuideArr = [{
        name: "Miranda Rachel",
        location: "Jombang, Jawa timur",
        img: "/Images/user/user.png"
    },
    {
        name: "Culinary",
        location: "Two women in local stand are chatting during morning..",
        img: "/Images/user/user.png"
    },
    {
        name: "Culinary",
        location: "Two women in local stand are chatting during morning..",
        img: "/Images/user/user.png"
    }]
    return (
        <div>TourGuide

            <div>
                {TourGuideArr?.map((item) => {
                    return <div>
                        <img src={item.img} alt="user" />
                        <h3>{item.name}</h3>
                        <p>{item.location}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TourGuide