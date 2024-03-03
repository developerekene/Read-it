import React from "react";

export interface Todo {
  title: string;
}

export interface ScreenWrapperType {
  bgColor: string;
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  headerContent: React.ReactNode;
  showButton?: boolean | undefined;
  
}
