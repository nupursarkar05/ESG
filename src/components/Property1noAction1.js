import { useMemo } from "react";
import styles from "./Property1noAction1.module.css";

const Property1noAction1 = ({
  signUpAsCollege,
  property1noActionBackgroundColor,
  property1noActionPosition,
  property1noActionTop,
  property1noActionLeft,
  property1noActionFlexShrink,
  signUpAsFontWeight,
  signUpAsColor,
}) => {
  const property1noAction1Style = useMemo(() => {
    return {
      backgroundColor: property1noActionBackgroundColor,
      position: property1noActionPosition,
      top: property1noActionTop,
      left: property1noActionLeft,
      flexShrink: property1noActionFlexShrink,
    };
  }, [
    property1noActionBackgroundColor,
    property1noActionPosition,
    property1noActionTop,
    property1noActionLeft,
    property1noActionFlexShrink,
  ]);

  const signUpAsStyle = useMemo(() => {
    return {
      fontWeight: signUpAsFontWeight,
      color: signUpAsColor,
    };
  }, [signUpAsFontWeight, signUpAsColor]);

  return (
    <div className={styles.property1noAction} style={property1noAction1Style}>
      <div className={styles.signUpAs} style={signUpAsStyle}>
        {signUpAsCollege}
      </div>
    </div>
  );
};

export default Property1noAction1;
