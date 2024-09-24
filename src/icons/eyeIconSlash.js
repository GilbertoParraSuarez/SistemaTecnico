import React from 'react';
import { Svg, Path } from 'react-native-svg';

const EyeIconSlash = (props) => (
  <Svg viewBox="0 0 640 512" width={props.width} height={props.height} {...props}>
    <Path
      fill={props.color || "#000"} // Propiedad fill para definir el color del ícono
      d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2L34.7 9.2 42.9 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5 4.1-33.7-4.1-33.7-4.1Z"
    />
  </Svg>
);

export default EyeIconSlash;
