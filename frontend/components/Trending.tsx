import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="w-64 h-64 bg-orange-400 m-2 items-center justify-center">
          <Text className="text-3xl">Item {item.id}</Text>
        </View>
      )}
      horizontal
    />
  );
};

export default Trending;
