import React from 'react';
import styles from './VCBConfigurator.module.scss';
import CombinedInputs from '../CombinedInputs/CombinedInputs';
import CustomButton from '../CustomButton/CustomButton';
import MyInput from '../MyInput/MyInput';
import VCBImage from '../VCBImage/VCBImage';
import emailjs from 'emailjs-com';

const VCBConfigurator = ({
  vcbState,
  clearFields,
  imageUrl,
  changed,
  CodeTemplate,
}) => {
  const values = Object.keys(vcbState).map(key => {
    return vcbState[key].value;
  });

  const quoteHandler = async () => {
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
      const response = await emailjs.send(
        'service_8jxn9mf',
        'service_8jxn9mf',
        templateParams
        //   show the pop up with success information or handle an error
      );
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
          <CustomButton clickHandler={quoteHandler}>Make an order</CustomButton>
          <CustomButton inverted={true} clickHandler={clearFields}>
            Clear
          </CustomButton>
        </div>
      </CombinedInputs>
      <VCBImage imageUrl={imageUrl}></VCBImage>
    </div>
  );
};

export default VCBConfigurator;
