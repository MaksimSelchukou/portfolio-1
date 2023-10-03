import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <FlexWrapper>
                <StyledForm>
                    <Field type="text"/>
                    <Field type="text"/>
                    <Field as={'textarea'}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </FlexWrapper>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #abab12;
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Field = styled.input`
  margin: 5px;
`
