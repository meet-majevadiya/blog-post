import React from 'react'

const Articles = () => {
    const articlesArr = [{
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        user: "Alex Carter",
        img: "/Images/articles/articles-1.png"
    },
    {
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        user: "Alex Carter",
        img: "/Images/articles/articles-2.png"
    },
    {
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        user: "Alex Carter",
        img: "/Images/articles/articles-3.png"
    },
    {
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        user: "Alex Carter",
        img: "/Images/articles/articles-4.png"
    },
    ]
    return (
        <div>
            <div>Related articles</div>
            <div>
                {articlesArr?.map((item) => {
                    return <div>
                        <img src={item.img} alt="articles" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.user}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Articles