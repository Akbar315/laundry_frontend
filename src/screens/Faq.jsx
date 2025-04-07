import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Dropdowncomponent from './Dropdowncomponent';

const Faq = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#121212'}}>
      <View style={{backgroundColor: 'orange', padding: 15, marginBottom: 10}}>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          Frequently Asked Questions
        </Text>
      </View>
      <View style={{flexDirection: 'column', alignItems: 'center',marginHorizontal:20,borderRadius:25}}>
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />

        <Dropdowncomponent
          question="How long does dry cleaning typically take?"
          answer="Standard dry cleaning usually takes 2-3 business days. Express service is available for a 24-hour turnaround."
        />

        <Dropdowncomponent
          question="How does the dry cleaning process work?"
          answer="Dry cleaning uses a solvent instead of water to clean fabrics, ensuring delicate materials remain undamaged."
        />

        <Dropdowncomponent
          question="Is dry cleaning safe for all types of fabrics?"
          answer="Yes, but some fabrics require special attention. Our experts assess each item to determine the best cleaning method."
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
        <Dropdowncomponent
          question="What all services does Uclean offers?"
          answer="Yes,Uclean offers many services like laundry, premium laundry,drycleaning,steam ironing,shoe cleaning,bag cleaning,and sofa cleaning"
        />
      </View>
    </ScrollView>
  );
};

export default Faq;
