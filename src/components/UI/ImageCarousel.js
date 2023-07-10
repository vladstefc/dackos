import React, { useState, useEffect, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarouse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(1);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleCarouselEnded = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };

  const images = useMemo(
    () => [
      require("../../assets/images/0cdd5852-1b78-44e8-aca7-91e238efc5d8.jpg"),
      require("../../assets/images/331cb898-9c4c-41c8-9f8d-93ab2b6d8b3b.jpg"),
      require("../../assets/images/33bc5aff-86e0-406c-be1d-a86a35f06111.jpg"),
      require("../../assets/images/3a071ef1-1551-49a4-8653-392064c355a5.jpg"),
      require("../../assets/images/4c8244a0-82f8-4ab1-91eb-2c6b758f0937.jpg"),
      require("../../assets/images/507ddb4c-fb3d-45a4-8953-82c8fbbef417.jpg"),
      require("../../assets/images/58907288-5455-4d94-9f76-329c1642b557.jpg"),
      require("../../assets/images/5901ebd2-50b0-4db4-af77-86c3482d6cb0.jpg"),
      require("../../assets/images/656c66f1-0087-4927-8213-775096cbcfa1.jpg"),
      require("../../assets/images/6606e4bd-4aeb-48b9-81ab-1dfa2d37255c.jpg"),
      require("../../assets/images/67cc64dc-7c42-4efd-8c96-5cb44d561d4e.jpg"),
      require("../../assets/images/739f481d-586f-48fb-a384-88a2c19dd651.jpg"),
      require("../../assets/images/740620d5-d9bd-42e5-9282-ca2850bb79f7.jpg"),
      require("../../assets/images/773a20bc-3d5b-46de-8793-3e8f4b669276.jpg"),
      require("../../assets/images/77dec57f-b64e-4e16-8b88-4def5bda9157.jpg"),
      require("../../assets/images/8a87df71-e7ca-48ea-b515-a0afb8abffbc.jpg"),
      require("../../assets/images/968f7f28-089a-4918-90ac-1417f75d9b0a.jpg"),
      require("../../assets/images/a5787ce3-1c5b-4aed-b744-53ab53ae8984.jpg"),
      require("../../assets/images/b82127ad-e571-4d5e-a9f2-373cbb1a4c43.jpg"),
      require("../../assets/images/ccc5c32a-e563-4ecb-a081-cd03e963efd5.jpg"),
      require("../../assets/images/cfc4c043-969a-4101-8f65-d4336d36622c.jpg"),
      require("../../assets/images/da63b620-5c0d-4d71-9396-49b4803f5a88.jpg"),
      require("../../assets/images/e0878942-3e59-4110-ad0f-9923253ee649.jpg"),
      require("../../assets/images/ee232673-de2a-480d-b267-cb9c8d180cb3.jpg"),
      require("../../assets/images/f496f2aa-72b9-4c79-9157-d351f9c2ea2f.jpg"),
      require("../../assets/images/fc3513e0-9a36-4dd0-a817-bd4b67e517f3.jpg"),
    ],
    []
  );

  useEffect(() => {
    const firstImage = new Image();
    firstImage.src = images[0];
    firstImage.onload = () => {
      const imageAspectRatio = firstImage.width / firstImage.height;
      setAspectRatio(imageAspectRatio);
    };
  }, [images]);

  return (
    <div
      style={{
        maxWidth: "600",
        margin: "0 auto",
        height: 700 / aspectRatio,
        marginBottom: "20px",
      }}
    >
      <Carousel
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        onCarouselEnd={handleCarouselEnded}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              isplay: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: `${700 / aspectRatio}px`,
            }}
          >
            <img
              src={image}
              alt="Images from portfolio"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarouse;
