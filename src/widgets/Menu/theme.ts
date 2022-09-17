import { darkColors, lightColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
 // background: lightColors.backgroundAlt,
 background: lightColors.violet,
};

export const dark: NavThemeType = {
//  background: darkColors.backgroundAlt,
background: darkColors.violet,
};
