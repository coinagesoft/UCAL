import styles from "./Footer.module.css";

const moreLinks = [
  "News & Media",
  "Download Centre",
  "Careers",
  "More",
  "Community Development & CSR",
];

const quickLinks = [
  "Home",
  "Company",
  "Product & Services",
  "Our Group",
];

const socialIcons = ["f", "x", "in", "ig"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay} />

      <div className={styles.content}>
      <div className={styles.grid}>
  
  {/* Column 1 */}
  <div>
    <img
      src="/media/mainLogoSvg.svg"
      alt="logo"
      className={styles.logo}
    />

    <p className={styles.description}>
      We empower our partners with the most powerful and robust range
      of Automotive Control Systems, Engineering Services, and Contract.
    </p>

    <button className="custom-btn">
      Contact With Us
    </button>
  </div>

  {/* Column 2 */}
  <div>
    <h3 className={styles.heading}>More</h3>

    {moreLinks.map((item) => (
      <p key={item} className={styles.link}>
        {item}
      </p>
    ))}
  </div>

  {/* Column 3 */}
  <div>
    <h3 className={styles.heading}>Quick Links</h3>

    {quickLinks.map((item) => (
      <p key={item} className={styles.link}>
        {item}
      </p>
    ))}
  </div>

  {/* Column 4 */}
  <div>
    <h3 className={styles.heading}>Address</h3>

    <p className={styles.address}>
      11 B/2, AMBIT Park Road. Ambattur Industrial Estate.
      Chennai – 600058. Tamil Nadu, India.
      <br />
      <br />
      Phone: +91-44-42208100
      <br />
      Mail: marketing@ucal.com
    </p>
  </div>

  {/* Column 5 */}
  <div>
    <h3 className={styles.heading}>Follow Us On</h3>

    <div className={styles.socialList}>
      {socialIcons.map((icon) => (
        <div key={icon} className={styles.socialIcon}>
          {icon}
        </div>
      ))}
    </div>
  </div>

</div>

        <div className={styles.bottom}>
          <span>Â© 2025 UCAL. All rights reserved.</span>

          <div className={styles.legal}>
            {legalLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
