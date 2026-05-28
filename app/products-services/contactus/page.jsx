import "./contact.css"

export default function Contact() {
    return (
        <div style={{marginBottom:"80px"}}>
            <div className="banner">
                <div className="banner-content contactHeader ">
                    <h2 className="banner-title">Precision Parts. Real Conversations</h2>
                    <p className="banner-description">Have a requirement, query, or partnership idea? Connect with our team for reliable automobile spare parts manufacturing solutions backed by quality, technology, and timely delivery.</p>
                    <button className="custom-btn">Get in Touch</button>
                </div>
            </div>
            <div className="wrapper" style={{ marginTop: "80px" }}>
                <p className="gHeading">/ Built to Perform</p>
                <h2 className="main-heading">Let’s Build Something Reliable Together</h2>
                <p className="sub-heading" style={{ textAlign: "center" }}>Connect with our experts for high-quality automobile spare parts manufacturing, tailored <br /> solutions, and dependable support for your business needs.</p>
            </div>

            <div style={{ margin: "41px" }}>
                <div className="enquiry-tabs ">
                    <div className="enquiry-tab ">OE Enquiry</div>
                    <div className="enquiry-tab">Aftermarket Distributor</div>
                    <div className="enquiry-tab">Request a Quote</div>
                </div>
                <div className="formCard">

                    <form className="contactForm">

                        <div className="formGrid">

                            <div className="formGroup">
                                <label>Full Name *</label>
                                <input type="text" placeholder="e.g. Jane Doe" />
                            </div>

                            <div className="formGroup">
                                <label>Company Name *</label>
                                <input type="text" placeholder="e.g. XYZ LTD" />
                            </div>

                            <div className="formGroup">
                                <label>Email Address *</label>
                                <input type="email" placeholder="e.g. jane@example.com" />
                            </div>

                            <div className="formGroup">
                                <label>Phone Number *</label>
                                <input type="text" placeholder="+1 (555) 000-0000" />
                            </div>

                            <div className="formGroup">
                                <label>Country / Location *</label>

                                <select>
                                    <option>Select</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>Germany</option>
                                </select>
                            </div>

                            <div className="formGroup">
                                <label>Business Type</label>

                                <select>
                                    <option>Select</option>
                                    <option>Manufacturer</option>
                                    <option>Distributor</option>
                                    <option>Supplier</option>
                                </select>
                            </div>

                        </div>

                        <div className="formGroup fullWidth">
                            <label>Product Requirements*</label>
                            <input type="text" placeholder="Write Requirement" />
                        </div>

                        <div className="formGroup fullWidth">
                            <label>Project Details*</label>
                            <textarea
                                rows="6"
                                placeholder="Tell us why you're a great fit for this role..."
                            ></textarea>
                        </div>

                        <div className="checkboxRow">
                            <input type="checkbox" />
                            <p>
                                I agree to the privacy policy and terms. I consent to the
                                processing of my personal data.
                            </p>
                        </div>

                        <button type="submit" className="custom-btn" style={{width:'100%'}}>
                            Submit Enquiry
                        </button>

                    </form>

                </div>
            </div>


        </div>

        // content

    )
}