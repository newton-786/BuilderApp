import React, {useRef} from 'react';
import {useState} from 'react';
import styles from './styles';
import {Text, View, TouchableOpacity, Platform, Image, FlatList, ScrollView, TextInput} from 'react-native';
import Wrapper from '../../shared/components/wrapper';
import {RF} from '../../shared/theme/responsive';
import Button from '../../shared/components/button/button';
import images from '../../assets/images/images';

import colors from "../../assets/colors/colors";

class Rating extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Wrapper noPaddingBottom backgroundColor={colors.WHITE}>
                {/*<Loader isLoading={loading} />*/}
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <Image source={images.three_dots} style={[styles.leftImage]}/>
                        {/*<Text style={[styles.heading,{marginLeft:RF(20),color: colors.HEADING_COLOR}]}>*/}
                        {/*    {'INTEREST PRIVACY CONTROLS'}*/}
                        {/*</Text>*/}
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{height: RF(100), width: '100%', alignItems: 'center', paddingTop: RF(10)}}>
                            <Image source={images.chat} style={{
                                height: RF(40),
                                width: RF(40),
                                tintColor: colors.BUTTON_COLOR,
                                resizeMode: 'contain'
                            }}/>
                        </View>
                        <Image source={images.smallCardImage} style={[styles.leftImage, {
                            width: "100%",
                            height: RF(250),
                            resizeMode: "cover",
                            marginBottom: RF(20)
                        }]}/>
                        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={images.start_rating}
                                   style={[styles.leftImage, {width: RF(150), height: RF(50), resizeMode: "contain"}]}/>
                        </View>
                        <View style={{width: '100%', justifyContent: 'center', paddingHorizontal: RF(50)}}>
                            <Text style={[styles.heading, {color: colors.HEADING_COLOR}]}>
                                {'Are you ready to shoutout some good news to the world how to get he jobs done right, on time, on budget!'}
                            </Text>
                        </View>

                        <View
                            style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: RF(20)}}>
                            <TouchableOpacity style={{
                                height: RF(42),
                                width: '85%', borderWidth: RF(1),
                                borderColor: colors.BUTTON_COLOR,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: RF(5),
                                marginBottom: RF(10)
                            }}>
                                <Text style={[styles.heading, {color: colors.BUTTON_COLOR, fontSize: RF(14)}]}>
                                    {'Provide constructive feedback'}
                                </Text>
                            </TouchableOpacity>
                            <Button width={"85%"}
                                    borderRadius={RF(5)}
                                    height={RF(42)}
                                    title={"Share the good news"}
                            />
                        </View>

                    </View>
                    {/*<View style={styles.buttonContainer}>*/}

                    {/*</View>*/}
                </View>
            </Wrapper>
        );
    }
};

export default Rating;
