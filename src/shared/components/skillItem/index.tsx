import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from "../../../assets/colors/colors";
import {RF} from "../../theme/responsive";
import {GST} from "../../theme/globalStyles";
import images from "../../../assets/images/images";
import {FONTS} from "../../../assets/fonts";

class SkillItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.leftContainer}>
                        <Image source={images.chat} style={styles.leftImage}/>
                        <Text style={styles.leftText}>{"Health"}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Image source={images.edit} style={styles.rightImage}/>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.topText}>{"Herbs, Diet and Detox"}</Text>
                    <Text style={styles.textStyles}>{"Years Experience: 20"}</Text>
                    <Text style={styles.textStyles}>{"Role: Hobby"}</Text>
                    <Text style={styles.textStyles}>{"Skill level: 8/10"}</Text>
                    <Text
                        style={[styles.textStyles,{lineHeight:RF(14)}]}>{"Keywords: It is a long established fact that a reader will be distracted by the readable content"}</Text>
                    <Text style={styles.textStyles}>{"Contact method: Email & Chat only"}</Text>
                    <Text style={styles.textStyles}>{"Availability: Contacts & Friends of Contacts"}</Text>

                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // minHeight:RF(220),
        flexShrink:1,
        paddingHorizontal:RF(25),
        borderBottomWidth:RF(1),
        borderBottomColor:colors.LIGHT_GRAY,
        paddingVertical:RF(10)
    },
    topRow:{
        flex:0.2,flexDirection:'row'
    },
    leftContainer:{
        flex:0.4,alignItems:'center',flexDirection:'row'
    },
    rightContainer:{
        flex:0.6,justifyContent:'center',alignItems:'flex-end'
    },
    leftImage:{
        height:RF(30),width:RF(25),borderRadius:RF(20),resizeMode:'contain',tintColor:colors.ORANGE
    },
    leftText:{
        fontFamily:FONTS.Milliard,fontSize:RF(13),marginLeft:RF(10),color:colors.HEADING_COLOR2
    },
    rightImage:{
        height:RF(12),width:RF(12),resizeMode:'contain'
    },
    bottomView:{
        flex:0.8,paddingVertical:RF(10)
    },
    topText:{
        fontFamily:FONTS.Milliard,fontSize:RF(13),marginBottom:RF(10),color:colors.HEADING_COLOR2
    },
    textStyles:{
        fontFamily:FONTS.MilliardMedium,fontSize:RF(11),marginVertical:RF(4),color:colors.GRAY_SCALE,

    }



});

export default SkillItem;
