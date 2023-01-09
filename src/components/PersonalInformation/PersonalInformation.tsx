import React from 'react';

import TextBox from '../../baseUI/TextBox';
import { PersonalInfoState } from '../../hooks/useForm';
import FormHeader from '../FormHeader/FormHeader';

type PersonalInformationProps = {
  data: PersonalInfoState;
  handleChange: React.ChangeEventHandler;
  errors?: Record<keyof PersonalInfoState, string | null>;
};
const PersonalInformation: React.FC<PersonalInformationProps> = ({
  data,
  handleChange,
  errors,
}) => {
  return (
    <div className="grid gap-2">
      <FormHeader
        title="Personal Info"
        data="Please provide your name, email address, and phone number."
      />

      <div className="grid gap-1">
        <TextBox
          label="Name"
          name="name"
          placeholder="e.g Stephen King"
          value={data.name}
          onChange={handleChange}
          error={errors?.name}
        />
        <TextBox
          type="email"
          label="Email Address"
          name="email"
          placeholder="e.g stephenking@lorem.com"
          value={data.email}
          onChange={handleChange}
          error={errors?.email}
        />
        <TextBox
          type="text"
          label="Phone Number"
          name="phoneNo"
          placeholder="e.g +1 234567890"
          value={data.phoneNo}
          onChange={handleChange}
          error={errors?.phoneNo}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
