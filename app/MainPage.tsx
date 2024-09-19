import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { Image } from 'expo-image';
import image from "../constants/Images"
import LazyImage from './LazyImage';




const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const reviews = [
    {
      id: 1,
      restaurant: 'Hard Rock Café',
      distance: '5.2 miles away',
      rating: 4.5,
      image: image.cafe1,
      reviewCount: 87,
    },
    {
      id: 2,
      restaurant: 'Hard Rock Café',
      distance: '5.2 miles away',
      rating: 4.5,
      image: image.cafe2,
      reviewCount: 87,
    },
    {
      id: 3,
      restaurant: 'Hard Rock Café',
      distance: '5.2 miles away',
      rating: 4.5,
      image: image.cafe3,
      reviewCount: 87,
    },
    {
      id: 4,
      restaurant: 'Hard Rock Café',
      distance: '5.2 miles away',
      rating: 4.5,
      image: image.cafe4,
      reviewCount: 87,
    },
    {
      id: 5,
      restaurant: 'Hard Rock Café',
      distance: '5.2 miles away',
      rating: 4.5,
      image: image.cafe5,
      reviewCount: 87,
    },
    // Add more reviews as needed
  ];

  const images:any = {
    1: require('../assets/images/cafe1-min.png'),
    2: require('../assets/images/cafe2-min.png'),
    3: require('../assets/images/cafe3-min.png'),
    4: require('../assets/images/cafe4-min.png'),
    5: require('../assets/images/cafe5-min.png'),
    // Add more images as needed
  };
export default function MainPage() {
  return (
    <StyledView className="flex-1 bg-gray-100 ">
      <ScrollView>
      {/* Header Section */}
      <StyledView className="p-6 bg-white ">
        <StyledText className="text-3xl font-bold">Cairo</StyledText>
        <StyledText className="text-sm text-gray-500 dark:text-gray-300">Close to you</StyledText>
      </StyledView>
      {/* Map and Reviews Section */}
      <FlatList
        data={reviews}
        horizontal
        keyExtractor={(item) => item.id.toString()}
         initialNumToRender={2} // Optimization
            windowSize={3} // Optimization

        renderItem={({ item }) => (
          <StyledView className="m-4 bg-white rounded-lg shadow-md overflow-hidden ">
            <LazyImage
              source={ images[item.id]} // Make sure the path is correct
              style={{ width: 200, height: 100 }} // Adjust size as needed
              className="rounded-t-lg"
            />
            <StyledView className="p-4">
              <StyledText className="font-bold text-lg">{item.restaurant}</StyledText>
              <StyledText className="text-gray-500 dark:text-gray-400">{item.distance}</StyledText>
              <StyledText className="mt-2 text-sm">{item.rating}</StyledText>
            </StyledView>
          </StyledView>
        )}
      />


      {/* Recommendation and Discover Sections */}
      <StyledView className="p-6 bg-white  mt-4">
        <StyledText className="text-2xl font-bold">Recommendations for you</StyledText>
        {/* Add slider for recommendations */}
        <FlatList
          data={reviews}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={2} // Optimization
          windowSize={3} // Optimization
          renderItem={({ item }) => (
            <StyledView className="m-4 bg-white rounded-lg shadow-md overflow-hidden ">
              <LazyImage
                source={ images[item.id]} // Make sure the path is correct
                style={{ width: 200, height: 100 }} // Adjust size as needed
                className="rounded-t-lg"
              />
              <StyledView className="p-4">
                <StyledText className="font-bold text-lg">{item.restaurant}</StyledText>
                <StyledText className="text-gray-500 dark:text-gray-400">{item.distance}</StyledText>
                <StyledText className="mt-2 text-sm">{item.rating}</StyledText>
              </StyledView>
            </StyledView>
          )}
      />
      </StyledView>

      <StyledView className="p-6 bg-white  mt-4">
        <StyledText className="text-2xl font-bold">Discover</StyledText>
        {/* Add discover slider */}
        <FlatList
        data={reviews}
        horizontal
        keyExtractor={(item) => item.id.toString()}
         initialNumToRender={2} // Optimization
            windowSize={3} // Optimization
        renderItem={({ item }) => (
          <StyledView className="m-4 bg-white rounded-lg shadow-md overflow-hidden ">
            <LazyImage
              source={ images[item.id]} // Make sure the path is correct
              style={{ width: 200, height: 100 }} // Adjust size as needed
              className="rounded-t-lg"
            />
            <StyledView className="p-4">
              <StyledText className="font-bold text-lg">{item.restaurant}</StyledText>
              <StyledText className="text-gray-500 dark:text-gray-400">{item.distance}</StyledText>
              <StyledText className="mt-2 text-sm">{item.rating}</StyledText>
            </StyledView>
          </StyledView>
        )}
      />
      </StyledView>

      {/* Footer */}
      <StyledView className="p-6 bg-white  mt-4">
        <StyledText className="text-center text-gray-500 dark:text-gray-400">© 2024 Your App</StyledText>
      </StyledView>
      </ScrollView>
    </StyledView>
  );
}
