import Property1Default1 from "./Property1Default1";
import Property1Default from "./Property1Default";
import styles from "./ResourceForm.module.css";

const ResourceForm = () => {
  return (
    <div className={styles.section3}>
      <b className={styles.resources}>Resources</b>
      <b className={styles.solutions}>Upcoming Events</b>
      <div className={styles.div}>7</div>
      <Property1Default1
        prop="08"
        jUNE="JUNE"
        property1DefaultPosition="absolute"
        property1DefaultTop="268px"
        property1DefaultLeft="106px"
        property1DefaultBorder="1px solid var(--primary)"
        property1DefaultBoxSizing="border-box"
      />
      <Property1Default1
        prop="28"
        jUNE="DECEMBER"
        property1DefaultPosition="absolute"
        property1DefaultTop="268px"
        property1DefaultLeft="calc(50% - 173px)"
        property1DefaultBorder="1px solid var(--primary)"
        property1DefaultBoxSizing="border-box"
      />
      <Property1Default1
        prop="17"
        jUNE="JANUARY"
        property1DefaultPosition="absolute"
        property1DefaultTop="268px"
        property1DefaultLeft="1007px"
        property1DefaultBorder="1px solid var(--primary)"
        property1DefaultBoxSizing="border-box"
      />
      <div className={styles.section3Child} />
      <img className={styles.section3Item} alt="" src="/arrow-1@2x.png" />
      <div className={styles.signUpAs}>View More</div>
      <Property1Default
        handTypingOnLaptopWithPla="/hand-typing-on-laptop-with-play-button-on-screen@2x.png"
        lberonsNosRhpauineBeroere="Get Access To Videos and Podcasts Related To Latest ESG Initiatives "
        property1DefaultPosition="absolute"
        property1DefaultTop="1052px"
        property1DefaultLeft="106px"
      />
      <Property1Default
        handTypingOnLaptopWithPla="/hand-typing-on-laptop-with-play-button-on-screen@2x.png"
        lberonsNosRhpauineBeroere="Get ESG Related Research Papers fot more informations"
        property1DefaultPosition="absolute"
        property1DefaultTop="1052px"
        property1DefaultLeft="545px"
      />
      <Property1Default
        handTypingOnLaptopWithPla="/hand-typing-on-laptop-with-play-button-on-screen@2x.png"
        lberonsNosRhpauineBeroere="Have multiple access to articles and latest happenings"
        property1DefaultPosition="absolute"
        property1DefaultTop="1052px"
        property1DefaultLeft="1007px"
      />
      <div className={styles.footer}>
        <b className={styles.getInTouch}>Get in touch with us</b>
        <div className={styles.termsAndConditions}>
          terms and conditions cookies polcyprivacy pollcy code of conduct
        </div>
        <b className={styles.nexioProjectsFrance}>text goes here</b>
        <div className={styles.designedByEmbacypowered}>
          designed by Nupur Sarkar
        </div>
        <b className={styles.nexioProjectsHq}>text goes here</b>
        <div className={styles.infoNlnexioprojectscom}>
          info-nl@nexioprojects.com
        </div>
        <div className={styles.infoFrnexioprojectscom}>
          info-fr@nexioprojects.com
        </div>
        <div className={styles.rotterdamtheNetherlands}>
          rotterdamthe netherlands
        </div>
        <div className={styles.esgRatings6}>esg ratings 6 cercations</div>
        <div className={styles.div1}>31(0)850656938</div>
        <div className={styles.div2}>+33(0)422840017</div>
        <div className={styles.strotegyDovolopmen}>strotegy dovolopmen</div>
        <div className={styles.valbonnefrance}>valbonne.france</div>
        <div className={styles.esgReporting}>esg reporting</div>
        <div className={styles.climteServices}>climte services</div>
        <div className={styles.nexioProjects}>esg projects</div>
        <div className={styles.ourClnts}>our clnts</div>
        <div className={styles.ourPartners}>our partners</div>
        <div className={styles.ourTearn}>our tearn</div>
        <div className={styles.contoatus}>contoatus</div>
        <div className={styles.coreers}>Coreers</div>
        <div className={styles.aboutUs}>about us</div>
        <div className={styles.button6}>
          <b className={styles.contactUs}>Contact us</b>
        </div>
      </div>
      <div className={styles.section3Inner} />
      <img className={styles.arrowIcon} alt="" src="/arrow-1@2x.png" />
    </div>
  );
};

export default ResourceForm;
