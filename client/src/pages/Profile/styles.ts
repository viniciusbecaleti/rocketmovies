import { rgba } from 'polished'
import styled from 'styled-components'

export const Header = styled.div`
  background: ${({ theme }) => rgba(theme['pink-500'], 0.05)};
`

export const HeaderContent = styled.div`
  max-width: 1152rem;
  height: 144rem;

  margin-inline: auto;
  padding-inline: 16rem;

  display: flex;
  align-items: center;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8rem;

  border: none;
  background: none;

  color: ${({ theme }) => theme['pink-500']};
`

export const Form = styled.form`
  max-width: 340rem;
  margin-inline: auto;

  button {
    margin-top: 24rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 186rem;
  height: 186rem;

  margin-inline: auto;
  margin-top: -93rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48rem;
    height: 48rem;

    border-radius: 50%;
    color: ${({ theme }) => theme['gray-600']};
    background: ${({ theme }) => theme['pink-500']};

    cursor: pointer;

    input {
      display: none;
    }
  }

  @media (max-width: 480px) {
    width: 148rem;
    height: 148rem;
  }
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  margin-top: 64rem;

  @media (max-width: 480px) {
    margin-top: 32rem;
  }
`
