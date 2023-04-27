import {StyleSheet} from 'react-native';
import {RF} from "../../shared/theme/responsive";
import colors from "../../assets/colors/colors";
import {FONTS} from "../../assets/fonts";
import {GST} from "../../shared/theme/globalStyles";
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:colors.WHITE
    },
    header: {
        flex: 0.09,
        // ...GST.SHADOW,
        backgroundColor:colors.WHITE,
        paddingLeft:RF(30),
        justifyContent:'center',
        borderBottomWidth:RF(1),
        borderBottomColor:colors.LIGHT_GRAY
    },
    contentContainer: {
        paddingTop:RF(10),
        flex: 0.71,
    },
    buttonContainer:{
      flex:0.2,
        justifyContent:"center",
        alignItems:'center',
    },
    textStyles: {
        fontSize: RF(16),
        color: colors.TEXT_COLOR,
        fontFamily:FONTS.Milliard,
        // marginBottom:RF(15),
    },

});

export default styles;
