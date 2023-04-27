import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../shared/utils/routes';
import StartJourney from '../../../screens/listingUpload/startJourney';
import {useSelector} from 'react-redux';
import {isArrayExist} from '../../../shared/services/HelperService';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  const {user} = useSelector((state: any) => state.root.user);
  const hasProperty = () => {
    if (isArrayExist(user?.listing)) {
      return Routes.BOTTOM_TABS;
    } else {
      return Routes.START_JOURNEY;
    }
  };
  return (
    <Stack.Navigator
      initialRouteName={hasProperty()}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.START_JOURNEY} component={StartJourney} />

    </Stack.Navigator>
  );
};

export default MainStack;
