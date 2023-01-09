import styles from 'styled-components';
const SummaryCard = styles.div`
  --content-wrapper: 1rem;
  --flow: 1rem;

  .summary__info{
    background-color: var(--clr-neutral-300);
    border-radius: 10px;
    padding: var(--flow) var(--content-wrapper);
  }

  .summary__info-head,
  .summary__info-service,
  .summary__total
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .summary__info-head{
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--clr-neutral-400);
  }
  
  .summary__link{
    text-decoration: underline;
    cursor: pointer;
  }
  .summary__link:hover{
    color: var(--clr-primary-400);
  }
  
  .summary__total{
    padding: 1rem var(--content-wrapper) 0;
  }
  
  .underline{
    text-decoration: underline;
  }
  
  .capitalize{
    text-transform: capitalize;
  }
  .flow{
    margin-top: var(--flow);
  }

  .txt-price{
    font-size: 1.125rem
  }
`;

export default SummaryCard;
