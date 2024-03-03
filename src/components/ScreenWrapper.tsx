import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWrapperType } from "../utils/InterFace";

const ScreenWrapper: React.FunctionComponent<ScreenWrapperType> = ({
  bgColor,
  leftItem,
  rightItem,
  headerContent,
  showButton,
}) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.header}>
        <View style={styles.headerNavigation}>
          {leftItem}
          {rightItem}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.headerContent}
        >
          {headerContent}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        {showButton ? (
          <>
            <Pressable>
              <Text>ButtonOne</Text>
            </Pressable>
          </>
        ) : (
          <View>
            
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    height: 60,
    justifyContent: "center",
  },
  footer: {},
  headerNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {},
});
