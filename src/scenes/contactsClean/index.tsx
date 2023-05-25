import React, { useState, useEffect } from 'react'
import { Text, View, PermissionsAndroid, Platform, Image, TouchableOpacity } from 'react-native';
import Contacts, { Contact, PhoneNumber } from 'react-native-contacts';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from 'src/themes/images';
import { getStylesGlobal } from '../cssglobal';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { isEqual } from 'lodash';

const ContactsCleaning = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [duplicateNames, setDuplicateNames] = useState<Contact[]>([]);
  const [duplicateNumbers, setDuplicateNumbers] = useState<Contact[]>([]);
  const [duplicateEmails, setDuplicateEmails] = useState<Contact[]>([]);
  const [incompleteNames, setIncompleteNames] = useState<Contact[]>([]);
  const [incompleteNumbers, setIncompleteNumbers] = useState<Contact[]>([]);
  const [incompleteEmails, setIncompleteEmails] = useState<Contact[]>([]);
  const styles = getStylesGlobal();
  const Duplicate = [
    { image: images.icContact2, title: 'Duplicate Names', count: `${duplicateNames.length} Contacts` },
    { image: images.icContact3, title: 'Duplicate Numbers', count: `${duplicateNumbers.length} Contacts` },
    { image: images.icContact4, title: 'Duplicate Emails', count: `${duplicateEmails.length} Contacts` },
  ];
  const Incomeplete = [
    { image: images.icContact5, title: 'Incomplete Names', count: `${incompleteNames.length} Contacts` },
    { image: images.icContact6, title: 'Incomplete Numbers', count: `${incompleteNumbers.length} Contacts` },
    { image: images.icContact7, title: 'Incomplete Emails', count: `${incompleteEmails.length} Contacts` },
  ];

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const fetchedContacts = await Contacts.getAll();
      setContacts(fetchedContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const findDuplicatesByName = () => {
    const duplicates: Contact[] = [];
    const names = contacts.map((contact) => contact.givenName);
    const uniqueNames = Array.from(new Set(names));

    uniqueNames.forEach((name) => {
      const contactsWithName = contacts.filter((contact) => contact.givenName === name);
      if (contactsWithName.length > 1) {
        duplicates.push(...contactsWithName);
      }
    });

    return duplicates;
  };

  const findDuplicatesByNumber = () => {
    const duplicates: Contact[] = [];
    const numbers = contacts.flatMap((contact) =>
      contact.phoneNumbers.map((number) => number.number)
    );

    const duplicateNumbers = numbers.filter((number, index, array) =>
      array.indexOf(number) !== index
    );

    duplicateNumbers.forEach((number) => {
      const contactsWithNumber = contacts.filter((contact) =>
        contact.phoneNumbers.some((phoneNumber) => phoneNumber.number === number)
      );

      if (contactsWithNumber.length > 1) {
        duplicates.push(...contactsWithNumber);
      }
    });

    return duplicates;
  };

  const findDuplicatesByEmail = () => {
    const duplicates: Contact[] = [];
    const emailAddresses = contacts.flatMap((contact) =>
      contact.emailAddresses.map((email) => email.email)
    );

    const duplicateEmails = emailAddresses.filter((email, index, array) =>
      array.indexOf(email) !== index
    );

    duplicateEmails.forEach((email) => {
      const contactsWithEmail = contacts.filter((contact) =>
        contact.emailAddresses.some((emailObj) => emailObj.email === email)
      );

      if (contactsWithEmail.length > 1) {
        duplicates.push(...contactsWithEmail);
      }
    });

    return duplicates;
  };

  const findIncompleteContactsByName = () => {
    const incompleteContacts: Contact[] = [];

    contacts.forEach((contact) => {
      if (!contact.givenName && !contact.familyName) {
        incompleteContacts.push(contact);
      }
    });

    return incompleteContacts;
  };





  const findIncompleteContactsByNumber = () => {
    const incompleteContacts: Contact[] = [];

    contacts.forEach((contact) => {
      if (contact.phoneNumbers.length === 0) {
        incompleteContacts.push(contact);
      }
    });

    return incompleteContacts;
  };

  const findIncompleteContactsByEmail = () => {
    const incompleteContacts: Contact[] = [];

    contacts.forEach((contact) => {
      if (contact.emailAddresses.length === 0) {
        incompleteContacts.push(contact);
      }
    });

    return incompleteContacts;
  };
  // ...

  useEffect(() => {
    const fetchData = async () => {
      await fetchContacts();
      setDuplicateNames(findDuplicatesByName());
      setDuplicateNumbers(findDuplicatesByNumber());
      setDuplicateEmails(findDuplicatesByEmail());
      setIncompleteNames(findIncompleteContactsByName());
      setIncompleteNumbers(findIncompleteContactsByNumber());
      setIncompleteEmails(findIncompleteContactsByEmail());
    };

    fetchData();
  }, [contacts]);





  const findIncomplete = (propertyName: keyof Contact) => {
    return contacts.filter((contact) => !contact[propertyName]);
  };


  console.log(duplicateNames)

  const requestContactsPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app requires access to your contacts.',
            buttonPositive: 'OK',
          }
        );
        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Contacts permission granted.');
          // Gọi hàm getContacts() để lấy danh sách liên hệ sau khi quyền được cấp
          fetchContacts();
        } else {
          console.log('Contacts permission denied.');
        }
      } catch (error) {
        console.log('Error requesting contacts permission:', error);
      }
    }
  };

  useEffect(() => {
    requestContactsPermission();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('AllContacts')}
          style={[
            styles.backgroundElement,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={images.icContact1} />
            <View>
              <Text style={[styles.title, { paddingLeft: 10 }]}>All Contacts</Text>
              <Text style={[styles.textGray, { paddingLeft: 10 }]}>{contacts.length} Contacts</Text>
            </View>
          </View>
          <View>
            <Image source={images.icRightGray} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.caption, { paddingVertical: 19 }]}>Duplicate</Text>
        <FlatList
          data={Duplicate}
          numColumns={1}
          renderItem={({ item }) => (
            <View
              style={[
                styles.backgroundElement,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={item.image} />
                <View>
                  <Text style={[styles.title, { paddingLeft: 10 }]}>{item.title}</Text>
                  <Text style={[styles.textGray, { paddingLeft: 10 }]}>{item.count}</Text>
                </View>
              </View>
              <View>
                <Image source={images.icRightGray} />
              </View>
            </View>
          )}
        />
        <Text style={[styles.caption, { paddingVertical: 19 }]}>Incomeplete</Text>
        <FlatList
          data={Incomeplete}
          numColumns={1}
          style={{ marginBottom: 150 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.backgroundElement,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={item.image} />
                <View>
                  <Text style={[styles.title, { paddingLeft: 10 }]}>{item.title}</Text>
                  <Text style={[styles.textGray, { paddingLeft: 10 }]}>{item.count}</Text>
                </View>
              </View>
              <View>
                <Image source={images.icRightGray} />
              </View>
            </View>
          )}
        />

      </ScrollView >
    </SafeAreaView >
  );
}


export default ContactsCleaning
