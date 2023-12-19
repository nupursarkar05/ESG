import Property1noAction from "./Property1noAction";
import Property1noAction1 from "./Property1noAction1";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.section2}>
      <b className={styles.nexioProjectsIsContainer}>
        <span>G</span>
        <span className={styles.overnance}>overnance</span>
      </b>
      <div className={styles.signUpAs}>View More</div>
      <div className={styles.section2Child} />
      <div className={styles.employeeRelations}>Employee Relations</div>
      <div className={styles.div}>1</div>
      <div className={styles.howACompany}>
        How a company treats its employees. This includes fair wages, working
        conditions, benefits, and overall well-being.
      </div>
      <div className={styles.section2Item} />
      <div className={styles.diversityAndInclusion}>
        Diversity and Inclusion
      </div>
      <div className={styles.div1}>2</div>
      <div className={styles.thisInvolvesPromoting}>
        This involves promoting equal opportunities for people of different
        backgrounds, genders, ethnicities, and abilities.
      </div>
      <div className={styles.section2Inner} />
      <div className={styles.communityEngagement}>Community Engagement</div>
      <div className={styles.div2}>3</div>
      <div className={styles.thisIncludesPhilanthropy}>
        This includes philanthropy, social initiatives, and efforts to
        contribute positively to the well-being of local communities.
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.humanRights}>Human Rights</div>
      <div className={styles.div3}>4</div>
      <div className={styles.thisInvolvesEnsuring}>
        This involves ensuring that the company does not engage in practices
        that violate fundamental human rights.
      </div>
      <Property1noAction
        viewMore="View Dashboard"
        showRectangleDiv={false}
        showViewMore={false}
        property1noActionWidth="146px"
        property1noActionPosition="absolute"
        property1noActionTop="1617px"
        property1noActionLeft="659px"
        viewMoreLeft="-1px"
        viewMoreColor="#fff"
      />
      <Property1noAction1
        signUpAsCollege="View Dashboard "
        property1noActionBackgroundColor="#6d31ed"
        property1noActionPosition="absolute"
        property1noActionTop="1565px"
        property1noActionLeft="calc(50% - 82px)"
        property1noActionFlexShrink="unset"
        signUpAsFontWeight="bold"
        signUpAsColor="#fff"
      />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.ourGoal}>
        <div className={styles.container67}>
          <div className={styles.driveCollectionActionfosterContainer}>
            <p className={styles.driveCollectionAction}>
              drive collection action,
            </p>
            <p className={styles.driveCollectionAction}>
              foster collaboration.
            </p>
          </div>
          <b className={styles.ourGoal1}>our goal?</b>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        </div>
        <div className={styles.durmissionisToEmpower}>
          Empower next gen leaders in higher ed with deep ESG understanding.
          Provide learning environment to equip students with knowledge and
          spark passion for sustainability.
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
