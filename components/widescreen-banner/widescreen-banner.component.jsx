import React from "react";
import { BannerImage } from "./banner-image";
import { BannerShadow } from "./banner-shadow";

const WidescreenBanner = ({slogan}) => {
    return (
        <BannerImage>
            <BannerShadow>
                <div className="widescreen__slogan">
                {
                    slogan.map((string, i) => 
                    (<h1 className="widescreen__slogan__string" key={`banner-string-${i}`}>{string}</h1>)
                )}
                </div>
            </BannerShadow>
        </BannerImage>
    )
}

export default WidescreenBanner;
