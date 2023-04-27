import React, {useRef} from 'react';
import {useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';


import {Text, View, TouchableOpacity, Platform, Image, FlatList} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import Wrapper from '../../shared/components/wrapper';
import {RF} from '../../shared/theme/responsive';
import Button from '../../shared/components/button/button';
import images from '../../assets/images/images';
import Input from '../../shared/components/input';
import {LoginSchema} from '../../shared/utils/validations';
import Loader from '../../shared/components/loader';
import Header from '../../shared/components/header/header';
import {ScreenTitle} from '../../shared/utils/ScreenTitle';
import {navigate} from '../../shared/services/NavService';
import {Routes} from '../../shared/utils/routes';
import colors from "../../assets/colors/colors";
import RowItem from "../../shared/components/rowItem";
import {FONTS} from "../../assets/fonts";
import SkillItem from "../../shared/components/skillItem";
import NotificationItem from "../../shared/components/notificationItem";



class Notifications extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {
            data:[
                {
                    id:0,
                    iconleft:images.user,
                    leftIconBgColor:colors.RED,
                    iconRight:images.user,
                    title:"Proposal - Garden Clearance & New Drive",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                    // image:images.smallCardImage,
                    attachement:false,
                },
                {
                    id:1,
                    iconleft:images.user,
                    leftIconBgColor:colors.GREEN,
                    iconRight:images.user,
                    title:"Appointment - Garden & New Drive",
                    // description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                    // image:images.smallCardImage,
                    attachement:true,
                    date:"22/09/2022",
                    time:"23:00 PM",
                    contact:"Jamie White",
                    role:"Volunteer"
                },
                {
                    id:2,
                    iconleft:images.user,
                    leftIconBgColor:colors.ORANGE,
                    iconRight:images.user,
                    title:"Proposal - Garden Clearance & New Drive",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                    image:images.smallCardImage,
                    avatar:images.smallCardImage,
                    attachement:false,
                },
                {
                    id:3,
                    iconleft:images.user,
                    leftIconBgColor:colors.ORANGE,
                    iconRight:images.user,
                    title:"Project - Garden Clearance & New Drive",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
                    // image:images.smallCardImage,
                    attachement:false,
                }
            ]
        }
    }



     renderItem = (item:any) => {
      return(
          <NotificationItem
            iconLeft={item?.iconleft}
            leftIconBgColor={item?.leftIconBgColor}
            iconRight={item?.iconRight}
            title={item?.title}
            description={item?.description}
            image={item?.image}
            date={item?.date}
            time={item?.time}
            contact={item?.contact}
            role={item?.role}
            avatar={item?.avatar}
            attachement={item?.attachement}
          />
      )
    }
    render() {

        return (
            <Wrapper noPaddingBottom backgroundColor={colors.WHITE}>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <Text style={styles.textStyles}>
                            {'Notifications'.toUpperCase()}
                        </Text>
                        <View style={styles.allView}>
                            <Text style={[styles.textStyles, {fontSize: RF(12), color: colors.BUTTON_COLOR}]}>
                                {'All'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <FlatList data={this.state.data} renderItem={({item}) => this.renderItem(item)}/>
                    </View>
                </View>
            </Wrapper>
        );
    }
};

export default Notifications;
