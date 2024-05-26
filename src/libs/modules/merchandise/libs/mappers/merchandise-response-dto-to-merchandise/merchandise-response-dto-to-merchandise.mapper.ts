import { IMAGE_API_LINK } from "~constants/constants";
import { type Merchandise, type MerchandiseResponseDto } from "~types/types";

const merchandiseResponseDtoToMerchandise = (
  merchandiseResponseDto: MerchandiseResponseDto
): Merchandise => {
  const imageId = merchandiseResponseDto.Image
    ? new URL(merchandiseResponseDto.Image).searchParams.get("id")
    : null;

  return {
    imageUrl: imageId ? `${IMAGE_API_LINK}?id=${imageId}` : "",
    title: merchandiseResponseDto.Title,
  };
};

export { merchandiseResponseDtoToMerchandise };
