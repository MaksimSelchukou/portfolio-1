import React from 'react';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles"

export const Contacts = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <FlexWrapper>
                    <S.StyledForm>
                        <S.Field type="text" placeholder={'name'}/>
                        <S.Field type="text" placeholder={'subject'}/>
                        <S.Field as={'textarea'} placeholder={'message'}/>
                        <Button type={"submit"}>Send message</Button>
                    </S.StyledForm>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

