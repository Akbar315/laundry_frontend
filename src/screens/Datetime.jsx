import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const Datetime = ({ Slecteddate, setSelecteddate , Slectedtime, setSlectedtime}) => {
//   const [Slecteddate, setSelecteddate] = useState(
//     moment().format('YYYY-MM-DD'),
//   );
//   const [Slectedtime, setSlectedtime] = useState(null);
  const [Availabletime, setAvailabletime] = useState([]);

  const dates = Array.from({length: 7}, (_, i) => {
    const day = moment().add(i, 'days');
    return {day: day.format('ddd'), date: day.format('YYYY-MM-DD')};
  });

  const getAvailabletimeslots = (date)=>{
    const currenttime = moment();
    const selectedday = moment(date , "YYYY-MM-DD");
    const alltimeslots =[
      "9:00 AM to 10:00 AM",
      "10:00 AM to 11:00 AM",
      "11:00 AM to 1:00 PM",
      "1:00 PM to 3:00 PM",
      "3:00 PM to 5:00 PM",
      "5:00 PM to 7:00 PM",
      "7:00 PM to 8:00 PM",
      "8:00 PM to 9:00 PM"

    ];

    if(selectedday.isSame(moment(),'day')){
        return alltimeslots.filter((slot) =>{
            const slotstarttime = moment(slot.split(" to ")[0], "hh:mm A")
            return slotstarttime.isAfter(currenttime);
        });

    }
    return alltimeslots;

  }

useEffect(()=>{
    setAvailabletime(getAvailabletimeslots(Slecteddate));
},[Slecteddate]);

  return (
    <View style={{}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Select Drop-off Date
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        style={{flexDirection: 'row',marginTop:20 }}>
        {dates.map(({day, date}) => (
          <TouchableOpacity
            key={date}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderWidth: 1,
              borderColor: 'rgba(52, 52, 52, 1)',
              borderRadius: 10,
              marginRight: 10,
              alignItems: 'center',
              backgroundColor: Slecteddate === date ? '#007bff' : '#000',
              width:70
            }}
            onPress={() => setSelecteddate(date)}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                backgroundColor: Slecteddate === date ? '#007bff' : '#000',
              }}>
              {day}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                backgroundColor: Slecteddate === date ?'#007bff' : '#000',
              }}>
              {moment(date).format('DD')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{marginTop:54,flexDirection:"column",gap:20}}>
        <Text style={{color:"white",textAlign:"center",fontSize:20}}>Select Drop-off Time</Text>
              <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                {Availabletime.length > 0 ? (
                  Availabletime.map((time) => (
                    <TouchableOpacity
                      key={time}
                      style={{
                        padding: 15,
                        marginBottom: 10,
                        width: "48%",
                        borderWidth: 1,
                        borderColor: 'rgba(52, 52, 52, 1)',
                        borderRadius: 10,
                        backgroundColor: Slectedtime === time ? "#007bff" : "#000",
                        alignItems: "center",
                      }}
                      onPress={() => setSlectedtime(time)}
                    >
                      <Text style={{ fontSize: 13, color: Slectedtime === time ? "#fff" : "white" }}>{time}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={{ fontSize: 16, color: "#999", textAlign: "center", width: "100%" }}>No available slots</Text>
                )}
              </View>
        
      </View>
    </View>
  );
};

export default Datetime;
