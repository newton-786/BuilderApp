import React, {useCallback, useEffect, useRef, useState} from 'react';

import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';
import styles from './styles';
import Wrapper from '../../shared/components/wrapper';
import Header from '../../shared/components/header/header';
import images from '../../assets/images/images';
import {ScreenTitle} from '../../shared/utils/ScreenTitle';
import {RF, hp} from '../../shared/theme/responsive';
import {Bubble, GiftedChat, Time} from 'react-native-gifted-chat';
import colors from '../../assets/colors/colors';
import {navigate, navigationRef} from "../../shared/services/NavService";

import Loader from "../../shared/components/loader";

import Input from "../../shared/components/input";
class Conversation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages:[],
            message:"",
            loading:false,
            userData:"",

        }
    }

  //  onSend = useCallback((messages = []) => {
  //
  // }, []);

    componentDidMount() {
        this.setState({
            messages:[
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ]
        })
    }

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])



   renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.APP_THEME,
            borderRadius: RF(30),
            paddingHorizontal: RF(5),
            paddingVertical: RF(5),
          },
          left: {
            backgroundColor: colors.LIGHTEST_GRAY,
            borderRadius: RF(30),
            paddingHorizontal: RF(5),
            paddingVertical: RF(5),
          },
        }}
        textStyle={{
          right: {
            color: colors.WHITE,
          },
          left: {
            color: colors.BLACK,
          },
        }}
      />
    );
  };



   sendMessage = async () => {

      let params = {
          _id: `${new Date().getTime()}`,
          text:this.state.message,
          type:"text",
          createdAt: new Date(),
          user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
          },
          // senderId: 2,
          // receiverId: 1,
          // conversationId: conversationId,
      }
      // this.setState()
       this.setState(prevState => ({
           messages: [...prevState.messages, params]
       }))
      // setMessages((pre: any) => [params, ...pre]);

  };
   renderSend = (props) => {

    return (
        <>
          <View
              {...props}
              style={{marginBottom: RF(10)}}>
            <TouchableOpacity
                onPress={()=>{
                    Alert.alert("ok")
                }}
            >
              <Image
                  source={images.sendIcon}
                  style={{width: RF(20), height: RF(20), marginRight: RF(15)}}
              />
            </TouchableOpacity>
          </View>
        </>
    );
  };
     renderInput = (props: any) => {

            return (
                <View style={styles.inputMainContainer}>
                    <View style={[styles.inputContainer1,{marginHorizontal:RF(10)}]}>
                        <Input
                            leftIconPath={images.camera}
                            onLeftIconPress={() => {

                            }}
                            borderWidth={-1}
                            value={this.state.message}
                            // backgroundColor={THEME.colors.inputBackground}
                            height={RF(43)}
                            width={'96%'}
                            fontSize={RF(12)}
                            placeholder={'Write message...'}
                            placeholderTextColor={colors.HEADING_COLOR}
                            borderRadius={RF(7)}
                            onChangeText={(value: any) => {
                                this.setState({message:value});
                            }}
                            rightIconPress={()=>{this.sendMessage()}}
                            rightIcon={images.sendIcon}
                            leftImageHeight={RF(14)}
                            rightIconSize={RF(17)}
                        />
                    </View>
                    {/*<View style={styles.meetButtonCotainer}>*/}
                    {/*    <TouchableOpacity*/}
                    {/*        onPress={()=>{}}*/}
                    {/*        style={styles.meetButtonInnerContainer}>*/}
                    {/*        <Image source={images.handShake} style={styles.meetButtoStyle} />*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}
                </View>
            );
    };

     render() {
         return (
             <Wrapper noPaddingBottom>
                 {/*<Loader isLoading={loading}/>*/}
                 <View style={styles.container}>
                     <View style={styles.headerContainer}>
                         <Header
                             leftIconPath={images.arrowBack}
                             title={"Alex Hales"}
                             titleLogoPath={images.userImage}
                             onLeftIconPress={() => {
                                 navigationRef.current.goBack()
                             }}
                             titleLogosize={RF(30)}
                             rightIconOnePath={images.moreOptions}
                             rightIconSize={RF(20)}
                         />
                     </View>
                     <View style={styles.contentContainer}>
                         <GiftedChat
                             value={this.state.message}
                             text={this.state.message}
                             messages={this.state.messages}
                             // onSend={messages => onSend(messages)}
                             user={{
                                 _id: 1
                             }}
                             // renderAvatar={null}
                             renderBubble={this.renderBubble}
                             renderInputToolbar={props => this.renderInput(props)}
                             renderTime={() => {
                             }}
                             placeholder={'Write a message...'}
                             renderSend={this.renderSend}
                             // onInputTextChanged = {(value)=>{setMessage(value)}}
                         />
                     </View>
                     {/*<RBSheet*/}
                     {/*  ref={sheetRef}*/}
                     {/*  // height={hp(20)}*/}
                     {/*  openDuration={250}*/}
                     {/*  customStyles={{*/}
                     {/*    container: {*/}
                     {/*      height: hp(25),*/}
                     {/*      width: '100%',*/}
                     {/*      borderTopLeftRadius: RF(15),*/}
                     {/*      borderTopRightRadius: RF(15),*/}
                     {/*      backgroundColor: 'transparent',*/}
                     {/*      // ...GST.shadowProp*/}
                     {/*    },*/}
                     {/*  }}>*/}
                     {/*  {renderContent()}*/}
                     {/*</RBSheet>*/}
                 </View>
             </Wrapper>
         );
     }
};

export default Conversation;
