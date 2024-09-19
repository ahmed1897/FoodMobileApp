import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledLink = styled(Link);

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
  };

  return (
    <StyledView className="flex-1 items-center justify-center bg-white  p-4 gap-y-2">
      <StyledText className="text-2xl font-bold ">Login to Continue</StyledText>
      <StyledView className='w-2/3 gap-y-2'>


      <StyledTextInput
        className="border border-gray-300 rounded px-3 py-1 "
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <StyledTextInput
        className="border border-gray-300 rounded px-3 py-1 "
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      </StyledView>
      <StyledLink className='bg-gray-500 text-white rounded-lg px-3 py-1' href="./MainPage">Login</StyledLink>
    </StyledView>
  );
}
