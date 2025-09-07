

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from "react-native-gifted-charts";
import { maincolor } from "../constant/colors";
import * as Animatable from 'react-native-animatable';
// const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
 const data = [

    {value: 15, label: 'Mon'},

    {value: 30, label: 'Tue'},

    {value: -23, label: 'Wed'},

    {value: 40, label: 'Thu'},

    {value: -16, label: 'Fri'},

    {value: 40, label: 'Sat'},

  ];
const Chart = () => {

  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];
  return (
    <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate" style={styles.container}>
    
      <LineChart
        data={data}
        areaChart
        color={maincolor}
        thickness={3}
        dataPointsColor={"red"}
        barWidth={100}
        isAnimated
      />
      <BarChart
        barWidth={22}
        noOfSections={3}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
      />
        <PieChart data={data} />   
    </Animatable.View>
  );
};


const styles = StyleSheet.create({
  container:{
    width:"100vw",
    flex:1,
    marginTop:50,
    display:"flex",
    gap:30,
    justifyContent:"center",
    alignItems:"center",
    padding:10
  }
})

export default Chart;
