import { StorageItemName } from "~enums/enums";

const getItemFromStorage = <T>(
  key: (typeof StorageItemName)[keyof typeof StorageItemName]
) => {
  const itemFromStorage = localStorage.getItem(key);
  try {
    return itemFromStorage ? (JSON.parse(itemFromStorage) as T) : null;
  } catch (err) {
    console.error(err);
  }
};

export { getItemFromStorage };
