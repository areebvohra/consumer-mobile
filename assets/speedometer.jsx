import * as React from 'react';
import Svg, {
  Path, G, Defs, Rect, ClipPath,
} from 'react-native-svg';

export default function Speedometer(props) {
  return (
    // <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.24 120.55">
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.24 90.55">
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_1-2" data-name="Layer 1">
          <Path d="M55.39,19.76,75.14,54a3.42,3.42,0,0,1-1.08,4.55,67.89,67.89,0,0,0-29.21,51.05,3.37,3.37,0,0,1-3.38,3.1H3.41A3.4,3.4,0,0,1,0,109.2,112.6,112.6,0,0,1,50.6,18.59,3.4,3.4,0,0,1,55.39,19.76Z" fill="#333" opacity="0.5" />
          <Path d="M163.67,15.91,143.56,50.8a3.16,3.16,0,0,1-4,1.28,67.88,67.88,0,0,0-54,0,3.15,3.15,0,0,1-4-1.27L61.47,16a3.13,3.13,0,0,1,1.29-4.36,112.83,112.83,0,0,1,99.62-.06A3.11,3.11,0,0,1,163.67,15.91Z" fill="#333" opacity="0.5" />
          <Path d="M221.53,112.68H184.07a3.68,3.68,0,0,1-3.68-3.38,67.84,67.84,0,0,0-29.21-50.78,3.68,3.68,0,0,1-1-4.86L169.6,20a3.69,3.69,0,0,1,5.21-1.27,112.5,112.5,0,0,1,50.43,90.18A3.7,3.7,0,0,1,221.53,112.68Z" fill="#333" opacity="0.5" />
          <Path d="M111.43,119.34a10.14,10.14,0,0,0,13.78-4.22A10.26,10.26,0,0,0,121,101.23L116.84,100,67.52,86,109,117.5Z" fill="#333" opacity="0.5" />
        </G>
      </G>
    </Svg>
  );
}