export interface UserListItemsProps {
  onRemoveUser: (userIndex: number) => void;
  removeButtonLabel: string;
  userList: string[];
}