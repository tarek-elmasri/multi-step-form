import useForm, { FormState } from '../hooks/useForm';
import FormController from './FormController/FormController';
import Sidebar from './Sidebar/Sidebar';
import StyledForm from './styles';

const initialState: FormState = {
  personalInfo: {
    name: '',
    email: '',
    phoneNo: '',
  },
  plan: {
    type: 'arcade',
    duration: 'monthly',
  },
  addons: {
    online: true,
    storage: true,
    profile: false,
  },
};

const Form = () => {
  const {
    currentStep,
    frame,
    handleOnNext,
    handleOnPrev,
    hasNextStep,
    hasPrevStep,
    isFinalStep,
  } = useForm(initialState);

  return (
    <StyledForm>
      <Sidebar currentStep={currentStep} />

      <div className="form__content" data-submit={isFinalStep}>
        {frame}
      </div>

      {!isFinalStep && (
        <FormController
          onNext={handleOnNext}
          onPrev={handleOnPrev}
          hasNextStep={hasNextStep}
          hasPrevStep={hasPrevStep}
        />
      )}
    </StyledForm>
  );
};

export default Form;
