'use client'
import React from 'react'
import styled from 'styled-components';
import localFont from "next/font/local";



const PPEditorialNewSans = localFont({
  src: "../../fonts/PPEditorialNew-Italic.otf",
  variable: "--font-PPEditorialNew-sans",
  weight: "100 900",
});

interface TitleProps {
    content?: string;
    className?: string;
    title: string;
    subtitle: string;
    paddingTop?: string;
    paddingBottom?: string;
}

const TitleOverlay = styled.h3.attrs(
    props => ({ className : props.className}
  ))<{$content: string, $paddingTop: string, $paddingBottom: string}>`
    position: relative;
    font-weight: 700;
    text-align: center;
    z-index: 20;
    padding-top: ${props => props.$paddingTop ? props.$paddingTop : '0'}rem;
    padding-bottom: ${props => props.$paddingBottom ? props.$paddingBottom : '0'}rem;
    &::before {
      content: "${props => props.$content}";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -67%);
      font-size: 11.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
      font-weight: 700;
      padding: 10px;
      color: '#F3742D';
      opacity: 0.05;
    }
`

const Title: React.FC<TitleProps> = ({content = '', title, subtitle , paddingTop, paddingBottom, className = 'text-dark text-4xl 2xl:text-5xl'}) => {
  const titleParts = title.split('<br/>').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < title.split('<br/>').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <TitleOverlay $content={content} className={`${className} leading-snug 2xl:leading-loose font`} $paddingTop={paddingTop ? paddingTop : '0'} $paddingBottom={paddingBottom ? paddingBottom : '0'}>
        {titleParts} {' '}
        <span className={`text-3xl 2xl:text-5xl text-center font-normal z-20 ${className} ${PPEditorialNewSans.className}`}>{subtitle}</span>
    </TitleOverlay>
  )
}

export default Title