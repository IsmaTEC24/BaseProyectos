"use client";

import { ReactElement } from "react";
import {
  Button,
  FormField,
  Section,
  Text,
  Title,
  UnorderedList,
} from "@/app/components";
import {
  BUTTON,
  BUTTON_TYPES,
  DATA_ENTRY_FEATURE,
  STRING,
  TitleVariant,
} from "@/app/constants";
import useDataEntryFeatureViewModel from "./hooks/useDataEntryFeatureViewModel";

const DataEntryFeature = (): ReactElement => {
  const {
    handleAddItem,
    handleDeleteItem,
    handleInputChange,
    inputValue,
    isAddButtonDisabled,
    itemList,
  } = useDataEntryFeatureViewModel();

  const listItems = itemList.map((item) => ({
    id: item.id,
    text: (
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 px-4 py-3">
        <Text className="text-slate-800">{item.value}</Text>
        <Button
          className="w-full md:w-auto"
          onClick={() => handleDeleteItem(item.id)}
          type={BUTTON_TYPES.BUTTON}
          variant={BUTTON.DANGER}
        >
          {DATA_ENTRY_FEATURE.REMOVE_BUTTON_TEXT}
        </Button>
      </div>
    ),
  }));

  return (
    <Section
      ariaLabel={DATA_ENTRY_FEATURE.SECTION_TITLE_ID}
      className="min-h-screen bg-slate-100 px-4 py-12"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm">
        <Title
          className="text-3xl font-semibold text-slate-900"
          id={DATA_ENTRY_FEATURE.SECTION_TITLE_ID}
          text={DATA_ENTRY_FEATURE.TITLE_TEXT}
          variant={TitleVariant.PRIMARY}
        />

        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="w-full">
            <FormField
              id={DATA_ENTRY_FEATURE.INPUT_ID}
              label={DATA_ENTRY_FEATURE.INPUT_LABEL}
              labelSuffix={STRING.Empty}
              name={DATA_ENTRY_FEATURE.INPUT_NAME}
              onChange={handleInputChange}
              placeholder={DATA_ENTRY_FEATURE.INPUT_PLACEHOLDER}
              value={inputValue}
            />
          </div>

          <Button
            className="w-full md:w-auto"
            disabled={isAddButtonDisabled}
            onClick={handleAddItem}
            type={BUTTON_TYPES.BUTTON}
            variant={BUTTON.PRIMARY}
          >
            {DATA_ENTRY_FEATURE.ADD_BUTTON_TEXT}
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <Text className="text-lg font-semibold text-slate-900">
            {DATA_ENTRY_FEATURE.LIST_TITLE_TEXT}
          </Text>

          {itemList.length > 0 ? (
            <UnorderedList
              className="space-y-3"
              items={listItems}
            />
          ) : (
            <Text className="text-slate-500">
              {DATA_ENTRY_FEATURE.EMPTY_STATE_TEXT}
            </Text>
          )}
        </div>
      </div>
    </Section>
  );
};

export default DataEntryFeature;