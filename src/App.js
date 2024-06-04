import styled, { keyframes } from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: blue;
    border-color: blue;
    color: white;
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  margin: 10px 0 0;
`;

const Link = ({ className, ...props }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className={className} {...props}></a>
  );
};

const StyledLink = styled(Link)`
  color: blue;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "red",
}))`
  font-size: 20px;
  border 1px solid red;
  display:block;
  margin: 20px 0 0;
  color: ${(props) => props.color}
`;

const Password = styled(Input).attrs({ type: "password" })`
  margin: 10px 0 0
`;

const girar = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const Rotar = styled.div`
  animation: ${girar} 2s linear infinite;
  display: inline-block;
`;

function App() {
  return (
    <Content>
      <P>Hola, soy un párrafo</P>
      <Button primary="true">Botón primario</Button>{" "}
      <Button>Botón secundario</Button>
      <BlockButton className="secondary">Enviar</BlockButton>
      <BlockButton as="a" href="#">
        Enviar
      </BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con estilo</StyledLink>
      <Input />
      <Password color="brown" />
      <br />
      <Rotar>Estoy girando</Rotar>
    </Content>
  );
}

export default App;
