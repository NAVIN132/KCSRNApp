// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState} from 'react';
import {View, Text, SafeAreaView,StyleSheet,TouchableOpacity,Linking,TouchableHighlight,Image} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import Video from 'react-native-video';
import { CardViewWithImage } from 'react-native-simple-card-view'
import call from 'react-native-phone-call';
import settingssc from '../DrawerScreens/SettingsScreen';
import YouTube  from 'react-native-youtube';

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
      source: require('../DrawerScreens/Img/D1.jpg'),
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
  {
    name: 'Find Me',
    background: '#3498db',
   // icon: (item, background) => Icon({ icon: 'calendar', item, background }),
},
];


const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('101');
 
  const triggerCall = () => {
    // Check for perfect 10 digit length
    // if (inputValue.length != 10) {
    //   alert('Please insert correct contact number');
    //   return;
    // }
    // console.log('function called')
    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

 const handleClick = () => {
  //alert('Function Called');
  Linking.openURL('https://www.mahapolice.gov.in/');
  }
  
  const card = ({ name }) => console.log('Card: ' + name);

   
  return (
       <SafeAreaView style={{flex: 1}}>
        <Image style={styles.backgroundImage}
        source={require('../DrawerScreens/Img/policHeader.jpg') }
        style={{height: 250,marginTop: 1 ,resizeMode:'stretch'}}
        />
        <View style={{ flexDirection: 'row',marginLeft : 10 }}>
        <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'navy', borderWidth:1 , marginTop : 10 }]}
        >
        <Image  
        source={require('../DrawerScreens/Img/Minister.jpg') } 
        style={styles.profileImg} 
        />
        </TouchableHighlight>
        <View style={styles.OvalShapeView} >
            <Text style={styles.Hdr2}>Dilip Walse-Patil</Text>
            <Text style={styles.Hdr3}>Maharashtra Cabinet Minister </Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row',marginLeft : 10 }}>
        <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'navy', borderWidth:1 , marginTop : 10 }]}
        >
        <Image  
        source={require('../DrawerScreens/Img/IPS.jpg') } 
        style={styles.profileImg} 
        />
        </TouchableHighlight>
        <View style={styles.OvalShapeView} >
            <Text style={styles.Hdr2}>Sanjay Pandey IPS</Text>
            <Text style={styles.Hdr3}>DGP of Maharashtra</Text>
        </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D1.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={() => console.log("Police TV Clicked!")}
        roundedImage={ false }
        />
           <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D2.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={() => console.log("Know Your Police Station Clicked!")}
        roundedImage={ false }
        />

       <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D3.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={triggerCall}
        roundedImage={ false }
        />
         </View>
    
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D4.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={handleClick}
        roundedImage={ false }
        />
           <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D5.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={() => console.log("Story Clicked!")}
        roundedImage={ false }
        />

       <CardViewWithImage
        width={ (100)}
        source={require('../DrawerScreens/Img/D6.jpg') }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        onPress={() => console.log("News Clicked!")}
        rounded
        Image={ false }
        />
        
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
  height : 430,
},
DashBoardFooter: {
    backgroundColor: '#ecf0f1',
  alignContent:'center',
  height : 120,
},
buttonStyle: {
  justifyContent: 'center',
  marginTop: 15,
  padding: 10,
  backgroundColor: '#8ad24e',
},
buttonTextStyle: {
  color: '#fff',
  textAlign: 'center',
},
profileImgContainer: {
  marginLeft: 8,
  height: 80,
  width: 80,
  borderRadius: 40,
},
profileImg: {
  height: 80,
  width: 80,
  borderRadius: 40,
},
backgroundImage: {
  flex: 1,
  resizeMode: 'cover', // or 'stretch'
},
CircleShapeView: {
  width: 150,
  height: 150,
  borderRadius: 150/2,
  backgroundColor: '#00BCD4'
},

OvalShapeView: {
marginTop: 20,
marginLeft: 65,
width: 120,
height: 60,
backgroundColor: 'navy',
borderRadius: 10,
transform: [
  {scaleX: 2}
]
},
Hdr2:{
color:'white',
alignSelf:'center',
justifyContent:'center',
marginTop:10,
fontSize:12,
},
Hdr3:{
  color:'white',
  alignSelf:'center',
  justifyContent:'center',  
  marginTop:5,
  fontSize:8,
},
});