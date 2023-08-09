import {FlatList, View} from "react-native";
import React from "react";
import {HotelCard} from "./HotelCard";
import {rw} from "../../../config/scale";

export function HotelList({hotels}) {
  const itemLength = rw(260) + rw(10);

  function renderItem({item}) {
    return <HotelCard item={item} />;
  }
  const getItemLayout = (data, index) => ({
    length: itemLength,
    offset: itemLength * index,
    index,
  });

  return (
    <View>
      <FlatList
        data={hotels}
        keyExtractor={item => item?.place_id}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}
