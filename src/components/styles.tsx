import styles from 'styled-components';

const StyledForm = styles.form`
  --content-wrapper: 1.5rem;
  background-color: var(--clr-neutral-300);
  min-height: 100vh;
  display: grid;
  align-content: space-between;

  @media (min-width: 50em){
    --content-wrapper: 5rem;
    min-height: min(35rem, 100vh);
    width: min(55rem, 100%);
    padding: 1rem;
    border-radius: .5rem;
    background-color: var(--clr-neutral-100);
    box-shadow: 5px 5px .5rem hsl(0 0% 0% / .2);
    grid-template-columns: 16rem auto;
    /* grid-template-rows: 1fr 5rem; */
  }


  .form__content{
    position: absolute;
    top: 6.25rem;
    right: .825rem;
    left: .825rem;
    background-color: var(--clr-neutral-100);
    /* margin-inline: 1rem; */
    padding: 2rem var(--content-wrapper) 1rem; 
    border-radius: 10px;
    
    @media (min-width: 50em){
      position: static;

      &[data-submit="true"]{
        grid-row: span 2;
        align-self: center;
      }
    }
  }

`;

export default StyledForm;
