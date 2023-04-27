
import React, {ReactChild} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from "../../../assets/colors/colors";

interface Props {
  children: ReactChild;
  noPaddingTop: any;
  noPaddingBottom: any;
    statusBarColor:any,
    backgroundColor:any,
}

const Wrapper = ({children, noPaddingTop, noPaddingBottom,backgroundColor,statusBarColor}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : insets.bottom;
  const barColor = statusBarColor ||  "dark-content";
  return (
    <>
      <StatusBar
        barStyle={barColor}
        translucent
        backgroundColor="transparent"
      />
        <View
          style={[
            styles.container,
            {
              paddingTop,
              paddingBottom,
                backgroundColor:backgroundColor  || colors.WHITE,
            },
          ]}>
          {children}
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
