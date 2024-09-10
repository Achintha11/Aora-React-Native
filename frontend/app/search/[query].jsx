import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  return (
    <View>
      <Text class>Search</Text>
    </View>
  );
};

export default Search;
