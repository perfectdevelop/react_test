import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
@media screen and (min-width: 837px) {
  &{
    display: flex;
    flex-wrap: wrap;
    padding-right: 55px;
    padding-left: 26px;
  }
}
`;

const Whitedot = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 100%;
  background-color: white;
  margin-right: 40px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  max-width: 330px;
`;

const Contentheader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Smallheader = styled.p`
  font-size: 20px;
  margin: 0px;
`;

const Topic = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 0;
`

class FirstContent extends React.Component {
  render() {
    return (
      <Contents>
        <Whitedot />
        <Content>
          <Contentheader>
            <Topic>
              <Smallheader>
                Get A Online Mortgage Experience.
              </Smallheader>
            </Topic>
          </Contentheader>
          <p>
            Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down.
            Purchases are reflected right away and our unique features help you acoid spendng more than your balance or running up monthly bills that you have to worry about manually paying.
          </p>
        </Content>
      </Contents>
    );
  }
}
export default FirstContent;
