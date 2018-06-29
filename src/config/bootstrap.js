import { StatusBar, StyleSheet } from 'react-native';
import { RkTheme } from 'react-native-ui-kitten';

import { YamagataTheme } from './theme';
import { scale, scaleModerate, scaleVertical } from '../utils/scale';

export const bootstrap = () => {
  RkTheme.setTheme(YamagataTheme, null);

  /*
   RKText types
   */

  RkTheme.setType('RkText', 'basic', {
    fontFamily: theme => theme.fonts.family.medium,
    backgroundColor: 'transparent'
  });

  RkTheme.setType('RkText', 'regular', {
    fontFamily: theme => theme.fonts.family.regular
  });

  RkTheme.setType('RkText', 'medium', {
    fontFamily: theme => theme.fonts.family.medium
  });
};
