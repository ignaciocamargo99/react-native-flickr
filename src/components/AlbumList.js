import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = ({ navigation }) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
      )
      .then((response) =>
        setPhotoset(response.data.photosets.photoset)
      );
  }, []);

  const renderAlbums = ({ item }) => (
    <AlbumDetail
      navigation={navigation}
      key={item.id}
      title={item.title._content}
      albumId={item.id}
    />
  )

  if (!photoset) {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="#1E67A2" />
        <Text style={{textAlign: 'center', fontSize:17}}>Loading</Text>
      </View>
    )
  }
  else {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={photoset}
          renderItem={renderAlbums}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default AlbumList;
