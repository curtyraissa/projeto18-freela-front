import styled from "styled-components";

export default function Card({data, horario, preco, localPartida}) {
  return (
    <>
      <CardContainer>
        <Bloco>
          <p>Data: {data}</p>
          <p>Horário: {horario}</p>
          <Text>PREÇO: {preco}</Text>
          <p>Destino: {localPartida}</p>
        </Bloco>
      </CardContainer>
    </>
  );
}
const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  color: black;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  color: #ffb000;
  font-weight: 400;
  font-size: 14px;
`;

const CardContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
