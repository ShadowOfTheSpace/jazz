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
    title: merchandiseResponseDto.Title,
    price: merchandiseResponseDto.Price,
    sizes: merchandiseResponseDto.Sizes
      ? merchandiseResponseDto.Sizes.split(", ")
      : null,
  };
};

export { merchandiseResponseDtoToMerchandise };
