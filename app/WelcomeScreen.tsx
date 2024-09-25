import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';
import { styled } from 'nativewind';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import LazyImage from './LazyImage';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledLink = styled(Link);

export default function WelcomeScreen () {
  const logo:any =require('../assets/images/Vector.png');
  const logoTranslateY = useRef(new Animated.Value(100)).current;
  const logoScale = useRef(new Animated.Value(1)).current; 
  const bottomTranslateY = useRef(new Animated.Value(100)).current;
  useEffect(() => {
    // Animate the logo and text upwards
    Animated.parallel([
      Animated.timing(logoTranslateY, {
        toValue: -200, // Move to its original position
        duration: 1000, // Duration of the animation
        useNativeDriver: true, // Use native driver for better performance
      }),
      Animated.timing(logoScale, {
        toValue: 0.8, // Scale down to 80% of its original size
        duration: 1000, // Duration of the animation
        useNativeDriver: true, // Use native driver for better performance
      }),
    ]).start();

    // Animate the bottom container upwards
    Animated.timing(bottomTranslateY, {
      toValue: 0, // Move to its original position
      duration: 500, // Duration of the animation
      delay: 300, // Optional delay before starting this animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [logoTranslateY]);
  return (
    <StyledView style={styles.container} className=" bg-white">
      <LinearGradient
        colors={['rgba(245, 71, 100, 0.7)', '#F54764']}
        locations={[0, 0.8]}
        style={styles.gradient}
      >
        <Animated.View style={{ transform: [{ translateY: logoTranslateY }, { scale: logoScale }], display:"flex",flexDirection:'column',  justifyContent:"center", alignContent:'center' }}>


         <LazyImage
                source={logo} // Make sure the path is correct
                style={styles.logo}
              />
        <StyledText className="text-white text-5xl font-bold ">FOOD HUB</StyledText>
        </Animated.View>
      </LinearGradient>
      <Animated.View
        style={[
          // styles.bottomContainer,
          {
            transform: [{ translateY: bottomTranslateY }],
          },
        ]}
      >


      <StyledView className="bg-white rounded-t-3xl px-4 py-10 w-full items-center absolute bottom-0">
        <StyledText className="text-lg font-bold mb-6 text-[#F54764]">Welcome to FOOD HUB!</StyledText>
        <StyledText className="text-center text-gray-600 mb-8">
          See Reviews, Order Food, and Make Restaurant Reservations - All in one app. Enjoy!
        </StyledText>
        <StyledView className='flex-row justify-between items-center w-full px-2'>


          <StyledView >
            <StyledLink  href={'/LoginSignupScreen'} >Skip</StyledLink>
          </StyledView>

          <StyledView>
            <StyledLink  href={'/LoginSignupScreen'} >Next</StyledLink>
          </StyledView>

        </StyledView>
      </StyledView>
      </Animated.View>

      
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"

  },
  gradient: {
    width: "100%",
    height:"100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    gap: 10,
    paddingBottom:60
  
  },
  logo: {
    width: "100%", // Adjust size as needed
    height: 150,
    objectFit:"contain",
  },

});