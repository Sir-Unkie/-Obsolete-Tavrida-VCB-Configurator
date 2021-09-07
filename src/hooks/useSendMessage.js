import { useState } from 'react';
import { EmailJsSend } from '../EmailJS/EmailJsSend';

export const useSendMessage = () => {
  const [status, setStatus] = useState('initial');
  const [alertMessage, setAlertMessage] = useState('');

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
      await EmailJsSend(customerName, customerEmail, VCBcode);
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
