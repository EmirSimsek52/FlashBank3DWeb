import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import EarthCanvas from "./canvas/Earth";
import RobotCanvas from "./canvas/Robot";
const Asistance = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <RobotCanvas/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Your asistance with  <br className="sm:block hidden" /> you everywhere.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       <span className="text-gradient">Flash Robot</span>  is a AI. It will help you everytime you need. 
        You can ask everything you want not just bank. You can talk with him 
        as a friend. Let's meet with him.
      </p>

     
    </div>
  </section>
);

export default Asistance;