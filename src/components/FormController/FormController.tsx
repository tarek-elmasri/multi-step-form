import styles from 'styled-components';

import { NextButton, PrevButton } from '../../baseUI/Buttons';

const StyledFormController = styles.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-neutral-100);
  
  @media (min-width: 50em){  
    padding-inline: var(--content-wrapper);
  }

  > button[data-visible='false'] {
    display: none;
  }

  > button:nth-of-type(2){
    margin-left: auto;
  }
`;

type FormControllerProps = {
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
  hasNextStep: boolean;
  hasPrevStep: boolean;
};
const FormController: React.FC<FormControllerProps> = ({
  onNext,
  onPrev,
  hasNextStep,
  hasPrevStep,
}) => {
  return (
    <StyledFormController>
      <PrevButton data-visible={hasPrevStep} onClick={onPrev}>
        Go Back
      </PrevButton>
      <NextButton data-visible={true} data-next={hasNextStep} onClick={onNext}>
        {hasNextStep ? 'Next Step' : 'Confirm'}
      </NextButton>
    </StyledFormController>
  );
};

export default FormController;
