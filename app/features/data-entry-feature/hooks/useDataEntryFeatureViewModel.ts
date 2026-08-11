import { ChangeEvent, useState } from "react";
import { STRING } from "@/app/constants";
import { DataEntryFeatureViewModel } from "../models/DataEntryFeatureViewModel.interface";

const useDataEntryFeatureViewModel = (): DataEntryFeatureViewModel => {
  const [inputValue, setInputValue] =
    useState<string>(STRING.Empty);
  const [itemList, setItemList] = useState<
    DataEntryFeatureViewModel["itemList"]
  >([]);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (): void => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    setItemList((currentItemList) => [
      ...currentItemList,
      {
        id: crypto.randomUUID(),
        value: trimmedValue,
      },
    ]);
    setInputValue(STRING.Empty);
  };

  const handleDeleteItem = (itemId: string): void => {
    setItemList((currentItemList) =>
      currentItemList.filter((item) => item.id !== itemId)
    );
  };

  return {
    handleAddItem,
    handleDeleteItem,
    handleInputChange,
    inputValue,
    isAddButtonDisabled: !inputValue.trim(),
    itemList,
  };
};

export default useDataEntryFeatureViewModel;