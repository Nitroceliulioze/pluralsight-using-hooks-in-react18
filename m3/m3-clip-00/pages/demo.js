import { useEffect, useState } from "react";
import DemoApp from "./demoApp";

const localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
  function useMyState(initial) {
    const localStateValueIndexlocal = localStateValueIndex;

    if (localStateValues[localStateValueIndexlocal] === undefined) {
      localStateValues[localStateValueIndexlocal] = initial;
    }

    const setValue = (val) => {
      localStateValues[localStateValueIndexlocal] = val;
      reRenderMe();
    };

    localStateValueIndex++;
    const retVals = [localStateValues[localStateValueIndexlocal], setValue];
    return retVals;
  }

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log("rendering...");
  }, [cnt]);
  function reRenderMe() {
    setCnt(cnt + 1);
    console.log("reRenderMe called");
  }
  localStateValueIndex = 0;
  return <DemoApp useState={useMyState} />;
}
