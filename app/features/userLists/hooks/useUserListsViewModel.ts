import { STRING } from "@/app/constants";
import { useState } from "react";
import { UseUserListsViewModel } from "../models/UseUserListsViewModel.interface";

const useUserListsViewModel = (): UseUserListsViewModel => {
  const [currentUserName, setCurrentUserName] =
    useState<string>(STRING.Empty);
  const [userList, setUserList] = useState<string[]>([]);

  const handleInputChange: UseUserListsViewModel["handleInputChange"] = (
    event
  ) => {
    setCurrentUserName(event.target.value);
  };

  const handleAddUser = (): void => {
    const trimmedUserName = currentUserName.trim();

    if (!trimmedUserName) {
      return;
    }

    setUserList((previousUserList) => [
      ...previousUserList,
      trimmedUserName,
    ]);
    setCurrentUserName(STRING.Empty);
  };

  const handleRemoveUser = (userIndex: number): void => {
    setUserList((previousUserList) =>
      previousUserList.filter(
        (_userName, currentUserIndex) =>
          currentUserIndex !== userIndex
      )
    );
  };

  return {
    canAddUser: Boolean(currentUserName.trim()),
    currentUserName,
    handleAddUser,
    handleInputChange,
    handleRemoveUser,
    userList,
  };
};

export default useUserListsViewModel;