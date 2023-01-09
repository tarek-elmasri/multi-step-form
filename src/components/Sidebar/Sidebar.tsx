import StyledSidebar from './styles';

const Step: React.FC<{
  stepNo: number;
  stepTitle: string;
  active?: boolean;
}> = ({ stepNo, stepTitle, active }) => {
  return (
    <div className="sidebar__step">
      <div className="sidebar__step-no" data-active={active}>
        <p className="fw-semi-bold">{stepNo}</p>
      </div>
      <div className="sidebar__step-info">
        <small className="text-pale">{`STEP ${stepNo}`}</small>
        <p className="text-white fw-semi-bold">{stepTitle}</p>
      </div>
    </div>
  );
};

const Sidebar = ({ currentStep }: { currentStep: number }) => {
  return (
    <StyledSidebar>
      <Step stepNo={1} stepTitle="YOUR INFO" active={currentStep === 1} />
      <Step stepNo={2} stepTitle="SELECT PLAN" active={currentStep === 2} />
      <Step stepNo={3} stepTitle="ADD-ONS" active={currentStep === 3} />
      <Step stepNo={4} stepTitle="SUMMARY" active={currentStep === 4} />
    </StyledSidebar>
  );
};

export default Sidebar;
