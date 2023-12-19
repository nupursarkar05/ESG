import { useMemo } from "react";
import styles from "./Property1Default1.module.css";

const Property1Default1 = ({
  prop,
  jUNE,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultBorder,
  property1DefaultBoxSizing,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      border: property1DefaultBorder,
      boxSizing: property1DefaultBoxSizing,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBorder,
    property1DefaultBoxSizing,
  ]);

  return (
    <div className={styles.property1default} style={property1Default1Style}>
      <b className={styles.b}>{prop}</b>
      <b className={styles.june}>{jUNE}</b>
      <div className={styles.amPm0rueDeCnngContainer}>
        <p className={styles.eventDescriptionGoes}>
          Event Description goes here
        </p>
        <p className={styles.eventDescriptionGoes}>8AM-PM</p>
        <p className={styles.eventDescriptionGoes}>0rue de cnng</p>
      </div>
    </div>
  );
};

export default Property1Default1;
