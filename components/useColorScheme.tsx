import { useColorScheme as useNativeColorScheme } from 'react-native';

export function useColorScheme() {
  const colorScheme = useNativeColorScheme();
  
  return {
    colorScheme: colorScheme ?? 'light',
    isDark: colorScheme === 'dark',
    isLight: colorScheme === 'light' || colorScheme === null,
  };
}
