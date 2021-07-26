// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,StyleSheet} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

const Icon = ({ icon, item, background }) => (
  <FontAwesome
      name={icon}
      size={40}
      color={
          item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
      }
      style={item.styleIcon}
  />
);

const data = [
  {
      name: 'Police Station',
      background: '#3498db',
      //icon: (item, background) => Icon({ icon: 'user', item, background }),
      iconColor: '#0d47a1',
      rippleColor: '#000',
      styleName : {color: '#0d47a1', fontWeight: 'bold'}
  },
  {
      name: 'Woman Help Center',
      background: '#3498db',
     // icon: (item, background) => Icon({ icon: 'gratipay', item, background }),
      styleIcon: { color: '#0d47a1' },
  },
  // {
  //     name: 'Achivements',
  //     background: '#3498db',
  //   //  icon: (item, background) => Icon({ icon: 'heart', item, background }),
  // },
  {
      name: 'Alchol Help Center',
      background: '#3498db',
     // icon: (item, background) => Icon({ icon: 'users', item, background }),
      styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  // {
  //     name: 'Register Compliant',
  //     background: '#3498db',
  //   //  icon: (item, background) => Icon({ icon: 'group', item, background }),
  // },
  {
      name: 'Our Story',
      background: '#3498db',
     // icon: (item, background) => Icon({ icon: 'calendar', item, background }),
  },
];


const HomeScreen = () => {
  const card = ({ name }) => console.log('Card: ' + name);
  return (
   <SafeAreaView style={{flex: 1}}>
        <View style={styles.DashBoardHeader}>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            color: 'grey',
          }}>
          Display Header Information and Image in Rotation Mode
        </Text>
        </View>
            <View style={styles.DashboardIcon}>
            <Dashboard
                data={data}
                background={true}
                card={card}
                column={2}
                rippleColor={'#3498db'}
            />
        </View>
        <View style={styles.DashBoardFooter}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: 'grey',
          }}>
         Display Header Information and Image in Rotation Mode
        </Text>
        </View>
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  DashboardIcon: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignContent:'center',
  },
DashBoardHeader: {
 
  backgroundColor: '#ecf0f1',
  alignContent:'center',
  height : 150,
},
DashBoardFooter: {
    backgroundColor: '#ecf0f1',
  alignContent:'center',
  height : 120,
},

});