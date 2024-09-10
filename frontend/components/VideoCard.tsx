import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({ video: { title, thumbnail, video, prompt } }) => {
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState({});

  return (
    <View className="flex-col items-center px-4 mb-14 ">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] justify-center items-center p-0.5 rounded-lg border border-secondary-200">
            <Image
              source={images.profile}
              resizeMode="cover"
              className="w-full h-full rounded-lg"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular "
              numberOfLines={1}
            >
              Achintha Peiris
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
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
          activeOpacity={0.7}
          className="w-full h-60 rounded-xl mt-3 relative justify-center  items-center "
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3 "
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
