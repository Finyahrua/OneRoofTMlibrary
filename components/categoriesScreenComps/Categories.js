import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import categoriesData from "../../assets/data/categoriesData";

const Categories = () => {
  const renderCategory = ({ item }) => {
    return (
      <View
        style={{
          marginTop: item.id == 1 || item.id == 2 ? 42 : 28,
          flex: 1 / 2,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{
              width:160,
              height: 146,
              borderRadius: 20,
              top: 0,
              marginLeft: item.id % 2 != 0 ? -20 : 20,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 5,
            //marginLeft: 9,
            alignSelf: "center",
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 10 ,flex:1}}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 24, fontWeight: "500", marginRight: 48 }}>
          Categories of services
        </Text>
        <FontAwesome
          style={{ marginRight: 25 }}
          name="list-ul"
          size={24}
          color="black"
        />
        <View style={{ borderBottomColor: "black", borderBottomWidth: 3 }}>
          <MaterialIcons name="grid-view" size={24} color="black" style={{}} />
        </View>
      </View>
      <FlatList
        data={categoriesData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default Categories;
