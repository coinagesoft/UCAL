import "./ApplyForm.css";

export default function ApplyForm() {
    return (
        <section className="apply-page">

            <div className="apply-banner">
                <img src="/apply/applyBanner.webp" alt="Apply Banner" />
            </div>

            <div className="apply-header">

                <h1>Apply for This Job</h1>

                <p>
                    Take the next step in your career. Fill out the form below.
                </p>

            </div>

            <div className="">
                <form className="career-form">

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Full Name *</label>
                            <input type="text" placeholder="e.g. Jane Doe" />
                        </div>

                        <div className="form-group">
                            <label>Email Address *</label>
                            <input type="email" placeholder="e.g. jane@example.com" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="text" placeholder="+1 (555) 000-0000" />
                        </div>

                        <div className="form-group">
                            <label>Current Location *</label>

                            <select>
                                <option>Select Location</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Total Experience *</label>

                            <select>
                                <option>Select Experience</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Current Company</label>
                            <input type="text" placeholder="e.g. Acme Corp" />
                        </div>

                        <div className="form-group">
                            <label>Current CTC</label>
                            <input type="text" placeholder="e.g. $120,000" />
                        </div>

                        <div className="form-group">
                            <label>Expected CTC</label>
                            <input type="text" placeholder="e.g. $140,000" />
                        </div>

                    </div>

                    <div className="form-group full-width">
                        <label>Notice Period *</label>

                        <select>
                            <option>Select Notice Period</option>
                        </select>
                    </div>

                    <div className="form-group full-width">
                        <label>Portfolio / LinkedIn URL</label>

                        <input type="text" placeholder="https://" />
                    </div>

                    <div className="form-group full-width">

                        <label>Upload Resume (PDF/DOC) *</label>

                        <div className="upload-box">

                            <img src="/apply/fileUpload.png" alt="Upload File" />

                            <p>
                                <span>Click to upload</span> or drag and drop
                            </p>

                            <small>Maximum file size 5MB</small>

                        </div>

                    </div>

                    <div className="form-group full-width">
                        <label>Cover Letter (Optional)</label>

                        <textarea
                            placeholder="Tell us why you're a great fit for this role..."
                        ></textarea>
                    </div>

                    <div className="checkbox-row">

                        <input type="checkbox" />

                        <p>
                            I agree to the privacy policy and terms. I consent to the
                            processing of my personal data for recruitment purposes.
                        </p>

                    </div>

                    <button className="custom-btn full-width" style={{width:"100%"}}>
                        Submit Application
                    </button>

                </form>
            </div>
            <div className="bottom-part">
                <div >
                    <img src="/media/view.svg" alt="view" />
                    <p>We review every application carefully.</p>
                </div>
                <div><img src="/media/lock.svg" alt="lock" />
                    <p>Your information stays secure and confidential.</p>
                </div>
                <div>
                    <img src="/media/clock.svg" alt="clock" />
                    <p>Hear back from us within 5–7 working days.</p>
                </div>
            </div>

        </section>
    );
}