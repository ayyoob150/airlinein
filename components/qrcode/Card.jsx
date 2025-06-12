import React from "react";

const cardData = [
    {
        id: 1,
        title: "Read more with Hana Hou!",
        image: "hero-image.jpg",
    },
    {
        id: 2,
        title: "Best time to visit Hawaii",
        image: "https://cdn.pixabay.com/photo/2022/08/26/07/57/tavern-7411977_640.jpg",
    },
    {
        id: 3,
        title: "8 amazing hikes of Hawaii",
        image: "https://cdn.pixabay.com/photo/2023/09/25/20/38/lisbon-8275994_640.jpg",
    },
    {
        id: 4,
        title: "Take a rainbow-themed trip",
        image: "https://cdn.pixabay.com/photo/2020/04/22/13/08/tuscany-5078088_640.jpg",
    },
    {
        id: 5,
        title: "Take a rainbow-themed trip",
        image: "https://cdn.pixabay.com/photo/2019/06/09/21/54/santorini-4263036_640.jpg",
    },
    {
        id: 6,
        title: "Take a rainbow-themed trip",
        image: "https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_640.jpg",
    },
    {
        id: 7,
        title: "Take a rainbow-themed trip",
        image: "https://cdn.pixabay.com/photo/2023/01/15/22/48/river-7721287_640.jpg",
    },
    {
        id: 8,
        title: "Take a rainbow-themed trip",
        image: "https://cdn.pixabay.com/photo/2020/04/16/10/16/mountain-5050026_640.jpg",
    },
    // Add more items as needed
];

const Card = () => {
    return (
        <div className="my-8 py-16 bg-[#F0F2F3]">
            <h2 className="text-4xl ml-20">Your guide to Hawaii</h2>
            <div className="flex flex-wrap justify-center mt-8 items-stretch gap-[30px]">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="relative overflow-hidden rounded flex-shrink-0 flex-grow-0 mb-[30px] group"
                    >
                        <div className="relative h-[340px] w-[275px] p-6">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            <h4 className="relative z-10 mt-[240px] text-white text-[24px] font-bold">
                                {card.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
            <h5 className="ml-20 text-[#CE0C88]">Your guide to the Hawaiian Islands</h5>
        </div>
    );
};

export default Card;
