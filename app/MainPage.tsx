import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { View, Text, ActivityIndicator, TextInput, Button, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Image } from 'expo-image';
import image from "../constants/Images"
import LazyImage from './LazyImage';
import axios from 'axios';
// import {getMaldivesDestinations} from "../scripts/getMaldivesDestinations"
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';


const DATA_JSON_PATH = FileSystem.documentDirectory + 'data.json';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledInput = styled(TextInput);
const StyledButton = styled(TouchableOpacity);

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
  const [destinations, setDestinations] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("")
  const apiKey = "74bc67dd40c6f4ea4ddf5f8c81f4122e4dae9856d9a0cfe29c93770f8739d9a1";
// console.log("directory: ",DATA_JSON_PATH);

const [data, setData] = useState(null);

useEffect(() => {
  // Fetch the data.json file
  const jsonData = require('../assets/data.json');
  console.log(jsonData.local_results);
  
  setData(jsonData);
}, []);
  const handleSearch =()=>{
    console.log();
    try {
      
      fetchAndSaveData()
    } catch (error) {
      console.error(error);
      
    }
    
  }
  
    const fetchAndSaveData = async () => {
      if (!searchInput.trim()) {
        // console.error('Search input is empty.');
        return;
      }

      if (destinations === null) {
        try {
            
          const response = await axios.get(
            `https://serpapi.com/search.json?engine=google_food&&gl=eg&hl=en&device=mobile&output=JSON&location=Cairo,+Egypt&type=place&api_key=${apiKey}`
            , {
            params: { q: searchInput }, // Pass the query as a URL parameter
            
          });
          
          const data = response.data;
          setDestinations(data); 
          // Save the data to data.json file
          await FileSystem.writeAsStringAsync(DATA_JSON_PATH, JSON.stringify(data));
          console.log('Data saved locally to data.json');
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
    }
    };
  

  return (
    <StyledView className="flex-1 bg-gray-100 ">
      <ScrollView>
      {/* Header Section */}
      <StyledView className="p-6 bg-white ">
        <StyledText className="text-3xl font-bold">{data && data.search_parameters.location_used}</StyledText>
        <StyledText className="text-sm text-gray-500 dark:text-gray-300">Close to you</StyledText>
      </StyledView>
      {/* Map and Reviews Section */}
      <StyledView className='flex justify-center items-center py-3 space-y-2'>
        <StyledInput 
          value={searchInput}
          placeholder='Search for places' 
          className='w-[60%] bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-md focus:border-blue-500 focus:ring focus:ring-blue-200'
          onChangeText={setSearchInput}
          />
          <StyledButton className='rounded-3xl bg-blue-500  px-3 py-1' onPress={handleSearch} >
            <StyledText className='text-white'>Search</StyledText>
          </StyledButton>
      </StyledView>
      
      {data && data.local_results &&(
        <FlatList
          data={data.local_results}
          horizontal
          keyExtractor={(item) => item.restaurant_id}
          initialNumToRender={2} // Optimization
              windowSize={3} // Optimization

          renderItem={({ item }) => (
            <StyledView className="m-4 bg-white rounded-lg shadow-md overflow-hidden ">
              {item.images ?(

              <LazyImage
                source={ { uri: item.images[0] }} // Make sure the path is correct
                style={{ width: 200, height: 100 }} // Adjust size as needed
                className="rounded-t-lg"
              />
              ): (
                // Fallback UI when no images are available
                <StyledView style={{ width: 200, height: 100 }} className="bg-gray-200 flex justify-center items-center">
                  <StyledText className="text-gray-500 dark:text-gray-400">
                    No Image Available
                  </StyledText>
                </StyledView>
              )}
              <StyledView className="p-4">
                <StyledText className="font-bold text-lg">{item.title}</StyledText>
                <StyledText className="text-gray-500 dark:text-gray-400"> {item.distance}</StyledText>
                <StyledText className="mt-2 text-sm">Rating: {item.rating}</StyledText>
                <StyledText className="mt-2 text-sm">Reviews: {item.reviews}</StyledText>
              </StyledView>
            </StyledView>
          )}
        />
      )}


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
