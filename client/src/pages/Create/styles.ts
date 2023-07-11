import styled from 'styled-components'

export const CreateContainer = styled.div`
  display: grid;
  grid-template-rows: 116rem calc(100vh - 116rem);
  grid-template-areas:
    'header'
    'content';

  overflow: hidden;

  @media (max-width: 480px) {
    grid-template-rows: 80rem calc(100vh - 80rem);
  }
`

export const CreateContent = styled.div`
  grid-area: content;
  overflow-y: auto;
`

export const CreateMain = styled.main`
  width: 100%;
  max-width: 1152rem;
  margin: 40rem auto;
  padding-inline: 16rem;

  h1 {
    margin-block: 24rem 40rem;
  }

  h2 {
    margin-block: 40rem 24rem;
    font-weight: 400;
    font-size: 20rem;
    color: ${({ theme }) => theme['gray-400']};
  }

  > button {
    margin-top: 40rem;
  }
`

export const Form = styled.form`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32rem;
    margin-bottom: 32rem;
  }

  > textarea {
    width: 100%;
    height: 274rem;
    color: ${({ theme }) => theme['gray-100']};
    padding: 16rem;
    border: none;
    border-radius: 10px;
    background: ${({ theme }) => theme['gray-700']};
    resize: none;

    &::placeholder {
      opacity: 1;
      color: ${({ theme }) => theme['gray-400']};
    }
  }

  @media (max-width: 768px) {
    gap: 16rem;

    > div {
      grid-template-columns: 1fr;
      gap: 16rem;
      margin-bottom: 16rem;
    }
  }
`

export const Marcadores = styled.div`
  padding: 16rem;
  border-radius: 8px;
  background: ${({ theme }) => theme['gray-900']};

  display: flex;
  flex-wrap: wrap;
  gap: 16rem;
`

export const Marcador = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme['gray-700']};
  text-transform: capitalize;

  display: flex;
  align-items: center;

  padding-left: 16rem;

  button {
    line-height: 0;
    padding: 16rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme['pink-500']};
    font-size: 24rem;
  }
`

export const NewMarker = styled.div`
  width: 200rem;

  display: flex;
  border-radius: 10px;
  border: 2px dashed ${({ theme }) => theme['gray-400']};

  input {
    width: 100%;
    padding: 16rem 0 16rem 16rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme['gray-100']};
  }

  button {
    padding: 16rem;
    line-height: 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme['pink-500']};
    font-size: 24rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
  }
`
