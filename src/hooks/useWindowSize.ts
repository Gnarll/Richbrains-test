import { useEffect, useState } from "react";

export const breakpointsConfig = [
  {
    value: "xs",
    width: 600,
  },
  {
    value: "sm",
    width: 900,
  },
  {
    value: "md",
    width: 1200,
  },
  {
    value: "lg",
    width: 1500,
  },
];

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

export const useBreakpoints = (value: string) => {
  const currentBreakpoint = breakpointsConfig.find(
    (breakpoint) => breakpoint.value === value
  );

  const [isBreakpointCorrect, setIsBreakpointCorrect] = useState(
    () => currentBreakpoint?.width ? true : false
  );

  const windowWidth = useWindowSize();

  useEffect(() => {
    setIsBreakpointCorrect(
      currentBreakpoint ?  windowWidth < currentBreakpoint.width ? true : false: false
    );
  }, [windowWidth, currentBreakpoint]);

  return isBreakpointCorrect;
};
