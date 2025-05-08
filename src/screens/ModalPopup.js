import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ModalPopup = ({ visible, onClose, title, content }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000aa',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 20,
            elevation: 10,
            shadowColor: '#000',
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                ✕
              </Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable Content */}
          <ScrollView
            style={{
              marginTop: 10,
              maxHeight: 300,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                lineHeight: 22,
                color: '#444',
              }}
            >
              {content}
            </Text>
          </ScrollView>

          {/* OK Button */}
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              marginTop: 20,
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: 'center',
            }}
            onPress={onClose}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopup;
