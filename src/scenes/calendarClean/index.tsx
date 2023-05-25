import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStyles } from './styles';
import CalendarEvents, { CalendarEventReadable } from 'react-native-calendar-events';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

const CalendarClean = () => {
  const styles = getStyles();
  const [calendarPermission, setCalendarPermission] = useState('');
  const [events, setEvents] = useState<CalendarEventReadable[]>([]);

  useEffect(() => {
    requestCalendarPermission();
  }, []);

  const requestCalendarPermission = async () => {
    const permissionStatus = await CalendarEvents.requestPermissions();
    setCalendarPermission(permissionStatus);
    if (permissionStatus === 'authorized') {
      loadEvents();
    } else {
      Alert.alert('Permission Denied', 'Calendar permission is required to view events.');
    }
  };
  const sortEventsByDate = (events: CalendarEventReadable[]) => {
    return events.sort((a, b) => {
      const dateA = new Date(moment(a.startDate).startOf('day').toDate());
      const dateB = new Date(moment(b.startDate).startOf('day').toDate());
      return dateA.getTime() - dateB.getTime();
    });
  };
  const loadEvents = async () => {
    try {
      const currentDate = moment();
      const startDate = currentDate.startOf('day').toDate().toISOString();
      const endDate = currentDate.endOf('year').toDate().toISOString();
      const fetchedEvents = await CalendarEvents.fetchAllEvents(startDate, endDate, []);
      const sortedEvents = sortEventsByDate(fetchedEvents);
      setEvents(sortedEvents);
    } catch (error) {
      console.log('Error fetching events:', error);
    }
  };

  useEffect(() => {
    if (calendarPermission === 'authorized') {
      loadEvents();
    }
  }, [calendarPermission]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {events.map(event => (
          <View key={event.id} style={styles.oneCalendar}>
            <Text style={styles.titleCalendar}>{event.title}</Text>
            <Text style= {styles.dayCalendar}>{moment(event.startDate).format('DD MMMM YYYY')}</Text>
            {/* Display other event information */}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CalendarClean
