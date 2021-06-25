// import {AsyncStorage} from 'react-native';

// export const CONSTANT_KEYS = {
//   USER_ID: 'userID',
//   SAVED_ITEMS: 'savedItems',
// };

// export async function IsUserLoggedIn() {
//   let userId = await GetLoggedInUserId();
//   return userId !== null;
// }

// export async function Logout() {
//   await AsyncStorage.removeItem(CONSTANT_KEYS.USER_ID);
// }

export function NavigateTo(navigation, to, params) {
  navigation.push(to, params);
}

// export async function GetLoggedInUserId() {
//   let userId = await AsyncStorage.getItem(CONSTANT_KEYS.USER_ID);
//   return userId;
// }

// export async function GetSavedItems() {
//   let items = await AsyncStorage.getItem(CONSTANT_KEYS.SAVED_ITEMS);
//   return items === null ? null : JSON.parse(items);
// }

// export async function SetSavedItems(items) {
//   await AsyncStorage.setItem(CONSTANT_KEYS.SAVED_ITEMS, JSON.stringify(items));
// }
