import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import BitcoinCanvas from "./canvas/Bitcoin";

const Crypto = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Send with Bitcoin NOW.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Crypto wallet now available on <span  className="text-gradient">FlashBank.</span>
        {" "}You can send, buy and hold.
      </p>

       <a href="https://emirsimsek52.github.io/CryptoWeb/"> <button  className={`py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            See Crypto       
        </button></a>
    </div>
    
    <div className={layout.sectionImg}>
      <BitcoinCanvas/>
    </div>
  </section>
);

export default Crypto;