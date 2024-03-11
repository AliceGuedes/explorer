import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 280px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin: 40px 0 8px;
  border-radius: 10px;
  padding: 16px;

  border: none;
  resize: none;

  &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
