import Header from "@/components/Header";
import { ArtistModel } from "@/model/ArtistModel";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function TabOneScreen() {
  const [artists, setArtists] = useState<ArtistModel[]>([]);

  async function fetchArtists() {
    try {
      const response = await fetch('https://api.deezer/genre/186/artists&limmit=7');
      const json = await response.json();
      setArtists(json.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <SafeAreaView className=''>
      <Header />

      <Text className="text-4xl mx-4 font-[Roboto-Bold]">Inicio</Text>

      <View className="my-4">
        <TouchableOpacity className="flex-row justify-between mx-4">
          <Text className="text-2xl">O melhor do Gospel</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

