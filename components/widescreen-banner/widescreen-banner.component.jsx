import React from "react";
import { BannerImage } from "./banner-image";
import { BannerShadow } from "./banner-shadow";

const WidescreenBanner = ({slogan}) => {
    return (
        <BannerImage>
            <BannerShadow>
                <div className="widescreen__slogan">
                <h1 className="widescreen__slogan__string">
                {
                    slogan.map((string, i) => 
                    (<span key={i} style={{display: 'block'}}>
                        {string}
                    </span>)
                )}
                </h1>
                </div>
            </BannerShadow>
        </BannerImage>
    )
}

export default WidescreenBanner;
