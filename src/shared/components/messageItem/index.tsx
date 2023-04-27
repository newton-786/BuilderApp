import React from 'react';
import { Text,TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';
import {RF} from "../../theme/responsive";
import {FONTS} from "../../../assets/fonts";
import colors from "../../../assets/colors/colors";
import FastImage from 'react-native-fast-image';
import images from "../../../assets/images/images";
class MessageItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.props?.onPress}
                style={styles.profileContainer}>
                <View style={styles.profileIconContainer}>
                    {/*<View style={styles.onlineIcon}></View>*/}
                    <FastImage source={this.props?.image} style={styles.profileStyles}/>
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={[styles.contentTitle, {
                        fontSize: RF(15),
                        fontFamily: FONTS.MilliardMedium,
                        color: colors.BLACK,
                    }]}>{this.props?.name}</Text>
                    {/*<Text style={[styles.contentTitle,{fontSize: RF(12),fontFamily: FONTS.ProximaNova,color: props?.unread ? colors.BLACK : colors.GRAY,marginBottom:RF(3)}]}>{props?.message}</Text>*/}
                    <Text style={[styles.contentTitle, {
                        fontsSize: RF(12),
                        fontFamily: FONTS.ProximaNova,
                        color: colors.BUTTON_COLOR,
                        // marginBottom: RF(3)
                    }]}>{this.props?.description}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <View style={{
                        flexDirection: "row",
                        height: '100%',
                        // paddingBottom: RF(5),
                        justifyContent: 'center',
                        alignItems:'center',
                        // paddingTop: RF(10)
                    }}>
                        {/*<View style={{justifyContent: 'space-between', height: '100%'}}>*/}
                        {/*    /!*<Text style={[styles.contentTitle,{fontSize: RF(12),fontFamily: FONTS.ProximaNova,color: colors.HEADING_COLOR}]}>{props?.time}</Text>*!/*/}
                        {/*    /!*<Image source={images.moreOptions} style={{height:RF(15),width:RF(15),resizeMode:'contain',tintColor:colors.HEADING_COLOR,marginLeft:RF(15)}}/>*!/*/}
                        {/*</View>*/}
                        <TouchableOpacity onPress={this.props?.onDotPress}>
                            <Image source={images.three_menu} style={{
                                height: RF(15),
                                width: RF(15),
                                resizeMode: 'contain',
                                tintColor: colors.HEADING_COLOR,
                                marginLeft: RF(10)
                            }}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

export default MessageItem;

