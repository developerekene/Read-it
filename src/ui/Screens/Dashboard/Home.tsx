import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../../components/ScreenWrapper";

const Home: React.FunctionComponent = () => {
  return (
    <ScreenWrapper
      bgColor={"#ffffff"}
      leftItem={
        <>
          <Text>Back Button</Text>
        </>
      }
      rightItem={
        <>
          <Text>Menu Button</Text>
        </>
      }
      headerContent={
        <>
          <Text>this is the header content</Text>
        </>
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
