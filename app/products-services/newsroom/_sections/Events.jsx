import { eventsData } from "@/constants/events.js"
import "./Events.css"

export default function Events() {
    return (
        <div className="eventSection">

            <div className="wrapper">
                <p className="gHeading">/ Events</p>

                <h2 className="main-heading">
                    Where You'll Find UCAL Next
                </h2>

                <p
                    className="sub-heading"
                    style={{ textAlign: "center" }}
                >
                    From Auto Expo to Hannover Messe — UCAL is present where
                    the automotive and mobility industries converge.
                    <br />
                    Meet our team, see our products, and explore partnership opportunities.
                </p>
            </div>

            <div className="eventsGrid">

                {eventsData.map((item, index) => (

                    <div className="eventCard" key={index}>

                        {/* LEFT DATE */}
                        <div className="dateCard">
                            <img src={item.dateCard} alt="" />
                        </div>

                        {/* CENTER CONTENT */}
                        <div className="eventMiddle">

                            <p className="status">{item.status}</p>

                            <h3>{item.title}</h3>

                            <div className="eventInfo">

                                <div className="detailRow">
                                    <img src="/media/location.png" alt="" />
                                    <p>{item.location}</p>
                                </div>

                                <div className="detailRow">
                                    <img src="/media/icon1.png" alt="" />
                                    <p>{item.type}</p>
                                </div>

                                <div className="hallTag">
                                    {item.hall}
                                </div>

                            </div>

                        </div>

                        {/* RIGHT BUTTON */}
                        <div className="">
                            <button className="custom-btn">Register Interest</button>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}