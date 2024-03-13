import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { memo, useEffect, useRef } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import * as Location from "expo-location";
import ListingsBottomSheet from "./ListingBottomSheets";

interface Props {
  listings: any;
  itemListing: any;
  category: string;
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap = memo(({ listings, itemListing, category }: Props) => {
  const router = useRouter();
  const mapRef = useRef<any>(null);

  useEffect(() => {
    onLocateMe();
  }, []);

  const onMarkerSelected = (event: any) => {
    router.push(`/listing/${event.properties.id}`);
  };

  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    // const region = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    //   latitudeDelta: 7,
    //   longitudeDelta: 7,
    // };
    const region = INITIAL_REGION;

    mapRef.current?.animateToRegion(region);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;

    const points = properties.point_count;
    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
        onPress={onPress}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontFamily: "mon-sb",
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        ref={mapRef}
        animationEnabled={false}
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        renderCluster={renderCluster}
      >
        {listings.features.map((item: any) => {
          const latitude = parseFloat(item?.properties?.latitude);
          const longitude = parseFloat(item?.properties?.longitude);

          if (!isNaN(latitude) && !isNaN(longitude)) {
            return (
              <Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
                key={item.properties.id}
                onPress={() => onMarkerSelected(item)}
              >
                <View style={styles.marker}>
                  <Text style={styles.markerText}>
                    € {item.properties.price}
                  </Text>
                </View>
              </Marker>
            );
          }
          return null;
        })}
      </MapView>
      <TouchableOpacity style={styles.locateBtn} onPress={onLocateMe}>
        <Ionicons name="navigate" size={24} color={Colors.dark} />
      </TouchableOpacity>

      <ListingsBottomSheet listings={itemListing} category={category} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    // borderColor: "red",
    // height: "100%",
  },
  marker: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-sb",
  },
  locateBtn: {
    position: "absolute",
    top: 70,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});

export default ListingsMap;
