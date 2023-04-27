import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../../../shared/utils/routes';

import SkillsAndInterest from "../../../screens/SkillsAndInterest";
import Notifications from "../../../screens/Notifications";
import InterestAndPrivacyControls from "../../../screens/InterestPrivacyControls";
import Message from "../../../screens/message";
import Conversation from "../../../screens/conversation";
import Rating from "../../../screens/Rating";
import SkillAndInterestAdmin from "../../../screens/SkillAndInterestAdmin";
const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={Routes.SKILL_AND_INTEREST_ADMIN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.SKILL_AND_INTEREST} component={SkillsAndInterest} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={Notifications} />
        <Stack.Screen name={Routes.INTERSTANDPRIVACYCONTROLS} component={InterestAndPrivacyControls} />
        <Stack.Screen name={Routes.SKILL_AND_INTEREST_ADMIN} component={SkillAndInterestAdmin} />
        <Stack.Screen name={Routes.MESSAGE_SCREEN} component={Message} />
        <Stack.Screen name={Routes.CONVERSATION} component={Conversation} />
        <Stack.Screen name={Routes.RATING} component={Rating} />

      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
