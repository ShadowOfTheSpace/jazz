import { MerchandiseResponseDto } from "~types/types";
import { convertCsvToJson } from "~utils/utils";
import { MERCHANDISE_URL } from "../../constants/constants";
import { merchandiseResponseDtoToMerchandise } from "../../mappers/mappers";

const getMerchandise = async () => {
  try {
    const response = await fetch(MERCHANDISE_URL);

    const merchandiseCsv = await response.text();

    return convertCsvToJson<MerchandiseResponseDto>(merchandiseCsv).map(
      merchandiseResponseDtoToMerchandise
    );
  } catch (error) {
    return [];
  }
};

export { getMerchandise };
