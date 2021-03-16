import React, { FC } from "react";
import FloatButton from "../common/FloatButton";
import TextSlider from "../common/TextSlider";
import PhotoGrid from "../common/PhotoGrid";
import { guestPageData } from "../../data/guestPageData";
import { useGuestPageStyles } from "../../styles/guest";

const GuestPageBoard: FC<{ toggleLogin: () => void }> = ({ toggleLogin }) => {
  const classes = useGuestPageStyles();

  const [currentIndex, setCurrent] = React.useState<number>(0);
  const dataLength = guestPageData.length;

  React.useEffect(() => {
    if (dataLength === 0) return;
    setTimeout(() => {
      const newIndex =
        currentIndex +
        1 -
        Math.floor((currentIndex + 1) / dataLength) * dataLength;
      setCurrent(newIndex);
    }, 5000);
  }, [currentIndex, dataLength]);

  const { color, topic, photos } = guestPageData[currentIndex];
  return (
    <div className={classes.guestPageWrapper}>
      <FloatButton color={color} onClick={toggleLogin} />
      <TextSlider topic={topic} color={color} />
      <PhotoGrid photos={photos} className={classes.photoGrid} />
    </div>
  );
};

export default GuestPageBoard;
