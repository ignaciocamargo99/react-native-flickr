import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      .then((response) =>
        setPhotos(response.data.photoset.photo),
      );
  }, []);

  const renderAlbums = () => {
    return photos.map((photo) => (
      <PhotoDetail
        key={photo.title}
        title={photo.title}
        imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      />
    ));
  }

  if (!photos) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>{renderAlbums()}</ScrollView>
      </View>
    );
  }
}

export default PhotoList;
