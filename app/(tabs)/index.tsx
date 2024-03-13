import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";

import listingsData from "@/assets/data/listing.json";
import listingsDataGeo from "@/assets/data/listingGeo.json";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listing";
import ListingsMap from "@/components/ListingMap";
import ListingsBottomSheet from "@/components/ListingBottomSheets";

const Page = () => {
  //dummy
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo, []);

  //state
  const [category, setCategory] = useState<string>("Tiny homes");

  //func
  const onDataChanged = (category: string) => {
    console.log({ category });
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} refresh={0} category={category} /> */}
      <ListingsMap
        listings={geoItems}
        itemListing={items}
        category={category}
      />
      {/* <ListingsBottomSheet listings={items} category={category} /> */}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
