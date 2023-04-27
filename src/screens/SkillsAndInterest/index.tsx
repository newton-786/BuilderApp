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



 class SkillsAndInterest extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = {
            data:[1,2,3,4]
        }
    }

     renderItem = (item:any) => {
      return(
          <SkillItem/>
      )
    }
    render() {
        return (
            <Wrapper noPaddingBottom backgroundColor={colors.WHITE}>
                {/*<Loader isLoading={loading} />*/}
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <Text style={styles.textStyles}>
                            {'SKILLS & INTEREST'}
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <FlatList data={this.state.data} renderItem={({item}) => this.renderItem(item)}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button width={"85%"}
                                title={"ADD MORE SKILLS & INTEREST"}
                        />
                        <Image source={images.secure}
                               style={{height: RF(10), width: RF(10), resizeMode: 'contain', marginTop: RF(10)}}/>
                        <Text style={[styles.textStyles, {fontSize: RF(9), fontWeight: "700", marginTop: RF(10),color:colors.HEADING_COLOR2}]}>
                            {'Fully Encrypted and Secure'}
                        </Text>
                    </View>
                </View>
            </Wrapper>
        );
    }
};

export default SkillsAndInterest;
