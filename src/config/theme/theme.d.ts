import 'styled-components';

type ColorGray = {
  100: string;
  200: string;
  300: string;
  400: string;
};

type Colors = {
  white: string;
  gray: ColorGray;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
  }
}
