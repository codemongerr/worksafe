import React from "react";
import JSONPretty from "react-json-pretty";
import { uid } from "react-uid";
import Icon from "../Icon";
// import PrettyJson from "../PrettyJson";
import {
  BannerContainer,
  BannerContent,
  BannerOverlay,
  BannerIconList,
  BannerIcon,
} from "./Style";
// import bannerIcons from "../../abstract/data/banner-icons.json";
// import info from "../../abstract/data/info.json";

/**
 * Stateless function component which creates website banner
 *
 * @return Banner component
 */
function Banner() {
  return (
    <BannerContainer>
      <BannerOverlay />
      {/* <BannerContent>
        <BannerIconList>
          {bannerIcons.map(bannerIcon => (
            <BannerIcon
              href={bannerIcon.uri}
              target="_blank"
              title={bannerIcon.title}
              key={uid(bannerIcon)}
            >
              <Icon name={bannerIcon.icon} />
            </BannerIcon>
          ))}
        </BannerIconList>
      </BannerContent> */}
    </BannerContainer>
  );
}

export default Banner;
