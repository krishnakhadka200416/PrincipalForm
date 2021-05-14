import React from 'react';

import { ScrollView, StyleSheet, View, Image } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,Card, Input, Button, Datepicker } from '@ui-kitten/components';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const CalendarIcon = (props) => (
  

  <Image style ={{width:15, height:15}}source = {require('./Assets/calendar-outline.png')}/>
  
);

const App = () => {
 
  const prefix = useInputState();
  const gender = useInputState();
  const firstName = useInputState();
  const middleName = useInputState();
  const lastName = useInputState();
  const postfix = useInputState();
  const [date, setDate] = React.useState(new Date());
  const ssn = useInputState();
  const email = useInputState();
  const phoneNumber = useInputState();
  const alternatePhNumber = useInputState();
  
  const logConsole = () => {
      console.log("Prefix : " + prefix.value + "\n" +
      "Gender : " + gender.value + "\n" + 
      "First Name : " + firstName.value + "\n" +
      "Middle Name : " + middleName.value + "\n" +
      "Last Name : " + lastName.value + "\n" +
      "Postfix : " + postfix.value + "\n" +
      "Date : " + date.value  + "\n" +
      "SSN : " + ssn.value + "\n" +
      "Email : " + email.value + "\n" +
      "Phone Number : " + phoneNumber.value + "\n" +
      "Alternate Phone Number : " + alternatePhNumber.value)
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>

     <Card style = {{flex:1}}>
     <ScrollView>
        <Text category ='h5'>Principal</Text>
       
       <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='basic'
          placeholder='Prefix i.e. Mr, Ms'
          {...prefix}
        />
        <Input
          style={styles.input}
          status='danger'
          placeholder='[Choose Gender]'
          {...gender}
        />
      </Layout>
      <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='danger'
          placeholder='First Name'
          {...firstName}
        />
      </Layout>
      <Text style = {styles.text}>Enter the first name</Text>

      <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='basic'
          placeholder='Middle Name'
          {...middleName}
        />
      </Layout>
      <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='danger'
          placeholder='Last Name'
          {...lastName}
        />
      </Layout>
      <Text style = {styles.text}>Enter last name</Text>
      
      <Layout style={styles.rowContainer} level='1'>
      <Input
          style={styles.input}
          status='basic'
          placeholder='Postfix i.e. Dr, Jr, II'
          {...postfix}
        />
      </Layout>
        <Layout style={styles.rowContainer} level='1'>
       <Datepicker
        style={styles.input}
        placeholder='mm/dd/yyy'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
      />
      </Layout>
      <Text style = {styles.text}>Enter a date of birth or SSN</Text>
      <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='warning'
          placeholder='SSN: (000-00-0000)'
          {...ssn}
        />
      </Layout>
      <Text style = {styles.text}>Enter a social security number or Dob.</Text>
      <Layout style={styles.rowContainer} level='1'>
      <Input
          style={styles.input}
          status='basic'
          placeholder='noemail@noemail.com'
          {...email}
        />
      </Layout>
      <Layout style={styles.rowContainer} level='1'>
      <Input
          style={styles.input}
          status='basic'
          placeholder='(949)-330-3035'
          {...phoneNumber}
        />
      </Layout>
      <Layout style={styles.rowContainer} level='1'>
      <Input
          style={styles.input}
          status='basic'
          placeholder='Alternate Phone (000)-000-000 (EVC)'
          {...alternatePhNumber}
        />
      </Layout>
      <Text style = {styles.text}>Enter secondary EVC phone number (Not Required).</Text>
      <Layout style={styles.buttonContainer} level='1'>
          <Button style={styles.button} disabled ={ !(gender.value.length && firstName.value.length && lastName.value.length && (ssn.value.length || date.value.length)) } onPress ={logConsole}>
             Pull Credit Score
          </Button>
      </Layout>
      </ScrollView>
    </Card>
  </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  
  input: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:3
  },
  buttonContainer:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin:3
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: '#3366FF',
  },
  text:{
    color:'grey', 
    fontSize:12,
    margin:5
  },
  button:{
    color:'blue'
  }
});

export default App;
