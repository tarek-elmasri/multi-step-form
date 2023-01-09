import { useCallback, useState } from 'react';

import Addons from '../components/Addons/Addons';
import PersonalInformation from '../components/PersonalInformation/PersonalInformation';
import Plans from '../components/Plans/Plans';
import StepFour from '../components/SummaryDetails/SummaryDetails';
import ThankYou from '../components/ThankYou/ThankYou';

export type PersonalInfoState = {
  name: string;
  email: string;
  phoneNo: string;
};

export type PlanType = 'advanced' | 'arcade' | 'pro';
export type PlanDuration = 'monthly' | 'yearly';
export type PlanState = {
  type: PlanType;
  duration: PlanDuration;
};

export type AddonsState = {
  online: boolean;
  storage: boolean;
  profile: boolean;
};

export type FormState = {
  personalInfo: PersonalInfoState;
  plan: PlanState;
  addons: AddonsState;
};

const useForm = (initialState: FormState) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState<{
    autoValidate: boolean;
    errors: Record<keyof PersonalInfoState, string | null>;
  }>({
    autoValidate: false,
    errors: {
      name: null,
      phoneNo: null,
      email: null,
    },
  });

  const handlePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updatedData = { ...form.personalInfo, [name]: value };
    setForm((prev) => ({ ...prev, personalInfo: updatedData }));
    if (formErrors.autoValidate) {
      setFormErrors((prev) => ({
        ...prev,
        errors: getFormErrors(updatedData),
      }));
    }
  };

  const handlePlan = (newData: Partial<PlanState>) => {
    const updatedData = { ...form.plan, ...newData };
    setForm((prev) => ({ ...prev, plan: updatedData }));
  };

  const handleOnNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currentStep === 1) {
      const errors = getFormErrors(form.personalInfo);
      const isValid = Object.values(errors).every((v) => v === null);

      if (!isValid) {
        setFormErrors({ autoValidate: true, errors });
        return;
      }
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handleAddons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      addons: { ...form.addons, [name]: checked },
    }));
  };

  const handleOnPrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentStep((prev) => prev - 1);
  };

  const getFormErrors = useCallback((newData: PersonalInfoState) => {
    const errors: Record<keyof PersonalInfoState, string | null> = {
      name: null,
      phoneNo: null,
      email: null,
    };

    const { name, phoneNo, email } = newData;
    if (name.length < 1) errors.name = 'This field is required';
    if (!email.match(/[a-zA-Z]{1,1}[a-zA-Z0-9-._]{1,}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}/))
      errors.email = 'Invalid Email format';

    if (!phoneNo.match(/[0-9+]{10,}/)) errors.phoneNo = 'Invalid Phone No.';

    return errors;
  }, []);

  const getCurrentFrame = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformation
            data={form.personalInfo}
            handleChange={handlePersonalInfo}
            errors={formErrors.autoValidate ? formErrors.errors : undefined}
          />
        );
      case 2:
        return <Plans data={form.plan} handleChange={handlePlan} />;

      case 3:
        return (
          <Addons
            data={form.addons}
            duration={form.plan.duration}
            handleChange={handleAddons}
          />
        );
      case 4:
        return <StepFour data={form} />;

      case 5:
        return <ThankYou />;
      default:
        return null;
    }
  };

  const frame = getCurrentFrame();
  const isFinalStep = currentStep === 5;
  const hasNextStep = currentStep !== 4;
  const hasPrevStep = currentStep !== 1;

  return {
    form,
    frame,
    currentStep,
    handleOnNext,
    handleOnPrev,
    hasNextStep,
    hasPrevStep,
    isFinalStep,
  };
};

export default useForm;
