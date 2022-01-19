import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const CategoriesBanner = () => {
  return (
    <View style={{ backgroundColor: "#581626", height: 156.85 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 115,
              marginRight: 115,
            }}
          >
            Categories
          </Text>
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            alignItems: "center",
            height: 49.47,
            marginTop: 20,
            borderRadius: 20,
            backgroundColor: "#FFFDFD",
          }}
        >
          <Text style={{alignItems:"bottom"}}>Search for category..</Text>
        </View> */}
        <TextInput
          style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: 20,
            height: 58,
            marginTop: 15,
            // alignItems:"bottom",
            // justifyContent:"center",
            paddingHorizontal: 72,
            paddingTop:10,
            fontSize: 20,
          }}
          placeholder={"Search for category.."}
        />
      </View>
    </View>
  );
};

export default CategoriesBanner;
