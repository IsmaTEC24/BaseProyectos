"use client";

import { ReactElement } from "react";
import Button from "@/app/components/button/Button";
import FormField from "@/app/components/form-field/FormField";
import Text from "@/app/components/text/Text";
import Title from "@/app/components/title/Title";
import {
  BUTTON,
  BUTTON_TYPES,
  COLOR,
  FIELD_STYLES,
  INPUT_TYPES,
  STRING,
  TitleVariant,
  USER_LISTS,
} from "@/app/constants";
import UserListItems from "./components/UserListItems";
import useUserListsViewModel from "./hooks/useUserListsViewModel";

const UserLists = (): ReactElement => {
  const {
    canAddUser,
    currentUserName,
    handleAddUser,
    handleInputChange,
    handleRemoveUser,
    userList,
  } = useUserListsViewModel();

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="space-y-6">
        <Title
          variant={TitleVariant.SECONDARY}
          text={USER_LISTS.TITLE}
          className="text-2xl font-bold text-dark-blue"
          style={{ color: COLOR.DARK_GREEN }}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="w-full">
            <FormField
              id={USER_LISTS.INPUT_ID}
              name={USER_LISTS.INPUT_NAME}
              label={USER_LISTS.INPUT_LABEL}
              value={currentUserName}
              onChange={handleInputChange}
              type={INPUT_TYPES.TEXT}
              placeholder={USER_LISTS.INPUT_PLACEHOLDER}
              classNameField={FIELD_STYLES.roundedField}
              labelSuffix={STRING.Empty}
            />
          </div>

          <Button
            type={BUTTON_TYPES.BUTTON}
            variant={BUTTON.PRIMARY}
            disabled={!canAddUser}
            onClick={handleAddUser}
            className="px-6 py-3"
          >
            {USER_LISTS.ADD_BUTTON_LABEL}
          </Button>
        </div>

        {userList.length > 0 ? (
          <UserListItems
            userList={userList}
            onRemoveUser={handleRemoveUser}
            removeButtonLabel={
              USER_LISTS.REMOVE_BUTTON_LABEL
            }
          />
        ) : (
          <Text
            className="rounded-xl border border-dashed border-gray-300 bg-white px-4 py-3 text-sm"
            style={{ color: COLOR.BLACK }}
          >
            {USER_LISTS.EMPTY_LIST_MESSAGE}
          </Text>
        )}
      </div>
    </section>
  );
};

export default UserLists;