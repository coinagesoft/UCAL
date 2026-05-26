import "./NewsHero.css"
export default function NewsHero() {
    return (
        <section className="news-hero">
            <div className="banner-content">
                <h1 className="banner-title">
                    What’s Happening
                    <br />
                    at UCAL
                </h1>

                <p className="banner-description">
                    Announcements, milestones, industry recognition,
                    and events — the latest from UCAL and the mobility
                    ecosystem we operate in.
                </p>
            </div>
        </section>
    )
}