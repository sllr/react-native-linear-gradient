import * as React from "react";
import * as ReactNative from "react-native";

declare module "react-native-linear-gradient" {
  export interface LinearGradientProps extends ReactNative.ViewProperties {
    colors: string[];
    start?: any;
    end?: any;
    locations?: number[];
  }

  export class LinearGradient extends React.Component<
    LinearGradientProps,
    any
  > {}

  export default LinearGradient;
}
