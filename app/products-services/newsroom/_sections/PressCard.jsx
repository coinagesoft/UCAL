import "./PressCard.css"

export default function PressCard({ img, title, description }) {
    return (
        <div className="card">
            <div className="cardContent">
                <div className="cardImg ">
                    <img src={img} alt="cardImg"  />
                </div>
                <div className="cardBody">
                    <div className="calender">
                        <img  src="/media/nCalender.png" alt="calender" />
                        <p>10 Nov , 2024</p>
                    </div>
                    <div className="cardText">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="readMore">
                    <a href="">Read more</a>
                    <img src="/media/arrow.png" alt="arrow" />
                </div>
                </div>
                
            </div>
        </div>
    )
}
