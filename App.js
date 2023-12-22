import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneKeyboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'del') {
      setPhoneNumber(phoneNumber.slice(0, -1));
    } else if (phoneNumber.length < 11) { // Limit the phone number to 11 characters
      setPhoneNumber(phoneNumber + key);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text> {/* Display the phone number at the top */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleKeyPress('1')} style={styles.key}>
          <Text style={styles.keyText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('2')} style={styles.key}>
          <Text style={styles.keyText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('3')} style={styles.key}>
          <Text style={styles.keyText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleKeyPress('4')} style={styles.key}>
          <Text style={styles.keyText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('5')} style={styles.key}>
          <Text style={styles.keyText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('6')} style={styles.key}>
          <Text style={styles.keyText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleKeyPress('7')} style={styles.key}>
          <Text style={styles.keyText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('8')} style={styles.key}>
          <Text style={styles.keyText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('9')} style={styles.key}>
          <Text style={styles.keyText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleKeyPress('*')} style={styles.key}>
          <Text style={styles.keyText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('0')} style={styles.key}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleKeyPress('#')} style={styles.key}>
          <Text style={styles.keyText}>#</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleKeyPress('del')} style={styles.key}>
          <Text style={styles.keyText}>DEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002133', // Background color of the device
  },
  row: {
    flexDirection: 'row',
  },
  key: {
    padding: 20,
    margin: 5,
    borderRadius: 20, // Oval radius
    backgroundColor: '#000', // Background color of the key
  },
  keyText: {
    color: '#fff', // Black text color
    fontSize: 20,
  },
  phoneNumber: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
});

export default PhoneKeyboard;
