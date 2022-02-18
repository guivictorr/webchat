const theme = {
  colors: {
    primary: '#e0e0e0',
    secondary: '#828282',
    inputColor: '#3c393f',
    buttonColor: '#2f80ed',
    buttonText: '#f5f5f5',
    primaryBackground: '#252329',
    secondaryBackground: '#0b090c',
    contrastBackground: '#120f13',
  },
  borderRadius: {
    normal: '0.5rem',
    rounded: '50%',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  font: {
    light: 300,
    normal: 400,
    bold: 600,
    family: 'Noto Sans',
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
} as const;

export default theme;
