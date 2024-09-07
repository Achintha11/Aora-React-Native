import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";
import { Image } from "react-native";
import { useRouter } from "expo-router"; // To navigate to another page

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/index1"); // Navigate to sign-in after 5 seconds
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [router]);

  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-full h-full items-center justify-center px-4">
            <Image
              source={images.logo}
              className="w-[200px] h-[200px]"
              resizeMode="contain"
            />

            {loading && (
              <ActivityIndicator
                size="large"
                color="#FF9C01"
                className="mt-5"
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default Landing;
