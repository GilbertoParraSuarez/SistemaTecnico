import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

const EyeIcon = (props) => (
  <Svg viewBox="0 0 576 512" width={props.width} height={props.height} {...props}>
    <Path
      fill={props.color || "#000"} // Añade la propiedad fill
      d="M288 32C80.8 0 145.5 36.8 192.6 80.6C48 156 156.7 208.2 243.7 243.7C7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95C112 80.4 156 52.6 192 32C288 0 365 0 192 0 156 52.6 243.7 156.7 243.7 243.7 356 95 304 17.3 288 16.7 0 7.9 3.3 243.7 208.2 48 192.6 80.8 36.8 145.5 0 32Z"
    />
  </Svg>
);

export default EyeIcon;
