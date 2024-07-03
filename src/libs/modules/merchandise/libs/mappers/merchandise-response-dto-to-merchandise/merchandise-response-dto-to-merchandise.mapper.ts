import { IMAGE_API_LINK } from "~constants/constants";
import { type Merchandise, type MerchandiseResponseDto } from "~types/types";

const merchandiseResponseDtoToMerchandise = (
  merchandiseResponseDto: MerchandiseResponseDto
): Merchandise => {
  const imageId = merchandiseResponseDto.Image
    ? new URL(merchandiseResponseDto.Image).searchParams.get("id")
    : null;

  return {
    id: merchandiseResponseDto.ID,
    imageUrl: imageId ? `${IMAGE_API_LINK}?id=${imageId}` : "",
    price: merchandiseResponseDto.Price,
    sizes: merchandiseResponseDto.Sizes
      ? merchandiseResponseDto.Sizes.split(", ")
      : null,
    title: {
      by: merchandiseResponseDto.TitleBY,
      en: merchandiseResponseDto.TitleEN,
      lt: merchandiseResponseDto.TitleLT,
      ua: merchandiseResponseDto.TitleUA,
    },
  };
};

export { merchandiseResponseDtoToMerchandise };
