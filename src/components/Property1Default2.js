import { useMemo } from "react";
import styles from "./Property1Default2.module.css";

const Property1Default2 = ({
  aboutUsV,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1Default2Style}>
      <div className={styles.aboutUsV}>{aboutUsV}</div>
    </div>
  );
};

export default Property1Default2;
