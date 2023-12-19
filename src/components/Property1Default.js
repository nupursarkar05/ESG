import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  handTypingOnLaptopWithPla,
  lberonsNosRhpauineBeroere,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <img
        className={styles.handTypingOnLaptopWithPla}
        alt=""
        src={handTypingOnLaptopWithPla}
      />
      <div className={styles.lberonsNosRhpauine}>
        {lberonsNosRhpauineBeroere}
      </div>
    </div>
  );
};

export default Property1Default;
