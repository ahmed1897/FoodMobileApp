import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledLink = styled(Link);

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white p-4 gap-y-4">
      <StyledText className="text-2xl font-bold mb-6">Sign Up</StyledText>

      <StyledView className="w-2/3 gap-y-2">
        <StyledTextInput
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <StyledTextInput
          className="border border-gray-300 rounded-lg px-3 py-2"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </StyledView>

      <StyledLink href={'/MainPage'} >Log In</StyledLink>
    </StyledView>
  );
}