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
        paddingRight:RF(20),
        alignItems:'center',
        borderBottomWidth:RF(1),
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:colors.LIGHT_GRAY
    },
    contentContainer: {
        flex: 0.91,
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
    allView:{
        height:RF(30),
        width:RF(35),
        borderRadius:RF(5),
        backgroundColor:"#d3e4ff",
        justifyContent:'center',
        alignItems:'center',


    }

});

export default styles;
