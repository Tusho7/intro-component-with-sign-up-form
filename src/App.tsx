import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <TextDiv>
          <FirstText>Learn to code by watching others</FirstText>

          <SecondText>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </SecondText>
        </TextDiv>

        <Container>
          <Button>
            <ButtonFirstText>Try it free 7 days</ButtonFirstText>
            <ButtonSecondText> then $20/mo. thereafter</ButtonSecondText>
          </Button>

          <Inputs>
            <form>
              <input />
              <input />
              <input />
              <input />
            </form>

            <button>CLAIM YOUR FIRST TRIAL</button>
            <div>
              <p></p>
              <p></p>
            </div>
          </Inputs>
        </Container>
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 88px 24px 64px 24px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FirstText = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.291667px;
  color: #ffffff;
`;

const SecondText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled.button`
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  padding: 18px 66px;
  border: none;
`;

const ButtonFirstText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  color: #ffffff;
`;

const ButtonSecondText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  color: #ffffff;
`;

const Inputs = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  text-align: center;
`;
