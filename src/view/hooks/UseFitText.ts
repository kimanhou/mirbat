import { useLayoutEffect, useRef, useState } from "react";

export const useFitText = (deps?: React.InputIdentityList | undefined, debug ?: boolean) : [string, React.RefObject<HTMLDivElement>] => {
  const defaultDeps = deps != null ? deps : [];
    const MIN_FONT_SIZE = 20;
    const MAX_FONT_SIZE = 100;
    const RESOLUTION = 5;
  
    const ref = useRef<HTMLDivElement>(null);
  
    const [state, setState] = useState({
      fontSize: MAX_FONT_SIZE,
      fontSizePrev: MIN_FONT_SIZE,
      fontSizeMax: MAX_FONT_SIZE,
      fontSizeMin: MIN_FONT_SIZE,
    });
    const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

    useLayoutEffect(() => {
      setState({
        fontSize: MAX_FONT_SIZE,
        fontSizePrev: MIN_FONT_SIZE,
        fontSizeMax: MAX_FONT_SIZE,
        fontSizeMin: MIN_FONT_SIZE,
      });
    }, defaultDeps);

    useLayoutEffect(() => {
      const callback = () => {
        setState({
          fontSize: MAX_FONT_SIZE,
          fontSizePrev: MIN_FONT_SIZE,
          fontSizeMax: MAX_FONT_SIZE,
          fontSizeMin: MIN_FONT_SIZE,
        })
      }
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback)
    }, []);
  
    useLayoutEffect(() => {
      const isDone = Math.abs(fontSize - fontSizePrev) <= RESOLUTION;
      const isOverflow =
        ref.current != null &&
        (ref.current.scrollHeight > ref.current.offsetHeight ||
          ref.current.scrollWidth > ref.current.offsetWidth);
      const isAsc = fontSize > fontSizePrev;
      if(debug){
        console.log(`ref.current : ${ref.current}`);
        if(ref.current != null){
          console.log(`ref.current.scrollHeight : ${ref.current.scrollHeight}`);
          console.log(`ref.current.offsetHeight : ${ref.current.offsetHeight}`);
          console.log(`ref.current.scrollWidth : ${ref.current.scrollWidth}`);
          console.log(`ref.current.offsetWidth : ${ref.current.offsetWidth}`);
        }
        console.log(`isDone : ${isDone}`);
        console.log(`isOverflow : ${isOverflow}`);
      }
  
      // return if the font size has been adjusted "enough" (change within RESOLUTION)
      // reduce font size by one increment if it's overflowing
      if (isDone) {
        if (isOverflow) {
          const fontSizeNew =
            fontSizePrev < fontSize
              ? fontSizePrev
              : fontSize - (fontSizePrev - fontSize);
          setState({
            fontSize: fontSizeNew,
            fontSizeMax,
            fontSizeMin,
            fontSizePrev,
          });
        }
        return;
      }
  
      // binary search to adjust font size
      let delta;
      let newMax = fontSizeMax;
      let newMin = fontSizeMin;
      if (isOverflow) {
        delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
        newMax = Math.min(fontSizeMax, fontSize);
      } else {
        delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
        newMin = Math.max(fontSizeMin, fontSize);
      }
      setState({
        fontSize: fontSize + delta / 2,
        fontSizeMax: newMax,
        fontSizeMin: newMin,
        fontSizePrev: fontSize,
      });
    }, [fontSize, fontSizeMax, fontSizeMin, fontSizePrev, ref]);
  
    return [`${fontSize}%`, ref];
  };