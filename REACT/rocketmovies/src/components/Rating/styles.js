import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  gap: ${({ isbigsize }) => (isbigsize ? '10px' : '6px')};

  svg {
    font-size: ${({ isbigsize }) => (isbigsize ? '20px' : '12px')};

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
