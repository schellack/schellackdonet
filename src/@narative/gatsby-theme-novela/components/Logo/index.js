import React from "react";
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/core";
// import mediaqueries from "@styles/media";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
const Logo = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="200"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <g class="layer">
          <g>
            <path
              d="m12.47852,1.2325a5.33143,5.33143 0 0 0 -5.1715,5.32467l0,8.19718a2.09589,2.09589 0 0 0 -1.35532,3.35287l-1.6826,0a0.30674,0.30674 0 0 0 -0.29534,0.22291l-1.88107,6.74866a0.30674,0.30674 0 0 0 0.29531,0.38972l10.4508,0a0.30674,0.30674 0 0 0 0.29534,-0.38972l-1.87988,-6.74866a0.30674,0.30674 0 0 0 -0.29534,-0.22291l-1.685,0a2.09589,2.09589 0 0 0 -1.35295,-3.35287l0,-5.71316a5.33119,5.33119 0 0 0 9.09916,0.55269a0.18405,0.18405 0 0 1 0.33575,0.10411l0,13.80372a5.33143,5.33143 0 0 0 10.66285,0l0,-21.93839a0.3076,0.3076 0 0 0 -0.61522,0l0,19.45557a5.33119,5.33119 0 0 0 -9.43362,0l0,-14.46177a5.33143,5.33143 0 0 0 -5.49138,-5.32467l0,0.00005l0.00001,0zm0.12381,3.16906a2.12926,2.12926 0 0 1 2.16535,2.15561a2.12926,2.12926 0 0 1 -4.2585,0a2.12926,2.12926 0 0 1 2.09314,-2.15561l0.00001,0zm-5.00486,10.94467a1.48241,1.48241 0 0 1 0.03325,0a1.48241,1.48241 0 0 1 0.73412,2.76099l-1.50123,0a1.48241,1.48241 0 0 1 0.73405,-2.76099l-0.00019,0zm15.0537,5.99991a2.12926,2.12926 0 0 1 2.16417,2.15561a2.12926,2.12926 0 1 1 -4.25726,0a2.12926,2.12926 0 0 1 2.0931,-2.15561l-0.00001,0z"
              fill={fill}
            />
          </g>
          <g>
            <line
              css={css`
                animation: ${slidingLogoLine} 8s linear forwards;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
              `}
              strokeLinecap="undefined"
              strokeLinejoin="undefined"
              id="svg_5"
              x1="28.65432"
              y1="2.55128"
              x2="180"
              y2="2.55128"
              strokeWidth="0.65"
              stroke={fill}
              fill="none"
            />
            <line stroke={fill} transform="rotate(90 28.73289680480957,8.119462966918949) " strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_6"stroke-width="0.67" x1="12.36004" y1="18.93554" x2="45.10576" y2="18.93554" fill="none"/>
            <ellipse ry="0.13652" rx="0.13652" id="svg_7" cy="2.59672" cx="28.78157" fillOpacity="null" strokeOpacity="null" strokeWidth="0.5" stroke={fill} fill="none"/>
          </g>
          <text
            fill={fill}
            fontFamily="Lato, Helvetica, Arial, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="1"
            textAnchor="middle"
            x="102.75"
            xmlSpace="preserve"
            y="23.90625"
          >
            SCHELLACK.NET
          </text>
        </g>
      </svg>

      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <g id="svg_1">
          <path
            d="m12.47852,1.2325a5.33143,5.33143 0 0 0 -5.1715,5.32467l0,8.19718a2.09589,2.09589 0 0 0 -1.35532,3.35287l-1.6826,0a0.30674,0.30674 0 0 0 -0.29534,0.22291l-1.88107,6.74866a0.30674,0.30674 0 0 0 0.29531,0.38972l10.4508,0a0.30674,0.30674 0 0 0 0.29534,-0.38972l-1.87988,-6.74866a0.30674,0.30674 0 0 0 -0.29534,-0.22291l-1.685,0a2.09589,2.09589 0 0 0 -1.35295,-3.35287l0,-5.71316a5.33119,5.33119 0 0 0 9.09916,0.55269a0.18405,0.18405 0 0 1 0.33575,0.10411l0,13.80372a5.33143,5.33143 0 0 0 10.66285,0l0,-21.93839a0.3076,0.3076 0 0 0 -0.61522,0l0,19.45557a5.33119,5.33119 0 0 0 -9.43362,0l0,-14.46177a5.33143,5.33143 0 0 0 -5.49138,-5.32467l0,0.00005zm0.12381,3.16906a2.12926,2.12926 0 0 1 2.16535,2.15561a2.12926,2.12926 0 0 1 -4.2585,0a2.12926,2.12926 0 0 1 2.09314,-2.15561zm-5.00486,10.94467a1.48241,1.48241 0 0 1 0.03325,0a1.48241,1.48241 0 0 1 0.73412,2.76099l-1.50123,0a1.48241,1.48241 0 0 1 0.73405,-2.76099l-0.00019,0zm15.0537,5.99991a2.12926,2.12926 0 0 1 2.16417,2.15561a2.12926,2.12926 0 1 1 -4.25726,0a2.12926,2.12926 0 0 1 2.0931,-2.15561z"
            fill={fill}
            id="svg_2"
          />
        </g>
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const slidingLogoLine = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  // ${mediaqueries.tablet`
  //   .Logo__Desktop {
  //     display: none;
  //   }
    
  //   .Logo__Mobile{
  //     display: block;
  //   }
  // `}
`;
