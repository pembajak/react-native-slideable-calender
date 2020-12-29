import * as React from 'react';

import CalendarStrip from '@pembajak/react-native-slideable-calender';

export default function App() {
  return (
    <CalendarStrip
      selectedDate={new Date()}
      highlightColor={'#C33427'}
      normalColor={'#CCCCCC'}
      onPressGoToday={() => {}}
      onPressDate={(date) => {
        console.log(date);
        this.setState({
          selectedDate: date,
        });
      }}
      markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
      weekStartsOn={1}
    />
  );
}
