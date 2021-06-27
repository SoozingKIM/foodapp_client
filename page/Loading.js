/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";

const LoadingPage = () => {
  return (
    <SafeAreaView style={stylesForLoading.wrap}>
      <Image
        style={{ width: 241, height: 384, marginBottom: 30, marginLeft: 10 }}
        source={require("../image/1/로딩중_토끼.png")}
      />
    </SafeAreaView>
  );
};

const stylesForLoading = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#FBF8BE",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingPage;
