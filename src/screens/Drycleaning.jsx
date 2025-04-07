import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Drycleaningabout from './Drycleaningabout';
import Process from './Process';
import Drycleanfaq from './Drycleanfaq';

const Drycleaning = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);
  const [Selectedsection, setSelectedsection] = useState('About');

  const handleScrollTo = (ref, label) => {
    setSelectedsection(label);
    ref.current.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({y, animated: true});
      },
      error => console.log('measureLayout error:', error),
    );
  };
  const renderSections = () => {
    const sections = [
      {label: 'About', ref: aboutRef},
      {label: 'Our Process', ref: processRef},
      {label: 'FAQ', ref: faqRef},
    ];

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#1F1F1F',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        {sections.map(section => (
          <TouchableOpacity
            key={section.label}
            style={{alignItems: 'center'}}
            onPress={() => handleScrollTo(section.ref, section.label)}>
            <Text
              style={{
                color: Selectedsection === section.label ? 'blue' : 'white',
                fontSize: 14,
                fontWeight: Selectedsection === section.label ? 'bold' : '500',
              }}>
              {section.label}
            </Text>
            {Selectedsection === section.label && (
              <View
                style={{
                  height: 3,
                  width: 20,
                  backgroundColor: 'blue',
                  marginTop: 5,
                  borderRadius: 1.5,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View style={{backgroundColor: 'orange'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'white',
            fontWeight: 500,
          }}>
          Dry Cleaning
        </Text>
      </View>
      {renderSections()}
      <ScrollView ref={scrollViewRef} style={{flex: 1 ,padding:20 }}>
        <View ref={aboutRef}>
          <Drycleaningabout />
        </View>
        <View ref={processRef}>
          <Process />
        </View>

        <View ref={faqRef}>
          <Drycleanfaq />
        </View>
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Drycleaning;
