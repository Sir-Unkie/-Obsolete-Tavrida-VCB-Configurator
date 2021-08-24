import React, { useState } from 'react';
import styles from './VCBConfigurator.module.scss';
import CombinedInputs from '../CombinedInputs/CombinedInputs';
import CustomButton from '../CustomButton/CustomButton';
import MyInput from '../MyInput/MyInput';
import VCBImage from '../VCBImage/VCBImage';
import emailjs from 'emailjs-com';
import Portal from '../Alert/Portal';
import Alert from '../Alert/Alert';

const VCBConfigurator = ({
  vcbState,
  clearFields,
  imageUrl,
  changed,
  CodeTemplate,
}) => {
  const [status, setStatus] = useState('initial');
  const [alertMessage, setAlertMessage] = useState('');
  const values = Object.keys(vcbState).map(key => {
    return vcbState[key].value;
  });

  let code;
  switch (CodeTemplate) {
    case 'LD':
      code = `VCB15_LD1_16.F(${values[0]}_${values[1]}_${values[2]}_${values[3]}_${values[4]}_${values[5]}_${values[6]}_${values[7]}_${values[8]})`;
      break;
    case 'MD':
      code = `VCB15_MD1_16.F(${values[0]}_${values[1]}_${values[2]}_${values[3]}_${values[4]}_${values[5]}_${values[6]}_${values[7]}_${values[8]})`;
      break;
    case 'HD':
      code = `VCB15_HD1_16.F(${values[0]}_${values[1]}_${values[2]}_${values[3]}_${values[4]}_${values[5]}_${values[6]}_${values[7]}_${values[8]})`;
      break;

    default:
      break;
  }

  const quoteHandler = async () => {
    const templateParams = {
      to_name: 'Dmitry',
      Customer_Name: localStorage.getItem('displayName'),
      Customer_Email: localStorage.getItem('email'),
      VCB_Code: code,
    };
    //   first we need to check if all the values are filled

    if (values.indexOf('0') !== -1) {
      alert('Set all the VCB parameters');
      return;
    }
    // if everything is ok send an email
    try {
      setStatus('loading');
      setAlertMessage('Sending your message... ');
      await emailjs.send(
        'service_8jxn9mf',
        'template_it50sht',
        templateParams,
        'user_tDawHOAXBaCAXatImtJRc'
        //   show the pop up with success information or handle an error
      );
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
    // console.log(templateParams['VCB_Code']);
  };
  return (
    <React.Fragment>
      <Portal>
        <Alert message={alertMessage} messageType={status}></Alert>
      </Portal>
      <div className={styles.VCBcontainer}>
        <CombinedInputs>
          {Object.keys(vcbState).map(key => {
            return (
              <MyInput
                value={vcbState[key].value}
                key={key}
                options={vcbState[key].adjustedOptions}
                parName={key}
                changed={changed}
              ></MyInput>
            );
          })}
          <div className='buttonsContainer'>
            <CustomButton clickHandler={quoteHandler}>
              Make an order
            </CustomButton>
            <CustomButton inverted={true} clickHandler={clearFields}>
              Clear
            </CustomButton>
          </div>
        </CombinedInputs>
        <VCBImage imageUrl={imageUrl}></VCBImage>
      </div>
    </React.Fragment>
  );
};

export default VCBConfigurator;
