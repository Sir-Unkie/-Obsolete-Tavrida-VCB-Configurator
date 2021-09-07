import React from 'react';
import styles from './VCBConfigurator.module.scss';
import CombinedInputs from '../CombinedInputs/CombinedInputs';
import CustomButton from '../CustomButton/CustomButton';
import MyInput from '../MyInput/MyInput';
import VCBImage from '../VCBImage/VCBImage';
import Portal from '../Alert/Portal';
import Alert from '../Alert/Alert';
import { useSendMessage } from '../../hooks/useSendMessage';

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
  const { status, alertMessage, sendMessage } = useSendMessage();

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
    const customerName = localStorage.getItem('displayName');
    const customerEmail = localStorage.getItem('email');
    const VCBcode = code;
    sendMessage(values, customerName, customerEmail, VCBcode);
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
