import { useEffect, useRef } from 'react';
import styles from 'styled-components';

const StyledPlanRadioBox = styles.label`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  border-radius: 10px;
  border: 2px solid var(--clr-neutral-400);
  cursor: pointer;

  > input {display: none;}
  
  &:hover{
    border-color: var(--clr-primary-400);
  }

  &.checked{
    border-color: var(--clr-primary-400);
    background-color: var(--clr-neutral-300);
  }

  @media (min-width: 50em){
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

type RadioBoxProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const PlanRadioBox: React.FC<
  { icon: string; price: string; bonus?: string } & RadioBoxProps
> = ({ id, icon, name, value, label, price, bonus, checked, onChange }) => {
  const containerRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      checked
        ? containerRef.current.classList.add('checked')
        : containerRef.current.classList.remove('checked');
    }
  }, [checked]);

  return (
    <StyledPlanRadioBox ref={containerRef} htmlFor={id}>
      <img src={icon} alt="" aria-hidden />
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <div>
        <p className="text-primary text-large fw-bold">{label}</p>
        <p className="text-gray">{price}</p>
        {bonus && <small className="fw-semi-bold text-primary">{bonus}</small>}
      </div>
    </StyledPlanRadioBox>
  );
};

const StyledTogglerRadioBox = styles.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--clr-neutral-200);

  .toggler-option {
    cursor: pointer;

    > input{display: none;}

    .toggler-option__label {
      cursor: pointer;
      color: var(--clr-neutral-500);
      font-weight: var(--fw-bold);
    }  

    &.checked .toggler-option__label {
      color: var(--clr-primary-600);
    }
  }

  .toggler-bar{
    --ball-edge: 5px;
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    border-radius: 100vmax;
    background-color: var(--clr-primary-600);
    cursor: pointer;

    &::after{
      content: '';
      position: absolute;
      width: calc(50% - var(--ball-edge));
      aspect-ratio: 1;
      margin: calc(.5 * var(--ball-edge));
      border-radius: 50%;
      transition: transform 150ms linear;
      background-color: var(--clr-neutral-100);
    }
  }
  
  .toggler-bar.right{
    &::after{
      transform: translateX(calc(100% + var(--ball-edge)));
    }
  }
`;

type TogglerRadioBoxProps = {
  optionOne: Omit<RadioBoxProps, 'name' | 'onChange'>;
  optionTwo: Omit<RadioBoxProps, 'name' | 'onChange'>;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const TogglerRadioBox: React.FC<TogglerRadioBoxProps> = ({
  optionOne,
  optionTwo,
  name,
  onChange,
}) => {
  const optionOneRef = useRef<HTMLLabelElement>(null);
  const optionTwoRef = useRef<HTMLLabelElement>(null);
  const togglerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!optionOneRef.current || !optionTwoRef.current || !togglerRef.current) return;

    if (optionOne.checked) {
      optionOneRef.current.classList.add('checked');
      optionTwoRef.current.classList.remove('checked');
      togglerRef.current.classList.remove('right');
    } else {
      optionOneRef.current.classList.remove('checked');
      optionTwoRef.current.classList.add('checked');
      togglerRef.current.classList.add('right');
    }
  }, [optionOne.checked, optionTwo.checked]);

  return (
    <StyledTogglerRadioBox>
      <label ref={optionOneRef} htmlFor={optionOne.id} className="toggler-option">
        <input
          id={optionOne.id}
          name={name}
          value={optionOne.value}
          checked={optionOne.checked}
          onChange={onChange}
          type="radio"
        />
        <div className="toggler-option__label">{optionOne.label}</div>
      </label>

      <div
        ref={togglerRef}
        className="toggler-bar"
        onClick={() => {
          onChange({
            target: {
              name,
              value: optionOne.checked ? optionTwo.value : optionOne.value,
            },
          } as unknown as React.ChangeEvent<HTMLInputElement>);
        }}
        aria-hidden
      />

      <label ref={optionTwoRef} htmlFor={optionTwo.id} className="toggler-option">
        <input
          id={optionTwo.id}
          name={name}
          value={optionTwo.value}
          checked={optionTwo.checked}
          type="radio"
          onChange={onChange}
        />
        <div className="toggler-option__label">{optionTwo.label}</div>
      </label>
    </StyledTogglerRadioBox>
  );
};
