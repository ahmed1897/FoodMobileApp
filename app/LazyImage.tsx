import React, { useState } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';

const LazyImage = ({ source, style }:any) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ position: 'relative' }}>
      {loading && (
        <ActivityIndicator
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          size="small"
          color="#000"
        />
      )}
      <Image
        source={source}
        style={style}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)} // Handle error state if needed
      />
    </View>
  );
};

export default LazyImage;
