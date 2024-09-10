import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons, images } from "../../constants";
import EmptyState from "@/components/EmptyState";
import React from "react";
import VideoCard from "@/components/VideoCard";
import InfoBox from "@/components/InfoBox";

const Profile = () => {
  const logout = async () => {
    router.replace("/sign-in");
  };

  const videos = [
    {
      title: "Get inspired to code",
      thumbnail: "https://i.ibb.co/tJBcX20/Appwrite-video.png",
      video: "https://player.vimeo.com/video/949579770?h=897cd5e781",
      prompt:
        "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
    },
    {
      title: "How AI Shapes Coding Future",
      thumbnail: "https://i.ibb.co/Xkgk7DY/Video.png",
      video: "https://player.vimeo.com/video/949581999?h=4672125b31",
      prompt: "Picture the future of coding with AI. Show AR VR",
    },
    {
      title: "Dalmatian's journey through Italy",
      thumbnail: "https://i.ibb.co/CBYzyKh/Video-1.png",
      video: "https://player.vimeo.com/video/949582778?h=d60220d68d",
      prompt:
        "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
    },
    {
      title: "Meet small AI friends",
      thumbnail: "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
      video: "https://player.vimeo.com/video/949616422?h=d60220d68d",
      prompt:
        "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
    },
    {
      title: "Find inspiration in Every Line",
      thumbnail: "https://i.ibb.co/mGfCYJY/Video-2.png",
      video: "https://player.vimeo.com/video/949617485?h=d60220d68d",
      prompt:
        "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
    },
    {
      title: "Japan's Blossoming temple",
      thumbnail: "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
      video: "https://player.vimeo.com/video/949618057?h=d60220d68d",
      prompt:
        "Create a captivating video journey through Japan's Sakura Temple",
    },
    {
      title: "A Glimpse into Tomorrow's VR World",
      thumbnail: "https://i.ibb.co/C5wXXf9/Video-3.png",
      video: "https://player.vimeo.com/video/949620017?h=d60220d68d",
      prompt: "An imaginative video envisioning the future of Virtual Reality",
    },
    {
      title: "A World where Ideas Grow Big",
      thumbnail: "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
      video: "https://player.vimeo.com/video/949620200?h=d60220d68d",
      prompt:
        "Make a fun video about hackers and all the cool stuff they do with computers",
    },
  ];

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={images.profile}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title="Achintha Peiris"
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title={videos.length || 0}
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
