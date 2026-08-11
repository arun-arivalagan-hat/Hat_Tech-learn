export const Fonts = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semiBold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extraBold: 'PlusJakartaSans_800ExtraBold',
} as const;

export type FontWeightKey = '400' | '500' | '600' | '700' | '800' | 'bold' | 'normal';

export const getFontFamily = (weight?: string | number) => {
  switch (weight) {
    case '700':
    case 'bold':
      return Fonts.bold;
    case '800':
      return Fonts.extraBold;
    case '600':
      return Fonts.semiBold;
    case '500':
      return Fonts.medium;
    case '400':
    case 'normal':
    default:
      return Fonts.regular;
  }
};
