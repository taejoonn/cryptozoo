import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
          <defs>
              <filter id="a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
                  <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
                  <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                  <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"/>
              </filter>
              <filter id="d1" width="123.2%" height="117.5%" x="-11.6%" y="-6.3%" filterUnits="objectBoundingBox">
                  <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"/>
                  <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"/>
              </filter>
              <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity=".5"/>
                  <stop offset="100%" stopOpacity=".5"/>
              </linearGradient>
              <circle id="b" cx="16" cy="15" r="15"/>
              <path id="e1" d="M23.189 13.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 5l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>
          </defs>
          <g fill="none" fillRule="evenodd">
              <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
              <use fill="#F7931A" xlinkHref="#b"/>
              <use fill="url(#c)" style={{mixBlendMode: 'soft-light'}} xlinkHref="#b"/>
              <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"/>
              <g fillRule="nonzero">
                <use fill="#000" filter="url(#d1)" xlinkHref="#e1"/>
                <use fill="#FFF" fillRule="evenodd" xlinkHref="#e1"/>
              </g>
          </g>
      </svg>
    </Svg>
  );
};

export default Icon;
