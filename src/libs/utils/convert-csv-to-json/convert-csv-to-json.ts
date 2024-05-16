import csvToJson from "convert-csv-to-json";

const convertCsvToJson = <T>(inputTxt: string) => {
  return csvToJson.csvStringToJson(inputTxt) as T[];
};

export { convertCsvToJson };
