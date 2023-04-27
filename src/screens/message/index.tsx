import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Wrapper from "../../shared/components/wrapper";
import images from "../../assets/images/images";
import Input from "../../shared/components/input";
import {RF} from "../../shared/theme/responsive";
import colors from "../../assets/colors/colors";
import MessageItem from "../../shared/components/messageItem";
import PopUp from "../../shared/components/popUp";
import {navigate} from "../../shared/services/NavService";
import {Routes} from "../../shared/utils/routes";


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      modalVisible:false,
      threads:[0,1,2,3,4,5]
    }
  }

  // const [search, setSearch] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);
  // const inputRef = useRef();
  // const [threads, setThreads] = useState([0,1,2,3,4,5]);



   renderMessages = () => {
    return this.state.threads.map((item: any) => {
      return (
        <MessageItem
          onPress={() => {}}
          name={"New customer inquiry"}
          message={"I'll now send your inquiry to SN"}
          description={"Landscaping who will aim to re-"}
          image={{uri:"https://random.imagecdn.app/500/150"}}
          time={"22:22"}
          unread={false}
          onDotPress={()=>{this.setState({modalVisible:true})}}
        />
      );
    });
  };

  render() {
    return (
        <Wrapper noPaddingBottom>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTextStyle}>{'Messages'}</Text>
              {/*<TouchableOpacity*/}
              {/*  onPress={() => {*/}

              {/*  }}>*/}
              {/*  <Image*/}
              {/*    source={images.notification}*/}
              {/*    style={styles.headerIconStyle}*/}
              {/*  />*/}
              {/*</TouchableOpacity>*/}
            </View>
            <View style={styles.contentContainer}>
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                  <Input
                      ref={(ref)=> this.inputRef = ref}
                      marginRight={RF(10)}
                      containerStyle={{
                        backgroundColor: colors.LIGHTEST_GRAY,
                        borderWidth: 0,
                      }}
                      leftIcon={images.search}
                      placeholder={'Search'}
                      onChangeText={(value: any) => this.setState({search:value})}
                      onSubmitEditing={() => {
                      }}
                      value={this.state.search}
                  />
                </View>
                {this.renderMessages()}
              </KeyboardAwareScrollView>
            </View>
            {this.state.modalVisible && (
                <PopUp
                    title={'Oh no, Sorry It didn’t work out'}
                    description={
                      'It seems this exchange didn’t work for you, don’t worry you can retry anytime.'
                    }
                    image={images.avatar}
                    buttonText={'Search Again'}
                    modalVisible={this.state.modalVisible}
                    onPressClose={() => {
                      this.setState({modalVisible:false})
                    }}
                />)
            }
          </View>
        </Wrapper>
    );
  }
};

export default Message;
