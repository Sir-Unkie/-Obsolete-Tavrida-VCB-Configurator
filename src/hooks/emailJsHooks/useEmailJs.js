import emailjs from 'emailjs-com';
export const useEmailJs = () => {
  const emailJsSend = async (customerName, customerEmail, VCBccode) => {
    const templateParams = {
      to_name: 'Dmitry',
      Customer_Name: customerName,
      Customer_Email: customerEmail,
      VCB_Code: VCBccode,
    };
    emailjs.send(
      'service_8jxn9mf',
      'template_it50sht',
      templateParams,
      'user_tDawHOAXBaCAXatImtJRc'
    );
  };
  return emailJsSend;
};
