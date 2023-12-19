import styled from 'styled-components'

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.neutral[4]};

  .start-icon,
  .end-icon {
    display: inline-flex;
    align-items: center;
    gap: 24px;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.colors.neutral[2]};
    }
  }

  input {
    width: 100%;
    height: fit-content;
    background-color: inherit;
    color: ${({ theme }) => theme.colors.neutral[2]};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.75px;
    font-family: inherit;

    &:focus {
      outline: none;
    }

    &[type='search'] {
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
  }
`
