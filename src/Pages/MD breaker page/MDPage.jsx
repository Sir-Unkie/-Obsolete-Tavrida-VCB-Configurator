// import React from 'react';
// import CombinedInputs from '../../Components/CombinedInputs/CombinedInputs';
// import CustomButton from '../../Components/CustomButton/CustomButton';
// import MyInput from '../../Components/MyInput/MyInput';
// import VCBImages from '../../Components/VCBImage/VCBImage';

// import { clear } from '../../Store/MDvcbSlice';
// import { useSelector, useDispatch } from 'react-redux';

// const LDPage = () => {
//   const dispatch = useDispatch();
//   const MDvcbState = useSelector(state => state.MDvcb);
//   const clearFields = () => {
//     dispatch(clear());
//   };

//   return (
//     <React.Fragment>
//       <CombinedInputs>
//         {Object.keys(MDvcbState).map(key => {
//           return (
//             <MyInput
//               value={MDvcbState[key].value}
//               key={key}
//               options={MDvcbState[key].adjustedOptions}
//               parName={key}
//             ></MyInput>
//           );
//         })}
//         <div className='buttonsContainer'>
//           <CustomButton>Make an order</CustomButton>
//           <CustomButton inverted={true} clickHandler={clearFields}>
//             Clear
//           </CustomButton>
//         </div>
//       </CombinedInputs>
//       <VCBImages></VCBImages>
//     </React.Fragment>
//   );
// };

// export default LDPage;
