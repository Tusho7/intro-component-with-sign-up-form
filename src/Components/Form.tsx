import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import Icon from "../Icons/icon-error.svg";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.firstname === undefined ? (
                <Input
                  placeholder="First Name"
                  {...register("firstname", {
                    required: "First Name cannot be empty",
                  })}
                />
              ) : (
                <Input
                  style={{
                    border: "2px solid red",
                    backgroundImage: `url(${Icon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "90% 50%",
                  }}
                  {...register("firstname", {
                    required: "First Name cannot be empty",
                  })}
                />
              )}
              {errors.firstname && (
                <ErrorMessage>{errors.firstname.message}</ErrorMessage>
              )}

              {errors.lastname === undefined ? (
                <Input
                  placeholder="Last Name"
                  {...register("lastname", {
                    required: "Last Name cannot be empty",
                  })}
                />
              ) : (
                <Input
                  style={{
                    border: "2px solid red",
                    backgroundImage: `url(${Icon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "90% 50%",
                  }}
                  {...register("lastname", {
                    required: "Last Name cannot be empty",
                  })}
                />
              )}
              {errors.lastname && (
                <ErrorMessage>{errors.lastname.message}</ErrorMessage>
              )}

              {errors.email === undefined ? (
                <Input
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Looks like this is not an email",
                    pattern: {
                      value:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Looks like this is not an email",
                    },
                  })}
                />
              ) : (
                <Input
                  style={{
                    border: "2px solid red",
                    backgroundImage: `url(${Icon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "90% 50%",
                  }}
                  {...register("email", {
                    required: "Looks like this is not an email",
                  })}
                />
              )}

              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}

              {errors.password === undefined ? (
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password cannot be empty",
                  })}
                />
              ) : (
                <Input
                  style={{
                    border: "2px solid red",
                    backgroundImage: `url(${Icon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "90% 50%",
                  }}
                  {...register("password", {
                    required: "Password cannot be empty",
                  })}
                />
              )}

              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}

              <ClaimButton>CLAIM YOUR FIRST TRIAL</ClaimButton>
            </form>

            <Footer>
              <FooterFirstText>
                By clicking the button, you are agreeing to
              </FooterFirstText>
              <p>
                <FooterFirstText>our </FooterFirstText>
                <FooterSecondText>Terms and Services</FooterSecondText>
              </p>
            </Footer>
          </Inputs>
        </Container>
      </MainContainer>
    </div>
  );
}

export default Form;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 88px 24px 64px 24px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 45px;
    align-items: center;
    padding: 121px 165px;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 1440px) {
    max-width: 37vw;
    gap: 20px;
  }
`;

const FirstText = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.291667px;
  color: #ffffff;
  @media (min-width: 1440px) {
    text-align: left;
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.520833px;
  }
`;

const SecondText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  @media (min-width: 1440px) {
    text-align: left;
    font-size: 16px;
    line-height: 26px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    min-width: 37vw;
    position: relative;
  }
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
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const ButtonSecondText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const Inputs = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 85%;
  padding: 15px 0px 18px 19px;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 5px;

  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #3d3b48;
  mix-blend-mode: normal;
  opacity: 0.75;
  &:not(:first-child) {
    margin-top: 16px;
  }
  &:first-child {
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    padding: 15px 0px 15px 32px;
    width: 84%;
    &:not(:first-child) {
      margin-top: 42px;
    }
    &:first-child {
      margin-top: 40px;
    }
  }
`;

const ErrorMessage = styled.p`
  width: 85%;
  margin: auto;
  margin-top: 6px;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: right;
  color: #ff7979;
  @media (min-width: 1440px) {
    position: absolute;
    margin: 6px auto 19px auto;
    left: 35px;
  }
`;

const ClaimButton = styled.button`
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  border: none;
  width: 85%;
  padding: 15px 30px;
  margin-top: 16px;
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  &:hover {
    background: #77e2b3;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    margin-top: 42px;
  }
`;

const Footer = styled.div`
  width: 78%;
  margin: auto;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  @media (min-width: 1440px) {
    display: flex;
    width: 69%;
  }
`;

const FooterFirstText = styled.span`
  color: #bab7d4;
`;

const FooterSecondText = styled.span`
  color: rgba(255, 121, 121, 1);
`;
