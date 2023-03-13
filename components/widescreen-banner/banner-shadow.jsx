import styled from 'styled-components';

export const BannerShadow = styled.div`
    background-color: rgba(0,0,0,0.3);
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & .widescreen__slogan {
        font-size: 9vw;
        text-align: center;
        width: 70%;
        @media screen and (max-width: 1023px) {
            font-size: 3.3em;
        }
        @media screen and (max-width: 767px) {
            font-size: 2.5em;
        }
        @media screen and (max-width: 599px) {
            font-size: 2em;
        }
        @media screen and (max-width: 480px) {
            width: 90%;
        }
        @media screen and (max-width: 374px) {
            width: 95%;
            font-size: 1.67em;
        }
        font-weight: 600;
        color: white;
        & .widescreen__slogan__string {
            display: block;
            font-size: 9vw;
        }
    }
    & img {
        display: block;
        max-width: 300px;
        max-height: 300px;
        @media screen and (max-width: 1023px) {
            max-width: 220px;
            max-height: 220px;
        }
        @media screen and (max-width: 767px) {
            max-width: 180px;
            max-height: 180px;
        }
        @media screen and (max-width: 479px) {
            max-width: 150px;
            max-height: 150px;
        }
    }
`