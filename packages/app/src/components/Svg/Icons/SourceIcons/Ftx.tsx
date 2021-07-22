import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps>
  = (props) => {
  return (
  <Svg viewBox="0 0 375 374.999991" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000.03 1739.27">
        {/* <defs>
          <style>.cls-1{fill:#02a6c2;}.cls-2{fill:#5fcade;}.cls-3{fill:#abebf4;}</style>
        </defs> */}
        <title>ftx--logo</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1"
              fill="#02a6c2"
              d="M565.41.11q717.21-.22,1434.51,0,.22,231.83,0,463.58-717.23.22-1434.51,0Q565.18,231.86,565.41.11Z" />
            <path
              fill="#5fcade"
              className="cls-2" d="M.6,638.1q231.39-1.2,462.86,0,1.2,231.39,0,462.86Q232,1102.15.6,1101-.6,869.57.6,638.1Z" />
            <path
              fill="#abebf4"
              className="cls-2" d="M565.77,638.1q517.67-1.1,1035.27,0,1.1,231.39,0,462.86-517.66,1.08-1035.27,0Q564.69,869.56,565.77,638.1Z" /><path className="cls-3" d="M566.2,1276.23q231-2.51,461.92,0,2.4,230.85.07,461.92-231,2.28-461.91-.08Q563.88,1507.24,566.2,1276.23Z" /></g></g></svg>  </Svg>
  );
};

export default Icon;
