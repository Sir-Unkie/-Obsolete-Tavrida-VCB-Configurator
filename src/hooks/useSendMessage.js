import { useState } from 'react';

export const useSendMessage = () => {
  const [status, setStatus] = useState('initial');
  const [alertMessage, setAlertMessage] = useState('');

  const delay = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1500);
    });
  };

  //   first we need to check if all the values are filled
  const sendMessage = async (values, customerName, customerEmail, VCBcode) => {
    if (values.indexOf('0') !== -1) {
      alert('Set all the VCB parameters');
      return;
    }
    // if everything is ok send an email
    try {
      setStatus('loading');
      setAlertMessage('Sending your message... ');

      //   here should be an interface to send data (displayName, email, code)
      await delay();

      //

      setStatus('success');
      setAlertMessage('Your order is sent successfully.');
      setTimeout(() => {
        setStatus('initial');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setAlertMessage('Something went wrong, the message was not sent!');
      setTimeout(() => {
        setStatus('initial');
      }, 2000);
    }
  };

  return { status, alertMessage, sendMessage };
};
