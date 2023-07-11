import { rgba } from 'polished'
import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: 116rem calc(100vh - 116rem);
  grid-template-areas:
    'header'
    'content';

  overflow: hidden;

  @media (max-width: 480px) {
    grid-template-rows: 96rem calc(100vh - 96rem);
  }
`

export const DetailsContent = styled.div`
  grid-area: content;
  overflow-y: auto;
`

export const DetailsMain = styled.main`
  width: 100%;
  max-width: 1152rem;
  margin: 40rem auto;
  padding-inline: 16rem;

  > button {
    margin-top: 40rem;
  }

  > p {
    line-height: 1.6;
    text-align: justify;
  }
`

export const MovieHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20rem;

  margin-block: 24rem;

  > h1 {
    font-size: 36rem;
    font-weight: 500;
  }
`

export const MovieAuthorAndInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;

  div {
    display: flex;
    align-items: center;
    gap: 8rem;
  }

  img {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme['gray-500']};
  }

  svg {
    line-height: 0;
    color: ${({ theme }) => theme['pink-500']};
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;

  margin-block: 40rem;

  > div {
    background: ${({ theme }) => rgba(theme['pink-500'], 0.05)};
  }
`
