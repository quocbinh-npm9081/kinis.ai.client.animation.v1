'use client'
import Image from 'next/image';
import React from 'react'
import CardColleagueStyle from './style.module.scss';
import styled from 'styled-components';

interface CardColleagueComponentProps {
    title: string;
    imgMain: string;
    imgHovering: string;
}

const CardOverlay = styled.div`
    position: relative;
    .overlay-title{
        opacity: 0; 
    }
    &:hover .overlay-title {
        transition: opacity 0.3s ease;
        opacity: 1;
    }
`;



const CardColleagueComponent = ({title, imgMain,imgHovering }: CardColleagueComponentProps) => {
  return (
    <CardOverlay className={`w-56 h-96 ${CardColleagueStyle.colleagueItem}`}>
        <Image src={imgMain} alt={title} fill={true} className='object-fill  w-full h-full' 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
        <Image src={imgHovering} alt={title} className="overlay-title object-fill w-full h-full" fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
    </CardOverlay>
  );
}

export default CardColleagueComponent