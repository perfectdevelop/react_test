import React from 'react';
import styled from 'styled-components'
// import MortgageButton from '../components/MortgageButton';
// import RefinancialButton from '../components/RefinancialButton';
import Contents from '../components/Contents';
import Photo from '../components/Photo';
import Header from '../components/Header';
import Modal from '../Modal.js';


const Button = styled.button`
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    width: 150px;
    margin-right: 5px;
    @media screen and (max-width: 836px) {
        &{
          margin-top: 8px;
        }
    }
`;
const MainButtons = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 836px) {
        &{
          margin-top: 30px;
          max-width: 220px;
          display: flex;
          flex-wrap: wrap;
        }
    }
`;
const Explain = styled.div`
    max-width: 460px;
    margin-left: 20px;
`;

const Container = styled.div`
@media screen and (max-width: 836px) {
    &{
      padding-top: 32px;
      padding-left: 32px;
    }
}

@media screen and (min-width: 837px) {
    &{
      display: flex;
      flex-wrap: wrap;
      padding-top: 32px;
      justify-content: space-around;
    }
}
`;

class FirstPage extends React.Component {

    state = { show_modal: false }

    show_modal = () => {
        this.setState({
            show_modal: document.getElementById('root').innerHTML = alert('ok')
        });
    }

    render() {
        return (
            <>  
                <Modal />
                <Header />
                <Container>
                    <Photo />
                    <Explain>
                        <Contents />
                        <MainButtons>
                            <Button onClick={() => this.show_modal()}>trigger home modal</Button>
                            <Button>Refinancial Calculator</Button>
                        </MainButtons>
                    </Explain>
                </Container>
            </>
        );
    }
}

export default FirstPage;