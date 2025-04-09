import * as React from "react";
import Svg, { Path } from "react-native-svg";

// svg для использования в react native конвертируем в svgr
const EyeOpenIcon = () => (
  <Svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)
export default EyeOpenIcon;
