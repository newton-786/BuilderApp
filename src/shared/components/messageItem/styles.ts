import {StyleSheet} from 'react-native';
import {RF, wp} from '../../theme/responsive';
import colors from '../../../assets/colors/colors';


const styles = StyleSheet.create({
  profileContainer: {
    height: RF(60),
    flexDirection: 'row',
    // marginVertical: RF(5),
    // borderWidth:1,
    borderBottomWidth:RF(1),
    borderBottomColor:colors.LIGHT_GRAY
  },
  profileStyles: {
    height: RF(37),
    width: RF(37),
    resizeMode: 'cover',
    borderRadius: RF(18.5),
  },
  profileIconContainer: {
    flex: 0.20,
    flexDirection:'row',
    // borderWidth:1,
    // paddingTop:RF(5),
    justifyContent: 'center',
    alignItems:'center',
  },
  profileDetailsContainer: {
    paddingTop:RF(3),
    flex: 0.57,
    // paddingLeft: RF(2),
    // paddingTop:RF(10),

    justifyContent: 'center',
  },
  timeContainer: {
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight:RF(10),
  },
  onlineIcon: {
    height: RF(10),
    width: RF(10),
    borderRadius: RF(5),
    marginRight: RF(5),
    backgroundColor: colors.BUTTON_COLOR,
  },
});

export default styles;
