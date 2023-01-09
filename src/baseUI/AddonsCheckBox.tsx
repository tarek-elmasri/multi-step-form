import styles from 'styled-components';

const StyledAddonsCheckBox = styles.div`
  padding: .875rem;
  border: 2px solid var(--clr-neutral-400);
  border-radius: .5rem;

  &:hover{
    border: 2px solid var(--clr-primary-400);
  }

  &[data-checked="true"]{
    border: 2px solid var(--clr-primary-400);
    background-color: var(--clr-neutral-300);
  }

  .checkbox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    > input {
      display: none;
    }
    
  }

  .checkbox__content{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .checkbox__mark{
    width: 1.25rem;
    height: 1.25rem;
    padding: 5px;
    border-radius: 5px;
    outline: 2px solid var(--clr-neutral-400);
    fill: transparent;
    
    &[data-checked="true"]{
      fill: var(--clr-neutral-100);
      display: grid;
      background-color: var(--clr-primary-400);
    }
  }

`;

type AddonsCheckBoxProps = {
  id: string;
  label: string;
  name: string;
  description: string;
  price: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const AddonCheckBox: React.FC<AddonsCheckBoxProps> = ({
  id,
  name,
  label,
  description,
  price,
  checked,
  onChange,
}) => {
  return (
    <StyledAddonsCheckBox data-checked={checked}>
      <label className="checkbox" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <div className="checkbox__content">
          <div className="checkbox__mark" data-checked={checked}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
            </svg>
          </div>
          <div>
            <div className="text-primary  fw-bold">{label}</div>
            <small className="text-gray"> {description}</small>
          </div>
        </div>
        <div className="checkbox__extra">
          <small className="text-blue">{price}</small>
        </div>
      </label>
    </StyledAddonsCheckBox>
  );
};

export default AddonCheckBox;
