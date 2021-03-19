import React from 'react';
import styled from 'styled-components';
import FirstContent from '../components/FirstContent';
import SecondContent from '../components/SecondContent';
import ContentHeader from '../components/ContentHeader';

const Page = styled.div`
    margin-top: 80px;
    background-color: black;
    color: white;
    padding-top: 32px;
    padding-left: 20px;
    @media screen and (max-width: 836px) {
        &{
          padding-left: 32px;
        }
`
const ListedContent = styled.div`
    display: flex;
    padding-bottom: 40px;
    @media screen and (max-width: 836px) {
    &{
      display: flex;
      flex-wrap: wrap;
      padding-left: 20px;
    }
`


class SecondPage extends React.Component {
    render() {
        return (
            <Page>
                <ContentHeader />
                <ListedContent>
                    <FirstContent />
                    <SecondContent />
                </ListedContent>
            </Page>
        );
    }
}

export default SecondPage;
