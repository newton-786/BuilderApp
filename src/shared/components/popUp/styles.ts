import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {FONTS} from '../../../assets/fonts';
import {RF} from '../../theme/responsive';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cancelRowContainer: {
    flex: 0.3,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  cancelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: RF(10),
  },
  cancelIconContainer: {
    // marginTop: RF(10),
  },
  cancelIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  imageRowContainer: {
    flex: 0.4,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: RF(150),
    height: RF(150),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.3,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: RF(17),
    color: colors.BLACK,
    fontFamily: FONTS.Milliard,
    marginVertical: RF(10),
    marginHorizontal: RF(20),
  },
  descriptionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RF(28),
  },
  descriptionText: {
    fontSize: RF(12),
    color: colors.GRAY_SCALE,
    textAlign: 'center',
    fontFamily: FONTS.ProximaNova,
  },
  buttonContainer: {
    flex: 0.2,
    marginHorizontal: RF(20),
  },
  heading: {
    fontSize: RF(12),
    color: colors.BLACK,
    fontFamily:FONTS.MilliardMedium,
  },
});

export default styles;
