//how to use
//font: ${({ theme }) => theme.font.display1};
// color: ${({ theme }) => theme.color.primary};

const color = {
  primary: '#FDCB02',
  primary_light: '#FFE371',
  primary_lighter: '#FFEEBA',
  primary_dark: '#E7BB0B',
  primary_darker: '#D19701',
  white: '#FFFFFF',
  lightgray1: '#F8F6F6',
  lightgray2: '#DFDFDF',
  gray1: '#C1C1C1',
  gray2: '#A5A5A5',
  gray3: '#6F6F6F',
  darkgray1: '#3D3D3D',
  darkgray2: '#1A1A1A',
  black: '#000000',
  bg_yellow: '#FFFCF1',
  bg_gray: '#F8F8F8',
  bg_sky: '#F0F8FE',
};

const font = {
  display1: "normal 700 36px/49px 'Noto Sans kr'",
  headline: "normal 500 24px/35px 'Noto Sans kr'",
  title: "normal 700 22px/30px 'Noto Sans kr'",
  subheading: "normal 500 18px/26px 'Noto Sans kr'",
  body2: "normal 400 16px/23px 'Noto Sans kr'",
  body1: "normal 400 14px/20px 'Noto Sans kr'",
  caption: "normal 400 12px/17px 'Noto Sans kr'",
  button: "normal 500 18px/22px 'Spoqa Han Sans Neo'",
};

const theme = {
  color,
  font,
};

export default theme;
