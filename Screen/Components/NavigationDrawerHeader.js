// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 40, height: 40, marginLeft: 5}}
        />
        </TouchableOpacity>
        
       </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <Image
          source={require('../DrawerScreens/Img/mahapolicelogo.jpg') }
          style={{width: 40, height: 40, marginLeft: 80}}
      />
</View>
    </View>
  );
};
export default NavigationDrawerHeader;