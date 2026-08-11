export const USER_LISTS = {
  ADD_BUTTON_LABEL: "Agregar usuario",
  EMPTY_LIST_MESSAGE: "Aun no hay usuarios en la lista.",
  INPUT_ID: "user_name",
  INPUT_LABEL: "Nombre de usuario",
  INPUT_NAME: "user_name",
  INPUT_PLACEHOLDER: "Escribe un nombre de usuario",
  REMOVE_BUTTON_LABEL: "Eliminar",
  TITLE: "Lista de usuarios",
} as const;

export type UserLists =
  (typeof USER_LISTS)[keyof typeof USER_LISTS];