import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {addSearchResult} from '../redux/actions';

const AutocompleteInput = ({setLocation}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search for a place"
        fetchDetails
        onPress={(data, details = null) => {
          const location = details?.geometry?.location;
          setLocation(location);
          dispatch(
            addSearchResult({
              description: data.description,
              location,
            }),
          );
        }}
        query={{
          key: 'AIzaSyBTtHnNv63rZCA2YTsjpLl72U-cxKT73xo',
          language: 'en',
        }}
        styles={{
          textInput: styles.textInput,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 10},
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default AutocompleteInput;
