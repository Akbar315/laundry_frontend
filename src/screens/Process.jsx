import {View, Text} from 'react-native';
import React from 'react';

const Process = () => {
  const datas = [
    {
      name: 'Tagging',
      details: 'Clothes are tagged to avoid potential mix-ups.',
    },
    {
      name: 'Sorting',
      details:
        'Clothes are carefully sorted into different loads based on their specialized cleaning needs.',
    },
    {
      name: 'Garment Inspection',
      details:
        'Garment is inspected for stains, potential color bleeds, snags and tears. Assess fiber type for cleaning needs and ensure pockets are empty.',
    },
    {
      name: 'Stain Removal',
      details:
        'Pre-wash treatment for all visible stains with specialized stain removers. Focus on tough spots for thorough cleaning.',
    },
    {
      name: 'Customized Clean',
      details:
        'Garment-specific solvent-based cleaning tailored to fabric type for gentle and thorough care.',
    },
    {
      name: 'Finishing',
      details:
        'Finishing treatments like starch, zari polish, fabric softener, stain repellant etc. applied as per requirement.',
    },
    {
      name: 'Steam Press',
      details:
        'A high-pressure vacuum steam press is done for that crisp and perfect finishing.',
    },
    {
      name: 'Quality Check',
      details:
        'Multiple checks to ensure exceptional quality and satisfaction.',
    },
    {
      name: 'Packaging',
      details:
        'Flexible packaging options to suit your preference. Choose whether you like your clothes folded or hanged.',
    },
  ];
  return (
    <View>
      <Text style={{color: 'white', fontSize: 25}}>
        Our dry cleaning processes
      </Text>

      <View>
        {datas.map(data => (
          <View
          
            style={{
              backgroundColor: '#2a2a2a',
            //   marginHorizontal: 15,
              marginBottom: 15,
              borderRadius: 8,
              padding: 15,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
            }}>
            <Text style={{color: 'white', fontSize:20}}>{data.name}</Text>
            <Text style={{color: 'white',width:"90%"}}>{data.details}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Process;
