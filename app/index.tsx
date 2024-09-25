import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import LazyImage from './LazyImage';


const StyledView = styled(View);
const StyledText = styled(Text);


export default function SplashScreen () {
  const router = useRouter();
  
  const logo:any =require('../assets/images/Vector.png');

  // Redirect to welcome page after 5 seconds
  React.useEffect(() => {
    console.log("SplashScreen in");
    
    const timer = setTimeout(() => {
      router.replace('/WelcomeScreen');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <StyledView  style={styles.container}>
      <LinearGradient
        colors={['rgba(245, 71, 100, 0.7)', '#F54764']}
        locations={[0, 0.8]}
        style={styles.gradient}
      >
         <LazyImage
                source={logo} // Make sure the path is correct
                style={styles.logo}
              />
        <StyledText className="text-white text-5xl font-bold ">FOOD HUB</StyledText>
      </LinearGradient>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    gap: 10,
    paddingBottom:60
  
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150,
    objectFit:"contain"
  },
});