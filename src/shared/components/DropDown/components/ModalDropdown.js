/**
 * Created by sohobloo on 16/9/13.
 */

"use strict";

import React, {Component} from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
    FlatList,
    Platform,
    Image, Text,
} from 'react-native';

// import PropTypes from "prop-types";
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {Overlay} from 'react-native-elements';
import colors from "../../../../assets/colors/colors";
import {RF} from "../../../theme/responsive";
import {GST} from "../../../theme/globalStyles";
import {FONTS} from "../../../../assets/fonts";

export default class ModalDropdown extends Component {
    // static propTypes = {
    //     disabled: PropTypes.bool,
    //     scrollEnabled: PropTypes.bool,
    //     defaultIndex: PropTypes.number,
    //     defaultValue: PropTypes.string,
    //     options: PropTypes.array,
    //     accessible: PropTypes.bool,
    //     animated: PropTypes.bool,
    //     showsVerticalScrollIndicator: PropTypes.bool,
    //     keyboardShouldPersistTaps: PropTypes.string,
    //     showArrow: PropTypes.bool,
    //     style: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.object,
    //         PropTypes.array,
    //     ]),
    //     textStyle: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.object,
    //         PropTypes.array,
    //     ]),
    //     dropdownStyle: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.object,
    //         PropTypes.array,
    //     ]),
    //     dropdownTextStyle: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.object,
    //         PropTypes.array,
    //     ]),
    //     dropdownTextHighlightStyle: PropTypes.oneOfType([
    //         PropTypes.number,
    //         PropTypes.object,
    //         PropTypes.array,
    //     ]),
    //     containerStyles: ViewPropTypes.style,
    //     adjustFrame: PropTypes.func,
    //     renderRow: PropTypes.func,
    //     renderSeparator: PropTypes.func,
    //     renderButtonText: PropTypes.func,
    //     onDropdownWillShow: PropTypes.func,
    //     onDropdownWillHide: PropTypes.func,
    //     onSelect: PropTypes.func,
    //     whiteRightIcon: PropTypes.bool,
    //     placeHolder: PropTypes.string,
    // };

    static defaultProps = {
        disabled: false,
        scrollEnabled: true,
        defaultValue: "",
        options: null,
        placeHolder: "Select",
        animated: true,
        showsVerticalScrollIndicator: true,
        keyboardShouldPersistTaps: "never",
        showArrow: true,
        whiteRightIcon: false,
    };

    constructor(props) {
        super(props);

        this._button = null;
        this._buttonFrame = null;
        this._nextValue = null;
        this._nextIndex = null;

        this.state = {
            accessible: !!props.accessible,
            loading: !props.options,
            showDropdown: false,
            buttonText: props.defaultValue,
            selectedIndex: props.defaultIndex,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        if (this.props.defaultValue !== nextProps.defaultValue  || this.props.options.length !== nextProps.options.length){
            let {buttonText, selectedIndex} = this.state;
            let {defaultIndex, defaultValue, options,} = nextProps;
            buttonText = this._nextValue == null ? defaultValue : this._nextValue;
            selectedIndex = this._nextIndex == null ? defaultIndex : this._nextIndex;
            this._nextValue = null;
            this._nextIndex = null;
            this.setState({
                loading: !options,
                buttonText,
                selectedIndex,
            });
        }

    }


    render() {
        const {containerStyles} = this.props;
        return (
            <View

                style={
                    containerStyles !== undefined
                        ? containerStyles
                        : [styles.dropDownContainer, {width: "100%"}]
                }
            >
                {this._renderButton()}
                {this._renderModal()}
            </View>
        );
    }

    _updatePosition(callback) {
        if (this._button && this._button.measure) {
            this._button.measure((fx, fy, width, height, px, py) => {
                this._buttonFrame = {x: px, y: py, w: width, h: height};

                callback && callback();
            });
        }
    }

    show() {
        this._updatePosition(() => {
            this.setState({
                showDropdown: true,
            });
        });
    }

    hide() {
        this.setState({
            showDropdown: false,
        });
    }


    _renderButton() {
        // console.log("button Text =====>>>>",buttonText);
        const {
            disabled,
            accessible,
            textStyle,
            whiteRightIcon,
            placeHolder,
        } = this.props;
        let {buttonText} = this.state;

        return (
            <TouchableOpacity
                ref={(button) => (this._button = button)}
                disabled={disabled}
                style={{width: "100%", flex: 1, alignItems: "center", flexDirection: "row",}}
                accessible={accessible}
                onPress={this._onButtonPress}
            >
                <View style={styles.button}>
                    <Text
                        ellipsizeMode={"tail"}
                        numberOfLines={2}
                        style={[
                            styles.buttonText,
                            {
                                color:
                                    buttonText === ""
                                        ? colors.LIGHT_GRAY
                                        : colors.DROP_DOWN_TEXT_COLOR,
                            },
                            textStyle,
                        ]}

                    >{buttonText === "" ? placeHolder : buttonText}</Text>
                </View>

                <Image
                    source={require("./images/drop_down_black.png")}
                    style={{
                        width: RF(14),
                        tintColor: whiteRightIcon ? colors.WHITE : null,
                        height: RF(14),
                        marginRight:RF(3),
                        resizeMode: "contain",
                    }}
                />


            </TouchableOpacity>
        );
    }

    _onButtonPress = () => {
        const {onDropdownWillShow} = this.props;
        if (!onDropdownWillShow || onDropdownWillShow() !== false) {
            this.show();
        }
    };

    _renderModal() {
        const {accessible, dropdownStyle, dropDownWidth} = this.props;
        const {showDropdown, loading} = this.state;
        if (showDropdown && this._buttonFrame) {
            return (
                <Overlay
                    animationType={"fade"}
                    isVisible={showDropdown}
                    onBackdropPress={this._onRequestClose}
                    windowBackgroundColor={"transparent"}
                    overlayBackgroundColor={"transparent"}
                    overlayStyle={[
                        styles.dropdown,
                        {
                            top: this._buttonFrame.y + this._buttonFrame.h,
                            position: "absolute",
                            left: this._buttonFrame.x,
                            height:
                                // (dropdownStyle && StyleSheet.flatten(dropdownStyle).height) ||
                                StyleSheet.flatten(styles.dropdown).height,
                            width: this._buttonFrame.w,
                        },
                    ]}
                    transparent={true}
                    onRequestClose={this._onRequestClose}
                    supportedOrientations={[
                        "portrait",
                        "portrait-upside-down",
                        "landscape",
                        "landscape-left",
                        "landscape-right",
                    ]}
                >
                    <TouchableOpacity
                        accessible={accessible}
                        disabled={!showDropdown}
                        onPress={this._onModalPress}
                    >
                        {loading ? this._renderLoading() : this._renderDropdown()}
                    </TouchableOpacity>
                </Overlay>
            );
        }
    }

    _onRequestClose = () => {
        const {onDropdownWillHide} = this.props;
        if (!onDropdownWillHide || onDropdownWillHide() !== false) {
            this.hide();
        }
    };

    _onModalPress = () => {
        const {onDropdownWillHide} = this.props;
        if (!onDropdownWillHide || onDropdownWillHide() !== false) {
            this.hide();
        }
    };

    _renderLoading = () => {
        return <ActivityIndicator size="small"/>;
    }

    _renderDropdown() {
        const {
            scrollEnabled,
            keyboardShouldPersistTaps,
            options,
        } = this.props;
        return (
            <FlatList
                scrollEnabled={scrollEnabled}
                data={options}
                renderItem={(item, index) => this._renderRow(item, index)}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            />
        );
    }

    _renderRow = (item) => {
        // console.log("_renderRow ====>>>",item)
        const {
            renderRow,
            dropdownTextStyle,
            dropdownTextHighlightStyle,
        } = this.props;
        const {selectedIndex, buttonText} = this.state;

        let highlighted;
        if (selectedIndex === undefined) {
            highlighted = item.item.name === buttonText;
        } else {
            highlighted = item.index === selectedIndex;
        }


        const row = !renderRow ? (
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: THEME.colors.grayScaletext,
                    height: RF(40),
                }}
            >
                <Text
                    ellipsizeMode={"tail"}
                    numberOfLines={1}
                    style={[
                        styles.rowText,
                        dropdownTextStyle,
                        highlighted && styles.highlightedRowText,
                        highlighted && dropdownTextHighlightStyle,
                    ]}
                    writeToClipBoard={false}
                >{item.item.name}</Text>
            </View>
        ) : (
            renderRow(item.item, item.index, highlighted, buttonText)
        );

        return <TouchableOpacity onPress={() => this._onRowPress(item.item, item.index)}>{row}</TouchableOpacity>;
    };

    _onRowPress(data, index) {
        // console.log("_onRowPress_onRowPress ====>>>",data);
        const {onSelect, renderButtonText, onDropdownWillHide} = this.props;
        if (!onSelect || onSelect(index, data) !== false) {
            const value =
                (renderButtonText && renderButtonText(data.name)) || data.name.toString();

            // console.log("value ==_onRowPress==>>>",value);
            // this._nextValue = value;
            this._nextIndex = index;
            this.setState({
                buttonText: value,
                selectedIndex: index,
            }, () => {
                // console.log("this.state.buttonText", this.state.buttonText);
            });
        }
        if (!onDropdownWillHide || onDropdownWillHide() !== false) {
            this.setState({
                showDropdown: false,
            });
        }
    }
}

const styles = StyleSheet.create({
    dropDownContainer: {
        borderWidth: 0.3,
        // borderColor: THEME.colors.light_gray,
        // borderRadius: 5,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.WHITE,
        height: RF(40),
        marginVertical: RF(5),
        ...GST.SHADOW
    },
    button: {

        height: "100%",
        flex: 0.98,
        justifyContent: "center",
        marginHorizontal: RF(7),
    },
    buttonText: {
        fontSize: RF(14),
        fontFamily: FONTS.MilliardMedium,
    },
    modal: {
        flexGrow: 1,
    },
    dropdown: {
        backgroundColor: colors.WHITE,
        minHeight: RF(40),
        maxHeight: RF(300),
        // borderWidth: RF(1),
        // borderColor: THEME.colors.black,
        padding: 0,
    },
    loading: {
        alignSelf: "center",
    },
    rowText: {
        paddingHorizontal: RF(5),
        paddingVertical: RF(5),
        fontSize: RF(14),
        color:colors.GRAY,
        textAlignVertical: "center",
    },
    highlightedRowText: {
        color: colors.BLACK,
        fontSize: RF(14),
        paddingHorizontal: RF(5),
        paddingVertical: RF(5),
        textAlignVertical: "center",
    },
    separator: {
        height: RF(2),
        backgroundColor: colors.GRAY
    },
});
