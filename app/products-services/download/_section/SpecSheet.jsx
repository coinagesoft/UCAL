import styles from "./SpecSheet.module.css";
import { catalogueData } from "@/constants/catalogues";
import CatalogueCard from "./CatalogueCard";
import catStyle from "./Catalogues.module.css"

export default function SpecSheet() {
  return (
    <div className={styles.specSheet}>
        <div className={styles.wrapper}>
            <p className="gHeading">/ Spec Sheets</p>
            <h2 className="main-heading ">The Technical Detail Your Engineers Need.</h2>
            <p className="sub-heading">Individual product specification sheets covering dimensions, material grades, operating <br/> parameters, and performance data — for qualified engineering and sourcing review.</p>
        </div>
    <div className={catStyle.container}>
            <h3 className={catStyle.title}>Mechatronics Products</h3>
    
            <div className={catStyle.grid}>
              {catalogueData.map((item, index) => (
                <CatalogueCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className={catStyle.container} style={{ marginTop: "80px" }} >
            <h3 className={catStyle.afterMarketTitle}  >Aftermarket Products</h3>
    
            <div className={catStyle.grid}>
              {catalogueData.map((item, index) => (
                <CatalogueCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>

    </div>
  );
}