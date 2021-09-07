// const useEmailJs = async () => {
//   const templateParams = {
//     to_name: 'Dmitry',
//     Customer_Name: localStorage.getItem('displayName'),
//     Customer_Email: localStorage.getItem('email'),
//     VCB_Code: code,
//   };
//   //   first we need to check if all the values are filled

//   if (values.indexOf('0') !== -1) {
//     alert('Set all the VCB parameters');
//     return;
//   }
//   // if everything is ok send an email
//   try {
//     setStatus('loading');
//     setAlertMessage('Sending your message... ');
//     await emailjs.send(
//       'service_8jxn9mf',
//       'template_it50sht',
//       templateParams,
//       'user_tDawHOAXBaCAXatImtJRc'
//       //   show the pop up with success information or handle an error
//     );
//     setStatus('success');
//     setAlertMessage('Your order is sent successfully.');
//     setTimeout(() => {
//       setStatus('initial');
//     }, 2000);
//   } catch (error) {
//     setStatus('error');
//     setAlertMessage('Something went wrong, the message was not sent!');
//     setTimeout(() => {
//       setStatus('initial');
//     }, 2000);
//   }
//   // console.log(templateParams['VCB_Code']);
// };
