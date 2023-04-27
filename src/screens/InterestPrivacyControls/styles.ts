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
        paddingLeft:RF(10),
        alignItems:'center',
        flexDirection:'row',
        // borderBottomWidth:RF(1),
        borderBottomColor:colors.LIGHT_GRAY
    },
    contentContainer: {
        flex: 0.71,
        paddingHorizontal:RF(15)
    },
    dropDownContainer:{
        // height:RF(40),
        // borderWidth:1,
        width:'90%',
        // justifyContent:'center',
        // alignItems:"center",
        // paddingHorizontal:"3%"
    },
    buttonContainer:{
      flex:0.2,
        justifyContent:"center",
        alignItems:'center',
    },
    leftImage:{
        height:RF(12),
        width:RF(12),
        resizeMode:'contain',
    },
    chatIconStyles:{
        height:RF(25),
        width:RF(25),
        resizeMode:'contain',
    },
    arrowStyles:{
        height:RF(14),
        width:RF(14),
        resizeMode:'contain',
        marginRight:RF(2)
    },
    heading: {
        fontSize: RF(14),
        color: colors.BLACK,
        fontFamily:FONTS.Milliard,
    },
    textStyles: {
        fontSize: RF(10),
        color: colors.HEADING_COLOR,
        fontFamily:FONTS.Milliard,
    },
    sliderTopView:{
        height:RF(20),
        width:RF(20),
        justifyContent:"flex-end",
        alignItems:"flex-start",
        position:'absolute',
        bottom:RF(-11),
        left:RF(0)
    },
    leftText:{
        position:'absolute',
        bottom:RF(10),
        left:RF(0),
        zIndex:9999
    },
    rightText:{
        position:'absolute',
        bottom:RF(10),
        right:RF(0),
        zIndex:9999
    }

});

export default styles;
