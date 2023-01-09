import styles from 'styled-components';

const StyledTextBox = styles.div`
  .textbox{
    &__labels{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__labels-title {
        color: var(--clr-primary-500);
    }

    &__labels-error{
        text-transform: capitalize;
        color: var(--clr-accent-400);
    }

    &__input{
      outline:none;
      border: 2px solid var(--clr-neutral-400);
      color: var(--clr-primary-600);
      padding: .5em 1em;
      // font-size: 0.875rem;
      width: 100%;
      border-radius: .5rem;
  
      &:focus{
        border-color: var(--clr-primary-400);
      }
  
      &[data-invalid="true"]{
        border-color: var(--clr-accent-400);
      }
    }
  }



`;

type TextBoxProps = {
  label: string;
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'email' | 'number' | 'password';
  placeholder?: string;
  error?: string | null;
};
const TextBox: React.FC<TextBoxProps> = ({ label, name, type, error, ...others }) => (
  <StyledTextBox className="textbox">
    <div className="textbox__labels">
      <label className="textbox__labels-title fw-semi-bold" htmlFor={name}>
        <small>{label}</small>
      </label>
      {error && <small className="textbox__labels-error fw-bold">{error}</small>}
    </div>
    <input
      className="textbox__input fw-semi-bold"
      id={name}
      name={name}
      type={type || 'text'}
      data-invalid={!!error}
      {...others}
    />
  </StyledTextBox>
);

export default TextBox;
