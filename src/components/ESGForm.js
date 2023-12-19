import styles from "./ESGForm.module.css";

const ESGForm = () => {
  return (
    <div className={styles.section2}>
      <b className={styles.nexioProjectsIs}>What is ESG?</b>
      <div className={styles.ourExpertsSupportContainer}>
        <p
          className={styles.esgIsA}
        >{`ESG is a test of the institution on how sustainable the company is and it is tested on 3 major factors that are `}</p>
      </div>
      <div className={styles.signUpAs}>View More</div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.impactOnEnvironment}>Impact on Environment</div>
        <div className={styles.e}>E</div>
      </div>
      <div className={styles.section2Child} />
      <div className={styles.socialImpact}>Social Impact</div>
      <div className={styles.s}>S</div>
      <div className={styles.section2Item} />
      <div className={styles.overallGovernance}>overall governance</div>
      <div className={styles.g}>G</div>
    </div>
  );
};

export default ESGForm;
