import { rgba } from 'polished'
import styled from 'styled-components'

export const MovieContainer = styled.article`
  padding: 32rem;
  border-radius: 10px;
  background: ${({ theme }) => rgba(theme['pink-500'], 0.05)};

  h2 {
    word-wrap: break-word;
    color: ${({ theme }) => theme['gray-100']};
  }

  > div:nth-child(2) {
    font-size: 12rem;
    margin-block: 8rem 16rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: #999591;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8rem;

  margin-top: 16rem;
`
