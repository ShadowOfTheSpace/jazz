import { StorageItemName } from "~enums/enums";

const setItemToStorage = <T>(
  key: (typeof StorageItemName)[keyof typeof StorageItemName],
  item: T
) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export { setItemToStorage };
