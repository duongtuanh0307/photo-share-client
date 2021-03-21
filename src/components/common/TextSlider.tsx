import React, { FC } from "react";
import { useTransition, animated } from "react-spring";
import styled from "@emotion/styled";

type Props = {
  topic: string;
  color: string;
};

const TextSlider: FC<Props> = ({ topic, color }) => {
  const transitions = useTransition(topic, null, {
    from: {
      transform: `translateY(140px)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(100px)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(60px)`,
      opacity: 0,
    },
  });

  return (
    <TextSliderWrapper>
      <p>Get your next</p>
      {transitions.map(({ item, props }) => (
        <animated.span style={{ ...props, color: color }}>{item}</animated.span>
      ))}
    </TextSliderWrapper>
  );
};

export default TextSlider;

const TextSliderWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  p: {
    color: "black",
    fontSize: 40,
    fontWeight: 900,
    top: 140,
  },
  span: {
    fontSize: 48,
    fontWeight: 900,
    position: "absolute",
  },
});
