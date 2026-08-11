import { BUTTON, BUTTON_TYPES, COLOR } from "@/app/constants";
import { ReactElement } from "react";
import Button from "@/app/components/button/Button";
import { UserListItemsProps } from "../models/UserListItemsProps.interface";

const UserListItems = ({
  onRemoveUser,
  removeButtonLabel,
  userList,
}: UserListItemsProps): ReactElement => {
  return (
    <ul className="space-y-3">
      {userList.map((userName, userIndex) => (
        <li
          key={`${userName}-${userIndex}`}
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3"
        >
          <span
            className="text-sm font-medium"
            style={{ color: COLOR.BLACK }}
          >
            {userName}
          </span>
          <Button
            type={BUTTON_TYPES.BUTTON}
            variant={BUTTON.DANGER}
            onClick={() => onRemoveUser(userIndex)}
            className="px-4 py-2"
          >
            {removeButtonLabel}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default UserListItems;