import successIcon from '../../assets/images/icon-thank-you.svg';
import FormHeader from '../FormHeader/FormHeader';

const ThankYou = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        gap: '1rem',
        paddingBlock: '3rem',
      }}
    >
      <img src={successIcon} alt="" aria-hidden />

      <FormHeader
        title="Thank you!"
        data="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      />
    </div>
  );
};

export default ThankYou;
