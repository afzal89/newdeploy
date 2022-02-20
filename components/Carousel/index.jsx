import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { MEDIA } from "../../util/constants";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Carousel = (props) => {
  const { child } = props;
  return (
    <Slider {...settings} style={{ marginBottom: "25px" }}>
      {child.map((media) =>
        media.media_type === MEDIA.IMAGE ? (
          <Image
            unoptimized={true}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={media.media_url || "/no-image.jpg"}
          />
        ) : (
          <video src={media.media_url} loop controls />
        )
      )}
    </Slider>
  );
};

export default Carousel;
