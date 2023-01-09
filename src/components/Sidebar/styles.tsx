import styles from 'styled-components';

import lgBackgroundImage from '../../assets/images/bg-sidebar-desktop.svg';
import smBackgroundImage from '../../assets/images/bg-sidebar-mobile.svg';

const StyledSidebar = styles.aside`
  padding: 2rem 2rem 6rem;
  background-color: var(--clr-neutral-100);
  background-image: url(${smBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;

  @media (min-width: 50em){
    grid-row: span 2;
    background-size: contain;
    background-image: url(${lgBackgroundImage});
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .sidebar__step{
    @media (min-width: 50em){
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &-no{
      width: 2rem;
      height: 2rem;
      display: grid;
      place-content: center;
      outline: 2px solid var(--clr-primary-200);
      border-radius: 50%;
      color: var(--clr-primary-200);
      background-color: var(--clr-primary-400);
    
      &[data-active="true"]{
        color: var(--clr-primary-600);
        background-color: var(--clr-primary-200);
        outline-color: var(--clr-primary-400);
      }
    }

    &-info{
      display: none;
      @media (min-width: 50em){
        display: block;
      }
    }
  }
`;

export default StyledSidebar;
