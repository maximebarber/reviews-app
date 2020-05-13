import React from 'react';
import {
  View, Text, StyleSheet, Button, TextInput,
} from 'react-native';
import { Formik, Form } from 'formik';
import { globalStyles, green } from '../styles/global';

const ReviewForm = ({ addReview }) => (
  <View style={globalStyles.container}>
    <Formik
      initialValues={{ title: '', body: '', rating: '' }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addReview(values);
      }}
    >
      {(formikProps) => (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder="Review title"
            onChangeText={formikProps.handleChange('title')}
            value={formikProps.values.title}
          />
          <TextInput
            style={globalStyles.input}
            multiline
            placeholder="Review body"
            onChangeText={formikProps.handleChange('body')}
            value={formikProps.values.body}
          />
          <TextInput
            style={globalStyles.input}
            keyboardType="numeric"
            placeholder="Rating (1 - 5)"
            onChangeText={formikProps.handleChange('rating')}
            value={formikProps.values.rating}
          />
          <Button title="Submit" color={green} onPress={() => formikProps.handleSubmit()} />
        </View>
      )}
    </Formik>
  </View>
);

export default ReviewForm;
