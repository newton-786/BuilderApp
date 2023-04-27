import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from "../../../assets/colors/colors";
import {RF} from "../../theme/responsive";
import {GST} from "../../theme/globalStyles";
import images from "../../../assets/images/images";
import {FONTS} from "../../../assets/fonts";

class NotificationItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.leftContainer}>
                        <View style={[styles.imageContainer, {backgroundColor: this.props?.leftIconBgColor}]}>
                            {
                                this.props?.avatar &&
                                <View style={styles.bag}></View>
                            }
                            {this.props?.avatar ?
                                <Image source={this.props?.avatar} style={[styles.leftImage, {
                                    height: RF(32),
                                    width: RF(32),
                                    borderRadius: RF(16)
                                }]}/> :
                                <Image source={this.props?.iconLeft} style={[styles.leftImage, {tintColor: colors.WHITE}]}/>
                            }
                        </View>
                        <View style={[styles.imageContainer, {marginLeft: RF(10)}]}>
                            <Image source={images.user}
                                   style={[styles.leftImage, {tintColor: colors.USER_ICON_COLOR}]}/>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        {/*<Image source={images.edit} style={styles.rightImage}/>*/}
                        <Text style={[styles.leftText, {fontSize: RF(12), fontWeight: "600"}]}>{"22/09/2022"}</Text>
                        <Text style={[styles.leftText, {fontSize: RF(13), marginTop: RF(6)}]}>{"Now"}</Text>
                    </View>
                </View>
                <View style={[styles.bottomView]}>
                    {
                        this.props?.image &&
                        <Image source={this.props?.image} style={[styles.leftImage, {
                            width: "100%",
                            height: RF(200),
                            resizeMode: "cover",
                            marginBottom: RF(20)
                        }]}/>
                    }
                    <Text style={styles.topText}>{this.props?.title}</Text>
                    {
                        this.props?.date &&
                        <Text style={styles.textStyles}>{`Date: ${this.props?.date}`}</Text>
                    }
                    {
                        this.props?.time &&
                        <Text style={styles.textStyles}>{`Time: ${this.props?.time}`}</Text>
                    }
                    {
                        this.props?.description &&
                        <Text style={[styles.textStyles,{lineHeight:RF(13),fontSize: RF(12.5),color: colors.HEADING_COLOR}]}>{this.props?.description}</Text>
                    }
                    {
                        this.props?.contact &&
                        <Text style={styles.textStyles}>{`Contact: ${this.props?.contact}`}</Text>
                    }
                    {
                        this.props?.role &&
                        <Text style={styles.textStyles}>{`Role: ${this.props?.role}`}</Text>
                    }
                </View>

                <View style={styles.bottomRow}>
                    <View style={[styles.leftContainer, {flex: 0.7}]}>

                        {
                            this.props?.attachement &&
                            <>
                                <Image source={images.attachment} style={[styles.leftImage, {
                                    height: RF(12), width: RF(12), transform: [{rotate: '45deg'}]
                                }]}/>

                                <Text style={[styles.leftText, {
                                    fontSize: RF(10),
                                    fontWeight: "normal",
                                    textDecorationLine: 'underline',
                                    color: colors.BUTTON_COLOR
                                }]}>{"File name of attachment her ..."}</Text>
                            </>
                        }

                    </View>
                    <View style={[styles.rightContainer, {flex: 0.3}]}>
                        <Text style={[styles.leftText, {
                            fontSize: RF(12),
                            textDecorationLine: 'underline',
                            color: colors.BUTTON_COLOR
                        }]}>{"View"}</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // minHeight:RF(200),
        flexShrink:1,
        borderBottomWidth:RF(1),
        borderBottomColor:colors.LIGHT_GRAY,
        paddingTop:RF(20),
        paddingBottom:RF(10),

    },
    topRow:{
        flex:0.2,
        flexDirection:'row',
        // height:RF(30),
        // borderWidth:1,
        paddingHorizontal:RF(25),
    },
    bottomRow:{
        flex:0.2,
        height:RF(40),
        flexDirection:'row',
        // alignItems:'flex-start',
        // borderWidth:1,
        paddingHorizontal:RF(25),
        // marginBottom:RF(10)

    },
    leftContainer:{
        flex:0.4,alignItems:'center',flexDirection:'row'
    },
    rightContainer:{
        flex:0.6,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    imageContainer:{
      height:RF(35),
      width:RF(35),
      justifyContent:"center",
      alignItems:'center',
        backgroundColor:colors.WHITE,
        borderWidth:RF(3),
        borderColor:colors.LIGHTEST_GRAY,
        borderRadius:RF(17.5)
    },
    leftImage:{
        height:RF(10),
        width:RF(10),
        // borderRadius:RF(20),
        resizeMode:'contain',
        // tintColor:colors.ORANGE
    },
    bag:{
        height:RF(11),width:RF(11),borderRadius:RF(6),backgroundColor:colors.DARK_RED,
        position:"absolute",
        top:RF(-4),
        right:RF(-2),
        zIndex:999
    },
    leftText:{
        fontFamily:FONTS.Milliard,fontSize:RF(13),marginLeft:RF(10),
        color:colors.HEADING_COLOR
    },
    rightImage:{
        height:RF(12),width:RF(12),resizeMode:'contain'
    },
    bottomView:{
        flex:0.6,
        paddingTop:RF(10),
        paddingHorizontal:RF(25),
        // borderWidth:1,

    },
    topText:{
        fontFamily:FONTS.Milliard,fontSize:RF(13),marginBottom:RF(10),
        color:colors.HEADING_COLOR
    },
    textStyles:{
        fontFamily:FONTS.MilliardMedium,fontSize:RF(11),marginVertical:RF(4),color:colors.GRAY_SCALE
    }



});

export default NotificationItem;
