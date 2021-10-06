import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
    filter: brightness(0.9);
  }
}
`