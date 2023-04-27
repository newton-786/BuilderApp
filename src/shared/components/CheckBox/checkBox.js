
import React from 'react';
import {View, Image, TouchableOpacity,TextInput,Text} from "react-native";
import images from "../../../assets/images/images";

import styles from "./styles";
import colors from "../../../assets/colors/colors";

class CheckBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkBoxValue:this.props.checkBoxValue ? this.props.checkBoxValue : false,
            value:this.props.defaultValue,
            trackTime:"",
            editable:true,
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.defaultValue !== prevProps.defaultValue){
            this.setState({value:this.props.defaultValue})
        }
        if (this.props.checkBoxValue !== prevProps.checkBoxValue){
            this.setState({checkBoxValue:this.props.checkBoxValue})
        }
    }





    render() {

        let {
            onCheckboxValueChange,
            title,

        } = this.props;
        return(

            <TouchableOpacity
                onPress={()=> this.setState({checkBoxValue: !this.state.checkBoxValue}, () => {
                    onCheckboxValueChange(this.state.checkBoxValue);
                })}
                style={styles.mainContainer}>
                <View style={styles.checkBoxContainer}>
                    {/*{this.state.checkBoxValue ?*/}
                        <Image source={ images.success } style={[styles.iconStyles,{tintColor:this.state.checkBoxValue ? colors.BLACK : colors.LIGHT_GRAY}]} />
                    {/*}*/}
                </View>
                <View style={[styles.lableContainer,{width:'90%'}]}>
                    <Text style={styles.lableStyles}>
                        {title}
                    </Text>
                    {
                        this.props.link &&
                        <TouchableOpacity onPress={this.props.onLinkPress} >
                            <Text style={[styles.lableStyles,{color: colors.APP_GOLD}]}>
                                {this.props.link}
                            </Text>
                        </TouchableOpacity>

                    }

                </View>
            </TouchableOpacity>
        )
    }
}


export default CheckBox;
