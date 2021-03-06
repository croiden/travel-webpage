// @flow
import {
  HOME,
  BRIEFCASE,
  COMPASS,
  BELL,
  GEAR,
  LOGOUT,
  GRIDVIEW,
  LISTVIEW,
} from "../constants";

export type ViewType = typeof GRIDVIEW | typeof LISTVIEW;

export type NavButtons = Array<
  | typeof HOME
  | typeof BRIEFCASE
  | typeof COMPASS
  | typeof BELL
  | typeof GEAR
  | typeof LOGOUT
>;
