import React, {useRef} from 'react';
import {useState} from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';


import {Text, View, TouchableOpacity, Platform, Image, FlatList, ScrollView, TextInput} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Formik} from 'formik';
import Wrapper from '../../shared/components/wrapper';
import {RF} from '../../shared/theme/responsive';
import Button from '../../shared/components/button/button';
import images from '../../assets/images/images';
import Loader from '../../shared/components/loader';
import colors from "../../assets/colors/colors";
import DropDownRow from "../../shared/components/DropDownRow/view";
import DropDown from "../../shared/components/DropDown";
import CheckBox from "../../shared/components/CheckBox/checkBox";
import {Slider} from '@miblanchard/react-native-slider';
import {GST} from "../../shared/theme/globalStyles";





class InterestAndPrivacyControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experience:25,
            skillLevel:5,
            category:"",
            subCategory:"",
            categories:[{
                id:0,
                name:"Category 1"
            },
                {
                    id:1,
                    name:"Category 2"
                },
                {
                    id:2,
                    name:"Category 3"
                },
                {
                    id:3,
                    name:"Category 4"
                },
                {
                    id:4,
                    name:"Category 5"
                }],
            subCategories:[{
                id:0,
                name:"SubCategory 1"
            },
                {
                    id:1,
                    name:"SubCategory 2"
                },
                {
                    id:2,
                    name:"SubCategory 3"
                },
                {
                    id:3,
                    name:"SubCategory 4"
                },
                {
                    id:4,
                    name:"SubCategory 5"
                }],
            availabilities:[
                {
                    id:0,
                    title:"Family",
                    selected:false,
                },
                {
                    id:1,
                    title:"Friends",
                    selected:false,
                },
                {
                    id:2,
                    title:"Friends of Friends",
                    selected:false,
                },
                {
                    id:3,
                    title:"Public Local (10 mile radius)",
                    selected:false,
                },
                {
                    id:4,
                    title:"Public Regional (10-50 mile radius)",
                    selected:false,
                },
                {
                    id:5,
                    title:"Public National (entire country)",
                    selected:false,
                },
            ]

        }
    }

    //
    // const [experience,setExperience] = useState(25);
    // const [skillLevel,setSkillLevel] = useState(5);
    // const [categories, setCategories] = useState([
    //     {
    //         id:0,
    //         name:"Category 1"
    //     },
    //     {
    //         id:1,
    //         name:"Category 2"
    //     },
    //     {
    //         id:2,
    //         name:"Category 3"
    //     },
    //     {
    //         id:3,
    //         name:"Category 4"
    //     },
    //     {
    //         id:4,
    //         name:"Category 5"
    //     }
    // ]);
    // const [category, setCategory] = useState("");
    //
    // const [subCategories, setSubCategories] = useState([
    //     {
    //         id:0,
    //         name:"SubCategory 1"
    //     },
    //     {
    //         id:1,
    //         name:"SubCategory 2"
    //     },
    //     {
    //         id:2,
    //         name:"SubCategory 3"
    //     },
    //     {
    //         id:3,
    //         name:"SubCategory 4"
    //     },
    //     {
    //         id:4,
    //         name:"SubCategory 5"
    //     }
    // ]);
    // const [subCategory, setSubCategory] = useState("");
    //
    // const [availabilities, setAvailailities] = useState([
    //     {
    //         id:0,
    //         title:"Family",
    //         selected:false,
    //     },
    //     {
    //         id:1,
    //         title:"Friends",
    //         selected:false,
    //     },
    //     {
    //         id:2,
    //         title:"Friends of Friends",
    //         selected:false,
    //     },
    //     {
    //         id:3,
    //         title:"Public Local (10 mile radius)",
    //         selected:false,
    //     },
    //     {
    //         id:4,
    //         title:"Public Regional (10-50 mile radius)",
    //         selected:false,
    //     },
    //     {
    //         id:5,
    //         title:"Public National (entire country)",
    //         selected:false,
    //     },
    // ]);





     onSelectCategory = (index:any,value:any) => {
        // setCategory(value?.name);
        this.setState({category:value?.name})
    }

     onSelectSubCategory = (index:any,value:any) => {
        // setSubCategory(value?.name);
         this.setState({subCategory:value?.name})

     }

     renderCategories = (rowData:any,highlighted:any) => {
        return (
            <DropDownRow
                highlighted={highlighted.name}
                text={rowData.name}
            />
        );
    };
     renderSubCategories = (rowData:any,highlighted:any) => {
        return (
            <DropDownRow
                highlighted={highlighted.name}
                text={rowData.name}
            />
        );
    };
     renderItems = (item:any) => {
      return(
          <CheckBox
              title={item?.title}
              checkBoxValue={item?.selected}
              onCheckboxValueChange={(value:any)=>{this.onPressCheckBoxItem(value,item)}}
          />
      )
    }
     onPressCheckBoxItem = (value:any,val:any) => {
        let tempIndex = this.state.availabilities.indexOf(val);
      this.setState({availabilities:this.state.availabilities?.map((item,index)=>{
          if (tempIndex === index){
              return{
                  ...item,
                  selected: value
              }
          }else {
              return {
                  ...item
              }
          }

      })})
    }
    render() {
        return (
            <Wrapper noPaddingBottom backgroundColor={colors.WHITE}>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <Image source={images.arrowBack} style={[styles.leftImage]}/>
                        <Text style={[styles.heading, {marginLeft: RF(20), color: colors.HEADING_COLOR}]}>
                            {'INTEREST PRIVACY CONTROLS'}
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <KeyboardAwareScrollView>
                            <View style={{height: RF(50), flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={images.chat}
                                       style={[styles.chatIconStyles, {tintColor: colors.SUBMIT_BUTTON_COLOR}]}/>
                                <View style={[styles.dropDownContainer, {marginLeft: RF(5)}]}>
                                    <DropDown
                                        onSelect={(index: any, value: any) => {
                                           this.onSelectCategory(index, value)
                                        }}
                                        defaultIndex={0}
                                        ref={(ref) => this.dropDownRef = ref}
                                        defaultValue={this.state.category || ""}
                                        placeHolder={"Select Interest Category"}
                                        renderButtonText={(rowDta: any) => {
                                            return (rowDta)
                                        }}
                                        options={this.state.categories || []}
                                        // options={['one',"two","three"]}
                                        renderRow={(data: any, index: any, highlighted: any) => this.renderCategories(data, highlighted)}
                                    />
                                </View>
                            </View>
                            <View style={{height: RF(50), flexDirection: 'row', alignItems: 'center', width: "100%"}}>
                                {/*<Image source={images.chat} style={styles.chatIconStyles}/>*/}
                                <View style={[styles.dropDownContainer, {width: "100%"}]}>
                                    <DropDown
                                        onSelect={(index: any, value: any) => {
                                            this.onSelectSubCategory(index, value)
                                        }}
                                        defaultIndex={0}
                                        ref={(ref) => this.dropDownRef = ref}
                                        defaultValue={this.state.subCategory || ""}
                                        placeHolder={"Select Sub-categories"}
                                        renderButtonText={(rowDta: any) => {
                                            return (rowDta)
                                        }}
                                        options={this.state.subCategories || []}
                                        // options={['one',"two","three"]}
                                        renderRow={(data: any, index: any, highlighted: any) => this.renderSubCategories(data, highlighted)}
                                    />
                                </View>
                            </View>
                            <View style={{
                                height: RF(50),
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: "98%",
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={[styles.textStyles, {fontWeight: "normal"}]}>{"Contact Preferences: (one or more) "}</Text>
                                <Image source={images.arrow_down} style={styles.arrowStyles}/>
                            </View>
                            <View style={{
                                height: RF(38),
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: "98%",
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={[styles.textStyles, {fontWeight: "normal"}]}>{"Availability: (one or more) "}</Text>
                                <Image source={images.arrow_down} style={styles.arrowStyles}/>
                            </View>
                            <View style={{
                                height: RF(180),
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: "98%",
                                // borderWidth:1,
                                justifyContent: 'space-between'
                            }}>
                                <FlatList data={this.state.availabilities} renderItem={({item}) => this.renderItems(item)}/>
                            </View>
                            <View style={{height: RF(60),marginTop:RF(10)}}>
                                <View style={{
                                    height: RF(40),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: "98%",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text
                                        style={[styles.textStyles, {fontWeight: "normal"}]}>{"Years Experience: 25"}</Text>
                                </View>
                                <View style={styles.leftText}>
                                    <Text
                                        style={[styles.textStyles, {fontWeight: "normal", fontSize: RF(12)}]}>{1}</Text>
                                </View>
                                <View style={styles.rightText}>
                                    <Text style={[styles.textStyles, {
                                        fontWeight: "normal",
                                        fontSize: RF(12)
                                    }]}>{50}</Text>
                                </View>
                                <Slider
                                    value={this.state.experience}
                                    minimumValue={1}
                                    maximumValue={50}
                                    thumbStyle={{height: RF(15), width: RF(15), backgroundColor: colors.HEADING_COLOR}}
                                    trackStyle={{height: RF(2)}}
                                    onValueChange={value => this.setState({experience:value})}
                                    renderAboveThumbComponent={(index) => {
                                        console.log("values ===>>>", index)
                                        return (
                                            <View style={styles.sliderTopView}>
                                                <Text style={{
                                                    fontSize: RF(11),
                                                    color: colors.HEADING_COLOR
                                                }}>{Math.floor(this.state.experience)}</Text>
                                            </View>
                                        )
                                    }}
                                />

                            </View>
                            <View style={{height: RF(60)}}>
                                <View style={{
                                    height: RF(40),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: "98%",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text
                                        style={[styles.textStyles, {fontWeight: "normal"}]}>{"Skill Level: 5/10"}</Text>
                                </View>
                                <View style={[styles.leftText]}>
                                    <Text
                                        style={[styles.textStyles, {fontWeight: "normal", fontSize: RF(12)}]}>{1}</Text>
                                </View>
                                <View style={styles.rightText}>
                                    <Text style={[styles.textStyles, {
                                        fontWeight: "normal",
                                        fontSize: RF(12)
                                    }]}>{10}</Text>
                                </View>
                                <Slider
                                    value={this.state.skillLevel}
                                    minimumValue={0}
                                    maximumValue={10}
                                    thumbStyle={{height: RF(15), width: RF(15), backgroundColor: colors.HEADING_COLOR}}
                                    trackStyle={{height: RF(2)}}
                                    onValueChange={value => this.setState({skillLevel:value})}
                                    renderAboveThumbComponent={(index) => {
                                        console.log("values ===>>>", index)
                                        return (
                                            <View style={[styles.sliderTopView,{left:RF(4)}]}>
                                                <Text style={{
                                                    fontSize: RF(11),
                                                    color: colors.HEADING_COLOR
                                                }}>{Math.floor(this.state.skillLevel)}</Text>

                                            </View>
                                        )
                                    }}
                                />

                            </View>
                            <View style={{height: RF(200), marginTop: 30, width: '100%'}}>
                                <View style={{
                                    height: RF(30),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: "98%",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text
                                        style={[styles.textStyles, {fontWeight: "normal"}]}>{"Qualification or Awards:"}</Text>
                                </View>
                                <View style={{height: RF(50), flexDirection: 'row', width: "100%"}}>
                                    <TextInput
                                        // placeholder={"Test"}
                                        style={{
                                            borderWidth: RF(1),
                                            width: '80%',
                                            height: RF(30),
                                            borderColor: colors.HEADING_COLOR
                                        }}
                                    />
                                    <TouchableOpacity style={{
                                        height: RF(30),
                                        marginLeft: RF(10),
                                        width: RF(40),
                                        borderRadius: RF(2),
                                        backgroundColor: colors.ADD_BUTTON_COLOR,
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        ...GST.SHADOW,

                                    }}>
                                        <Text style={[styles.textStyles, {color: colors.WHITE}]}>{"ADD"}</Text>

                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', paddingLeft: RF(50)}}>
                                    <Text style={[styles.textStyles, {
                                        fontWeight: "normal",
                                        fontSize: RF(10),
                                        color: colors.LIGHT_GRAY
                                    }]}>{"Add one Qualification or Award at a time"}</Text>
                                </View>

                                <View style={{
                                    height: RF(30),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: "98%",
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={[styles.textStyles, {fontWeight: "normal"}]}>{"KeyWords"}</Text>
                                </View>
                                <View style={{height: RF(50), flexDirection: 'row', width: "100%"}}>
                                    <TextInput
                                        // placeholder={"Test"}
                                        style={{
                                            borderWidth: RF(1),
                                            width: '80%',
                                            height: RF(30),
                                            borderColor: colors.HEADING_COLOR
                                        }}
                                    />
                                    <TouchableOpacity style={{
                                        height: RF(30),
                                        marginLeft: RF(10),
                                        width: RF(40),
                                        borderRadius: RF(2),
                                        backgroundColor: colors.ADD_BUTTON_COLOR,
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        ...GST.SHADOW,

                                    }}>
                                        <Text style={[styles.textStyles, {color: colors.WHITE}]}>{"ADD"}</Text>

                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', paddingLeft: RF(50)}}>
                                    <Text style={[styles.textStyles, {
                                        fontWeight: "normal",
                                        fontSize: RF(10),
                                        color: colors.LIGHT_GRAY
                                    }]}>{"Add one Keyword at a time"}</Text>
                                </View>

                            </View>

                        </KeyboardAwareScrollView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            width={"85%"}
                                title={"SUBMIT"}
                        />
                        <Image source={images.secure}
                               style={{height: RF(12), width: RF(12), resizeMode: 'contain', marginTop: RF(10)}}/>
                        <Text style={[styles.textStyles, {fontSize: RF(9), fontWeight: "700", marginTop: RF(10)}]}>
                            {'Fully Encrypted and Secure'}
                        </Text>
                    </View>
                </View>
            </Wrapper>
        );
    }
};

export default InterestAndPrivacyControls;
