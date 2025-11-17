import React from 'react'

const Explore = () => {
    const ExploreMore = [{
        title: "Culinary",
        date: "13 Jun 2022",
        subLine: "Two women in local stand are chatting during morning..",
        img: "/Images/explore/explore-1.png"
    },
    {
        title: "Culinary",
        date: "13 Jun 2022",
        subLine: "Two women in local stand are chatting during morning..",
        img: "/Images/explore/explore-2.png"
    },
    {
        title: "Culinary",
        date: "13 Jun 2022",
        subLine: "Two women in local stand are chatting during morning..",
        img: "/Images/explore/explore-3.png"
    }]
    return (
        <div>
            <div>
                Explore more
            </div>
            {
                ExploreMore?.map((item) => {
                    return <div>
                        <img src={item.img} alt="explore" />
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                        <span>{item.subLine}</span>
                    </div>
                })}</div>
    )
}

export default Explore