import React, { FC } from "react";
//import { useSpring, animated } from "react-spring";
import { useTransition, animated } from "react-spring";
import styled from "@emotion/styled";
//import delay from "delay";

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
  // const script = useSpring({
  //   to: async (next: any) => {
  //     await next({
  //       transform: `translateY(100px)`,
  //       opacity: 1,
  //       reset: true,
  //     });
  //     await delay(3500);
  //     await next({
  //       transform: `translateY(60px)`,
  //       opacity: 0,
  //       reset: true,
  //       from: {
  //         transform: `translateY(100px)`,
  //         opacity: 1,
  //       },
  //     });
  //   },
  //   from: {
  //     transform: `translateY(140px)`,
  //     opacity: 0,
  //   },
  // });

  return (
    <TextSliderWrapper>
      <p>Get your next</p>
      {/* <animated.span style={script}>{topic}</animated.span> */}
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
