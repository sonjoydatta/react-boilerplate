import 'styled-components';

type ColorGray = 100 | 200 | 300 | 400;
type Colors = {
  primary: string;
  white: string;
  gray: Record<ColorGray, string>;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
  }
}
