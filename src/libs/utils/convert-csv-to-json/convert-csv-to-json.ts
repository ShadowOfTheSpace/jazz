import csvToJson from "convert-csv-to-json";

const convertCsvToJson = <T>(inputTxt: string) => {
  return csvToJson
    .fieldDelimiter(",")
    .supportQuotedField(true)
    .csvStringToJson(inputTxt) as T[];
};

export { convertCsvToJson };
