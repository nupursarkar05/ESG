import { useCallback } from "react";
import Property1Default2 from "./Property1Default2";
import Property1noAction1 from "./Property1noAction1";
import styles from "./Header.module.css";

const Header = () => {
  const onButton7ContainerClick = useCallback(() => {
    // Please sync "usersignup" to the project
  }, []);

  return (
    <div className={styles.hero}>
      <img className={styles.heroChild} alt="" src="/ellipse-7@2x.png" />
      <div
        className={styles.receiveExpertSupport}
      >{`We are the driving force behind a new era of sustainability, innovation, and responsible business practices. `}</div>
      <div className={styles.button7} onClick={onButton7ContainerClick}>
        <div className={styles.bookADiscovery}>Learn More</div>
      </div>
      <div className={styles.headerMenu1}>
        <Property1Default2
          aboutUsV="Events"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="10px"
        />
        <Property1Default2
          aboutUsV="Resources"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="126px"
        />
        <Property1noAction1
          signUpAsCollege="Sign Up for College"
          property1noActionBackgroundColor="#fff"
          property1noActionPosition="absolute"
          property1noActionTop="3px"
          property1noActionLeft="396px"
          property1noActionFlexShrink="0"
          signUpAsFontWeight="500"
          signUpAsColor="#6d31ed"
        />
        <Property1noAction1
          signUpAsCollege="Log In"
          property1noActionBackgroundColor="#fff"
          property1noActionPosition="absolute"
          property1noActionTop="3px"
          property1noActionLeft="598px"
          property1noActionFlexShrink="0"
          signUpAsFontWeight="500"
          signUpAsColor="#6d31ed"
        />
        <Property1Default2
          aboutUsV="About us "
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="-134px"
        />
        <div className={styles.codequest}>CodeQuest</div>
      </div>
      <b className={styles.guidingYouThroughyourContainer}>
        <p className={styles.environment}>{`Environment `}</p>
        <p className={styles.environment}>{`Social, `}</p>
        <p className={styles.environment}>Governance</p>
      </b>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default Header;
