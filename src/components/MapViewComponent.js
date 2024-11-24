import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

const MapViewComponent = ({location}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.lat || 37.78825,
          longitude: location?.lng || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  map: {...StyleSheet.absoluteFillObject},
});

export default MapViewComponent;
