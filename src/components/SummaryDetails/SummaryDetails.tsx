import { AddonsState, FormState, PlanDuration, PlanType } from '../../hooks/useForm';
import FormHeader from '../FormHeader/FormHeader';
import SummaryCard from './styles';

const plans = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const services = {
  online: {
    price: 1,
    description: 'Online service',
  },
  profile: {
    price: 2,
    description: 'Customizable profile',
  },
  storage: {
    price: 2,
    description: 'Larger storage',
  },
};

const getPlanPrice = (plan: PlanType, duration: PlanDuration) => {
  const targetPlan = plans[plan];
  return duration === 'monthly' ? targetPlan : targetPlan * 10;
};

const filterActiveServices = (addons: AddonsState) => {
  return Object.keys(addons).filter((v) => addons[v as keyof AddonsState] === true);
};

const getServicePrice = (service: keyof AddonsState, duration: PlanDuration) => {
  return duration === 'monthly' ? services[service].price : services[service].price * 10;
};

const calculateTotal = (values: number[]) => {
  return values.reduce((prev, current) => prev + current, 0);
};

const SummaryDetails: React.FC<{ data: FormState }> = ({ data: { plan, addons } }) => {
  const planPrice = getPlanPrice(plan.type, plan.duration);
  const activeServices = filterActiveServices(addons);
  const isMonthlyDuration = plan.duration === 'monthly';

  const priceToString = (value: number) => {
    const per = isMonthlyDuration ? '/mo' : '/yr';
    return `$${value + per}`;
  };

  const totalPrice = calculateTotal([
    planPrice,
    ...activeServices.map((service) =>
      getServicePrice(service as keyof AddonsState, plan.duration),
    ),
  ]);
  return (
    <div className="grid gap-2">
      <FormHeader
        title="Finishing up"
        data="Double-check everything looks OK before confirming"
      />

      <SummaryCard>
        <div className="summary__info">
          <div className="summary__info-head">
            <div>
              <p className="text-primary fw-bold capitalize">
                {plan.type + ` (${isMonthlyDuration ? 'Monthly' : 'Yearly'})`}
              </p>
              <small className="summary__link | text-gray" role="link">
                Change
              </small>
            </div>
            <p className="text-primary fw-bold">{priceToString(planPrice)}</p>
          </div>

          {activeServices.map((addon) => (
            <div key={addon} className="summary__info-service | flow">
              <small className="text-gray">
                {services[addon as keyof AddonsState].description}
              </small>
              <small className="text-primary fw-semi-bold">
                {priceToString(
                  getServicePrice(addon as keyof AddonsState, plan.duration),
                )}
              </small>
            </div>
          ))}
        </div>

        <div className="summary__total ">
          <small className="text-gray">
            Total ({isMonthlyDuration ? 'per month' : 'per year'})
          </small>
          <p className="text-blue fw-bold txt-price">{priceToString(totalPrice)}</p>
        </div>
      </SummaryCard>
    </div>
  );
};

export default SummaryDetails;
