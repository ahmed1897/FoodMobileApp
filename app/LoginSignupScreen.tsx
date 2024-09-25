import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledLink = styled(Link);
const StyledButton = styled(Button);

export default function LoginSignup  () {
  return (
    <StyledView className="flex-1 justify-center items-center bg-white p-4">
      <StyledText className="text-2xl font-bold mb-4">Log In or Sign Up To Be Part Of This Community</StyledText>

      {/* Illustration */}
      <StyledView className="mb-8">
        {/* Add illustration here */}
      </StyledView>

      <StyledView className="w-full space-y-4">
        <StyledLink href={`/LoginForm`} >Log In</StyledLink>
        <StyledLink href={`/SignupForm`} >SIGN UP</StyledLink>
        
      </StyledView>

      {/* Social Media Sign In */}
      <StyledText className="text-center text-gray-500 mt-4">Or register with</StyledText>
      <StyledView className="flex-row justify-center space-x-4 mt-4">
        <StyledButton title="Google" onPress={() => {}} />
        <StyledButton title="Facebook" onPress={() => {}} />
        <StyledButton title="Apple" onPress={() => {}} />
      </StyledView>
    </StyledView>
  );
}