import { useMemo } from "react";
import styles from "./Property1noAction.module.css";

const Property1noAction = ({
  viewMore,
  showRectangleDiv,
  showViewMore,
  property1noActionWidth,
  property1noActionPosition,
  property1noActionTop,
  property1noActionLeft,
  viewMoreLeft,
  viewMoreColor,
}) => {
  const property1noActionStyle = useMemo(() => {
    return {
      width: property1noActionWidth,
      position: property1noActionPosition,
      top: property1noActionTop,
      left: property1noActionLeft,
    };
  }, [
    property1noActionWidth,
    property1noActionPosition,
    property1noActionTop,
    property1noActionLeft,
  ]);

  const viewMoreStyle = useMemo(() => {
    return {
      left: viewMoreLeft,
      color: viewMoreColor,
    };
  }, [viewMoreLeft, viewMoreColor]);

  return (
    <div className={styles.property1noAction} style={property1noActionStyle}>
      {showRectangleDiv && <div className={styles.property1noActionChild} />}
      {showViewMore && (
        <div className={styles.viewMore} style={viewMoreStyle}>
          {viewMore}
        </div>
      )}
    </div>
  );
};

export default Property1noAction;
