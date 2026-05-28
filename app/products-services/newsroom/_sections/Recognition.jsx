import "./Recognition.css"
import { awardsData } from "@/constants/awards"

export default function Recognition() {
    return (
        <div className="recSection">
            <div className="wrapper">
                <p className="gHeading">/ Recognition</p>
                <h2 className="main-heading">Industry Validation. Customer Confidence.</h2>
                <p className="sub-heading" style={{ textAlign: "center" }}>Awards don't drive our decisions — but they reflect the consistent effort that does. Here's how the industry <br />has recognised UCAL's work over the years.</p>
            </div>
            <div className="awardsSection">

                <div className="awardsTable">

                    {awardsData.map((item, index) => (
                        <div className={`awardRow row${index + 1}`} key={index}>

                            <div className="awardNumber">
                                {item.id}
                            </div>

                            <div className="awardInfo">
                                <h3>{item.title}</h3>
                                <p>{item.date}</p>
                            </div>
                            <div className="verticalLine"></div>
                            <div className="awardLogo">
                                <img src={item.logo} alt="logo" />
                            </div>
                            <div className="trophy">
                                <img src={item.trophy} alt="trophy" />
                            </div>

                        </div>
                    ))}

                </div>



            </div>

        </div>
    )
}