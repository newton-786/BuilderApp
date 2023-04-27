import React, {useEffect, useState} from 'react';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import images from '../../../assets/images/images';
import {RF} from '../../theme/responsive';
import Button from '../button/button';
import styles from './styles';
import colors from "../../../assets/colors/colors";



class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
        }
    }

    componentDidMount() {
        this.setState({
            modalVisible:this.props?.modalVisible
        })
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.modalVisible !== this.state.modalVisible){
            this.setState({modalVisible:this.props.modalVisible})
        }
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setState({modalVisible:!this.state.modalVisible})
                }}>
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            height: RF(100),
                            width: '70%',
                            borderRadius: RF(10),
                        }}>
                        <View style={styles.mainContainer}>
                            <View style={styles.cancelRowContainer}>
                                <View style={styles.cancelRow}>
                                    <View></View>
                                    <View style={styles.cancelIconContainer}>
                                        <TouchableOpacity onPress={this.props.onPressClose}>
                                            <Image source={images.cancel} style={styles.cancelIcon}/>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                            <View style={{flex: 0.7, paddingLeft: RF(10)}}>
                                <TouchableOpacity style={{
                                    // height:RF(42),
                                    width: '85%',
                                    // borderWidth:RF(1),
                                    // marginTop:RF(10),
                                    flexDirection: 'row',
                                    // justifyContent:'center',
                                    alignItems: 'center',
                                    borderRadius: RF(5),
                                    marginBottom: RF(10)
                                }}>
                                    <View style={{
                                        height: RF(17),
                                        width: RF(17),
                                        borderRadius: RF(8.5),
                                        marginRight: RF(10),
                                        backgroundColor: colors.BLACK
                                    }}></View>
                                    <Text style={[styles.heading, {color: colors.BLACK, fontSize: RF(14)}]}>
                                        {'Block contact'}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    // height:RF(42),
                                    width: '85%',
                                    // borderWidth:RF(1),
                                    // marginTop:RF(10),
                                    flexDirection: 'row',
                                    // justifyContent:'center',
                                    alignItems: 'center',
                                    borderRadius: RF(5),
                                    marginBottom: RF(10)
                                }}>
                                    <View style={{
                                        height: RF(17),
                                        width: RF(17),
                                        borderRadius: RF(8.5),
                                        marginRight: RF(10),
                                        backgroundColor: colors.BLACK
                                    }}></View>
                                    <Text style={[styles.heading, {color: colors.BLACK, fontSize: RF(14)}]}>
                                        {'Add to favourite'}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
};

export default PopUp;
