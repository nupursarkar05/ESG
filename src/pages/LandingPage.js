import ESGForm from "../components/ESGForm";
import Header from "../components/Header";
import Property1noAction from "../components/Property1noAction";
import Property1noAction1 from "../components/Property1noAction1";
import FormContainer from "../components/FormContainer";
import ResourceForm from "../components/ResourceForm";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <ESGForm />
      <Header />
      <div className={styles.section2}>
        <b className={styles.nexioProjectsIsContainer}>
          <span>E</span>
          <span className={styles.nvironment}>nvironment</span>
        </b>
        <div className={styles.signUpAs}>View More</div>
        <div className={styles.section2Child} />
        <div className={styles.climateImpact}>Climate Impact</div>
        <div className={styles.div}>1</div>
        <div className={styles.thisIncludesIts}>
          This includes its carbon footprint, use of renewable energy, and
          efforts to reduce greenhouse gas emissions
        </div>
        <div className={styles.section2Item} />
        <div className={styles.resourceUse}>Resource Use</div>
        <div className={styles.div1}>2</div>
        <div className={styles.effortsToMinimize}>
          Efforts to minimize waste and optimize resource efficiency fall under
          this category.
        </div>
        <div className={styles.section2Inner} />
        <div className={styles.pollutionAndWaste}>Pollution and Waste</div>
        <div className={styles.div2}>3</div>
        <div className={styles.thisInvolvesPractices}>
          This involves practices related to waste disposal, recycling, and
          emissions.
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.biodiversity}>Biodiversity</div>
        <div className={styles.div3}>4</div>
        <div className={styles.institutionsAreEvaluated}>
          Institutions are evaluated on how their activities affect local
          ecosystems and whether they have conservation measures in place.
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
          property1noActionTop="1587px"
          property1noActionLeft="calc(50% - 82px)"
          property1noActionFlexShrink="unset"
          signUpAsFontWeight="bold"
          signUpAsColor="#fff"
        />
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      </div>
      <div className={styles.section21}>
        <b className={styles.nexioProjectsIsContainer}>
          <span>S</span>
          <span className={styles.nvironment}>ocial</span>
        </b>
        <div className={styles.signUpAs}>View More</div>
        <div className={styles.section2Child} />
        <div className={styles.employeeRelations}>Employee Relations</div>
        <div className={styles.div}>1</div>
        <div className={styles.thisIncludesIts}>
          How a company treats its employees. This includes fair wages, working
          conditions, benefits, and overall well-being.
        </div>
        <div className={styles.section2Child2} />
        <div className={styles.diversityAndInclusion}>
          Diversity and Inclusion
        </div>
        <div className={styles.div5}>2</div>
        <div className={styles.thisInvolvesPromoting}>
          This involves promoting equal opportunities for people of different
          backgrounds, genders, ethnicities, and abilities.
        </div>
        <div className={styles.section2Inner} />
        <div className={styles.pollutionAndWaste}>Community Engagement</div>
        <div className={styles.div2}>3</div>
        <div className={styles.thisIncludesPhilanthropy}>
          This includes philanthropy, social initiatives, and efforts to
          contribute positively to the well-being of local communities.
        </div>
        <div className={styles.ellipseDiv} />
        <div className={styles.humanRights}>Human Rights</div>
        <div className={styles.div3}>4</div>
        <div className={styles.institutionsAreEvaluated}>
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
      </div>
      <FormContainer />
      <ResourceForm />
    </div>
  );
};

export default LandingPage;
