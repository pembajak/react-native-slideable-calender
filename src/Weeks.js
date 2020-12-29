import React from 'react';
import { View, Text, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default ({
  weekStartsOn,
  highlightColor,
  normalColor,
  dayStyle,
  selectedDate,
}) => {
  const weekStartsOnMinnor = weekStartsOn % 7;
  const weekTranformed = [
    ...WEEK.slice(weekStartsOnMinnor),
    ...WEEK.slice(0, weekStartsOnMinnor),
  ];
  return (
    <View
      style={{
        width,
        height: 30,
        flexDirection: 'row',
      }}
    >
      {weekTranformed.map((day, index) => {
        var color =
          selectedDate.getDay() - 1 == index ? highlightColor : normalColor;
        return (
          <View
            style={{
              flex: 1,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={day}
          >
            <Text
              style={[
                {
                  color: 'gray',
                  fontSize: 12,
                },
                dayStyle,
                {
                  color: color,
                },
              ]}
            >
              {day}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
