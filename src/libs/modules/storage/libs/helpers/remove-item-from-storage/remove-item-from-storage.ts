import { StorageItemName } from "~enums/enums";

const removeItemFromStorage = (
  key: (typeof StorageItemName)[keyof typeof StorageItemName]
) => {
  localStorage.removeItem(key);
};

export { removeItemFromStorage };
