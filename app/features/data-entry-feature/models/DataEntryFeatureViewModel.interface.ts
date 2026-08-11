import { ChangeEvent } from "react";
import { DataEntryItem } from "./DataEntryItem.interface";

export interface DataEntryFeatureViewModel {
  handleAddItem: () => void;
  handleDeleteItem: (itemId: string) => void;
  handleInputChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  inputValue: string;
  isAddButtonDisabled: boolean;
  itemList: DataEntryItem[];
}