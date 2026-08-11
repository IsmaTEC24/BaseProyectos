import React from "react";

export interface UseUserListsViewModel {
  canAddUser: boolean;
  currentUserName: string;
  handleAddUser: () => void;
  handleInputChange: (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => void;
  handleRemoveUser: (userIndex: number) => void;
  userList: string[];
}