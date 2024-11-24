import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AutocompleteInput from '../components/AutocompleteInput';
import MapViewComponent from '../components/MapViewComponent';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

  return (
    <View style={styles.container}>
      <AutocompleteInput setLocation={setLocation} />
      <MapViewComponent location={location} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
