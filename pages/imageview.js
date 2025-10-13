import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      const savedImage = await AsyncStorage.getItem("profileImage");
      
      if (savedImage) setProfileImage(savedImage);
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     
        <Image
          source={{ uri: profileImage }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
       />
    </View>
  );
}
