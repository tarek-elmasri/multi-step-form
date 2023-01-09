import styles from 'styled-components';

export const Button = styles.button`
  display: inline-block;
  text-decoration: none;
  border: 0;
  outline: none;
  border-radius: .5rem;
  padding: .625rem 1.2rem;
  /* font-size: 1.125rem; */
  font-weight: var(--fw-semi-bold);
  color: var(--clr-neutral-500);
  background-color: var(--clr-neutral-100);

  &:not(:disabled){
    cursor: pointer;
  }

  &:hover:not(:disabled),
  &:focus-within:not(:disabled){
    color: var(--clr-primary-500);
  }

`;
export const PrevButton = Button;

export const NextButton = styles(Button)`
  color: var(--clr-neutral-400);
  background-color: var(--clr-primary-600);
  box-shadow: 0 0 .5rem hsl(0 0% 0% / .25);

  &:hover:not(:disabled),
  &:focus-within:not(:disabled){
    color: var(--clr-neutral-300);
    background-color: var(--clr-primary-500);
  }

  &:disabled{
    background-color: var(--clr-primary-600-pale);
  }


  &[data-next="false"]{
    background-color: var(--clr-primary-400);
  }

  &[data-next="false"]:hover:not(:disabled),
  &[data-next="false"]:focus-within:not(:disabled){
    background-color: var(--clr-primary-300);
    color: var(--clr-neutral-100);
  }

`;
