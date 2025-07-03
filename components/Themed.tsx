import {
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
} from 'react-native';

function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: 'text' | 'background'
) {
  const theme = useColorScheme() ?? 'light'; // fallback to 'light' if null or undefined

  const colorFromProps = props[theme];
  if (colorFromProps) {
    return colorFromProps;
  }

  const colors = {
    light: {
      text: '#000',
      background: '#fff',
    },
    dark: {
      text: '#fff',
      background: '#000',
    },
  };

  return colors[theme][colorName]; // ✅ safe because theme is now either 'light' or 'dark'
}

export function Text(props: {
  lightColor?: string;
  darkColor?: string;
  style?: any;
  children?: React.ReactNode;
}) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: {
  lightColor?: string;
  darkColor?: string;
  style?: any;
  children?: React.ReactNode;
}) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
