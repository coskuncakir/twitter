import React from "react";
import TextTitle from "../components/text-title";

export default {
  title: "Typography",
};

export const Title = () => (
  <div>
    <TextTitle>Hello world</TextTitle>
    <TextTitle bold={false}>Hello world</TextTitle>
  </div>
);
