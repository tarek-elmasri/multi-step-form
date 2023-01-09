import AddonCheckBox from '../../baseUI/AddonsCheckBox';
import { AddonsState, PlanDuration } from '../../hooks/useForm';
import FormHeader from '../FormHeader/FormHeader';

type StepThreeProps = {
  data: AddonsState;
  duration: PlanDuration;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
const Addons: React.FC<StepThreeProps> = ({
  data: { online, storage, profile },
  duration,
  handleChange,
}) => {
  const addons = [
    {
      id: 'online',
      name: 'online',
      label: 'Online service',
      description: 'Access to multiplayer games',
      price: duration === 'monthly' ? '+$1/mo' : '+$10/yr',
      checked: online,
    },
    {
      id: 'storage',
      name: 'storage',
      label: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: duration === 'monthly' ? '+$2/mo' : '+$20/yr',
      checked: storage,
    },
    {
      id: 'profile',
      name: 'profile',
      label: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: duration === 'monthly' ? '+$2/mo' : '+$20/yr',
      checked: profile,
    },
  ];

  return (
    <div className="grid gap-2">
      <FormHeader
        title="Pick add-ons"
        data="Add-ons help enhance your gaming experience."
      />

      <div className="grid gap-05">
        {addons.map((addon) => (
          <AddonCheckBox key={addon.id} {...addon} onChange={handleChange} />
        ))}
      </div>
    </div>
  );
};

export default Addons;
