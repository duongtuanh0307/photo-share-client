import React, { FC } from "react";
import { useSpring, animated } from "react-spring";
import { IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

type Props = {
  color: string;
  onClick: () => void;
};

const FloatButton: FC<Props> = ({ color, onClick }) => {
  const [floatUp, setFloatUp] = React.useState(true);

  const changeFloatState = () => {
    setTimeout(() => {
      setFloatUp(!floatUp);
    }, 600);
  };
  React.useEffect(() => {
    changeFloatState();
  });

  const [floatButton, set] = useSpring(() => ({
    transform: `translateY(0px)`,
  }));
  set({
    transform: floatUp ? `translateY(10px)` : `translateY(-10px)`,
  });

  const AnimatedButton = animated(IconButton);

  function handleClickScroll() {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTo({
      top: scrollingElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    onClick();
  }

  return (
    <AnimatedButton
      style={{
        ...floatButton,
        position: "absolute",
        bottom: 20,
        left: "50%",
        width: 50,
        height: 50,
        background: color,
        zIndex: 10,
        color: "white",
      }}
      onClick={handleClickScroll}
    >
      <ExpandMore />
    </AnimatedButton>
  );
};

export default FloatButton;
