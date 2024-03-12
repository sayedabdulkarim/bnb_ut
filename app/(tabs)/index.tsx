import { StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";

import listingsData from "@/assets/data/listing.json";
import listingsDataGeo from "@/assets/data/listing_geo.json";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  //dummy
  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);

  //state
  const [category, setCategory] = useState<string>("Tiny homes");

  //func
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Booking</Link>
      <Link href={"/listing/13334"}>Listing</Link>
      <Text>Page</Text> */}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
