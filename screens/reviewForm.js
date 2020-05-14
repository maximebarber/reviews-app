import React from 'react';
import {
  View, Button, TextInput,
} from 'react-native';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { globalStyles, green } from '../styles/global';

const reviewSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number between 1 and 5', (val) => parseInt(val, 10) < 6 && parseInt(val, 10) > 0),
});

const ReviewForm = ({ addReview }) => (
  <View style={globalStyles.container}>
    <Formik
      initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={reviewSchema}
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
