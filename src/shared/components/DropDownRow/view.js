import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';
import {color} from "react-native-elements/dist/helpers";
import colors from "../../../assets/colors/colors";
import {RF} from "../../theme/responsive";
import {FONTS} from "../../../assets/fonts";
import {ViewPropTypes} from 'deprecated-react-native-prop-types';



// const PropTypes = require('prop-types');


const DropDownRow = (props) => {
    return (
        <View style={props.ContainerStyles} >
            <Text style={props.highlighted?props.highlightedTextStyle:props.textStyle}>{props.text}</Text>
        </View>
    )
};

// DropDownRow.propTypes = {
//     ContainerStyles:ViewPropTypes.style,
//     textStyle:Text.propTypes.style,
//     text:PropTypes.string,
//     highlighted:PropTypes.bool,
//     highlightedTextStyle: Text.propTypes.style,
//
// };

DropDownRow.defaultProps = {
    headerWithBack:   false,
    showLeftComponent:true,
    ContainerStyles:{
        borderBottomWidth:RF(1),
        borderBottomColor:colors.GRAY_SCALE,
        height:RF(40),
        width:"100%",
        paddingLeft:RF(10),
        justifyContent:"center"
    },
    textStyle:{
        padding:RF(5),
        color:colors.DROP_DOWN_TEXT_COLOR,
        fontSize:RF(12),
        fontFamily: FONTS.MilliardMedium

    },
    highlightedTextStyle:{
        color:colors.BLACK,
        padding:RF(5),
        fontSize:RF(14),
        fontFamily: FONTS.MilliardMedium

    }


};

export default DropDownRow;
