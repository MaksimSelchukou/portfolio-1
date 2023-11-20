import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

const Contacts = styled.section`
  position: relative;
  @media ${theme.media.mobile} {
    ${SectionTitle} {
      margin-bottom: 70px;
    }
  }
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`
const Field = styled.input`
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid #4A4A4A;
  background-color: ${theme.color.secondaryBg};
  padding: 7px 0 7px 15px;

  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: ${theme.color.font};

  &::placeholder {
    color: #495057;
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid #4A4A4A;
  }
`

export const S = {
    Contacts, StyledForm, Field
}
