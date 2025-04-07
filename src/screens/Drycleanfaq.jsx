import {View, Text} from 'react-native';
import React from 'react';
import Dropdowncomponent from './Dropdowncomponent';

const Drycleanfaq = () => {
  return (
    <View>
      <Text style={{color: 'white', fontSize: 25}}>
        Frequently Asked Questions
      </Text>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#2a2a2a ',
        }}>
        <Dropdowncomponent
          question="What types of items can be dry cleaned?"
          answer="We dry clean a wide range of items, including suits, dresses, coats, silk garments, wool sweaters, ties, and other delicate fabrics not suitable for water washing."
        />
        <Dropdowncomponent
          question="How long does dry cleaning typically take?"
          answer="Standard dry cleaning usually takes 2-3 business days. We also offer express service for an additional fee, which can be completed in 24 hours."
        />
        <Dropdowncomponent
          question="How does the dry cleaning process work?"
          answer="Dry cleaning uses solvents to clean clothes without water. The process involves pre-treating stains, cleaning in a special machine, and then pressing or steaming the garments."
        />
        <Dropdowncomponent
          question="Is dry cleaning safe for all types of fabrics?"
          answer="While dry cleaning is safe for most fabrics, some extremely delicate items may require special care. We always check care labels and use appropriate cleaning methods."
        />
      </View>
    </View>
  );
};

export default Drycleanfaq;
