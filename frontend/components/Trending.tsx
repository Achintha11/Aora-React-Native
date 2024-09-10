import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useRef, useState } from "react";
import { Image } from "react-native";
import { icons } from "@/constants";
import { ResizeMode, Video } from "expo-av";

const zoomIn = {
  0: {
    scale: 0.8,
  },

  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: {
    scale: 1.1,
  },

  1: {
    scale: 0.8,
  },
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  console.log(status);
  console.log(item.video);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem.id === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          ref={videoRef}
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(playbackStatus) => setStatus(playbackStatus)}
          onError={(error) => {
            console.error("Video error:", error);
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center "
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item);
    }
  };
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
    />
  );
};

export default Trending;
