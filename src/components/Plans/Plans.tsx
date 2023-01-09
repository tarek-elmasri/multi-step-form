import advancedIcon from '../../assets/images/icon-advanced.svg';
import arcadeIcon from '../../assets/images/icon-arcade.svg';
import proIcon from '../../assets/images/icon-pro.svg';
import { PlanRadioBox, TogglerRadioBox } from '../../baseUI/RadioBox';
import { PlanState } from '../../hooks/useForm';
import FormHeader from '../FormHeader/FormHeader';

type PlansProps = {
  data: PlanState;
  handleChange: (data: Partial<PlanState>) => void;
};

const Plans: React.FC<PlansProps> = ({ data: { type, duration }, handleChange }) => {
  const bonus = duration === 'yearly' ? '2 months free' : undefined;

  const handlePlan = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange({ [e.target.name]: e.target.value });

  const plans = [
    {
      id: 'arcade',
      icon: arcadeIcon,
      value: 'arcade',
      label: 'Arcade',
      price: duration === 'monthly' ? '$9/mo' : '$90/yr',
      bonus,
      checked: type === 'arcade',
    },
    {
      id: 'advanced',
      icon: advancedIcon,
      value: 'advanced',
      label: 'Advanced',
      price: duration === 'monthly' ? '$12/mo' : '$120/yr',
      bonus,
      checked: type === 'advanced',
    },
    {
      id: 'pro',
      icon: proIcon,
      value: 'pro',
      label: 'Pro',
      price: duration === 'monthly' ? '$15/mo' : '$150/yr',
      bonus,
      checked: type === 'pro',
    },
  ];

  return (
    <div className="grid gap-2">
      <FormHeader
        title="Select Your Plan"
        data="You have the option of monthly or yearly billing"
      />

      <div className="grid even-columns gap-05">
        {plans.map((plan) => (
          <PlanRadioBox name="type" {...plan} key={plan.id} onChange={handlePlan} />
        ))}
      </div>

      <TogglerRadioBox
        optionOne={{
          id: 'monthly',
          value: 'monthly',
          label: 'Monthly',
          checked: duration === 'monthly',
        }}
        optionTwo={{
          id: 'yearly',
          value: 'yearly',
          label: 'Yearly',
          checked: duration === 'yearly',
        }}
        name="duration"
        onChange={handlePlan}
      />
    </div>
  );
};

export default Plans;
