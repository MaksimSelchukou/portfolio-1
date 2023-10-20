import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <FlexWrapper>
                    <StyledForm>
                        <Field type="text" placeholder={'name'}/>
                        <Field type="text" placeholder={'subject'}/>
                        <Field as={'textarea'} placeholder={'message'}/>
                        <Button type={"submit"}>Send message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
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
  &:focus-visible{
    outline: 1px solid #4A4A4A;
  }
  
`
