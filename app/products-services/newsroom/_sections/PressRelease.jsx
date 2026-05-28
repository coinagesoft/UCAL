import "./PressRelease.css"
import { pressData } from "@/constants/pressrelease"
import PressCard from "./PressCard"


export default function PressRelease() {
    return (
        <div className="section">
            <div className="wrapper">
                <p className="gHeading">/ Press Releases</p>
                <h2 className="main-heading">Official Announcements, Directly from UCAL.</h2>
                <p className="sub-heading" style={{ textAlign: "center" }}>All official statements, business updates, partnership announcements, and product launches — published <br /> here first and updated as they happen.</p>
            </div>
            <div className="grid">
                {pressData.map((item, index) => (
                    <PressCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )
}