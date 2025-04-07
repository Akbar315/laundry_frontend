import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dropdowncomponent = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{ backgroundColor: '#1b1b1b', }}>
      <TouchableOpacity
        style={{
          padding: 15,
          borderBottomWidth: expanded ? 0 : 1,
          borderColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap:10
        }}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold',width:"95%" }}>{question}</Text>
        <Text style={{ color: 'white', fontSize: 20 }}>{expanded ? '▼': '▲'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={{ padding: 15, backgroundColor: '#252525',borderColor:'blue',borderBottomWidth:1 }}>
          <Text style={{ color: '#ddd', fontSize: 14 }}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

export default Dropdowncomponent;
