import "./ourgroup.css"

const groupData =[
  {
    "id": 1,
    "title": "UCAL Limited",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page.",
    "image": "/OurGroup/OurGrp1.webp"
  },
  {
    "id": 2,
    "title": "UCAL Polymers",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page.",
    "image": "/OurGroup/OurGrp2.webp"
  },
  {
    "id": 3,
    "title": "UCAL Electronics",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page.",
    "image": "/OurGroup/OurGrp3.webp"
  }
]

export default function OurGroup(){
  return (
   <div className="ourGroupSection">
    <div className="hero-ourgroup">
      <div className="banner-content">
        <h2 className="banner-title">Powering Mobility <br />Worldwide</h2>
        <p className="banner-description">High-quality aftermarket parts built for performance, durability, and precision, ensuring reliable operation across diverse driving conditions.</p>
        <button className="custom-btn">Get in Touch</button>
      </div>
    </div>
    <div>
      <div className="wrapper groupIntro">
        <p className="gHeading"> / Group</p>
        <h2 className="main-heading">Three Companies. One Standard.</h2>
        <p className="sub-heading centeredText">Three specialized companies, united to deliver reliable, high-performance <br /> aftermarket parts with precision and consistency.</p>
      </div>

      <div className="groupGrid">
    {groupData.map((item) => (
        <div className="groupCard" key={item.id}>

            <div className="grpImg">
                <img src={item.image} alt={item.title} />
            </div>

            <div className="grpContent">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>

            <a href="" className="groupReadMore">
                <span>Read More</span>

                <img src="/media/arrowCircle.svg" alt="arrow" />
            </a>

        </div>
    ))}
</div>
    </div>

    <section className="globalSection">

    <div className="wrapper">

        <p className="gHeading">/ Across Borders.</p>

        <h2 className="main-heading">
            Our Global Presence
        </h2>

        <p
            className="sub-heading centeredText"
        >
            Serving customers worldwide with a strong network of manufacturing <br />
            and distribution, delivering quality parts wherever they&apos;re needed.
        </p>

        <div className="globalTabs">

            <button className="globalTab active">
                Our Customers
            </button>

            <button className="globalTab">
                Our Facilities
            </button>

        </div>

        <div className="mapContainer">
            <img
                src="/media/OurGrpMap.svg"
                alt="Global Map"
            />
        </div>

    </div>  

</section>
   </div>
  )
}
