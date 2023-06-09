import styled from "styled-components";
import Logo from "../components/Logo";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const PassagemPage = () => {
  const { id } = useParams();
  const [passagem, setPassagem] = useState([]);
  const [minPreco, setMinPreco] = useState("");
  const [maxPreco, setMaxPreco] = useState("");

  const filtragem = passagem.filter((p) => {
    const preco = parseFloat(p.preco);
    const min = minPreco ? parseFloat(minPreco) : Number.MIN_VALUE;
    const max = maxPreco ? parseFloat(maxPreco) : Number.MAX_VALUE;
    return preco >= min && preco <= max;
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/passagens/cidade/${id}`)
      .then((res) => {
        setPassagem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  return (
    <>
      <Logo />
      <Filtro>
        <Search
          type="search"
          name="minPreco"
          placeholder="Preço mínimo"
          value={minPreco}
          onChange={(e) => setMinPreco(e.target.value)}
        />
        <Search
          type="search"
          name="maxPreco"
          placeholder="Preço máximo"
          value={maxPreco}
          onChange={(e) => setMaxPreco(e.target.value)}
        />
      </Filtro>

      <PassagemContainer>
        <Text>Passagens para CIDADE:</Text>
        <Bloco>
          {filtragem.map((item) => (
            <Link to={`/passagens/${item.id}`} key={item.id}>
              <Card
                key={item.id}
                data={item.data}
                horario={item.horario}
                preco={item.preco}
                localPartida={item.localPartida}
              />
            </Link>
          ))}
        </Bloco>
      </PassagemContainer>
    </>
  );
};

const Filtro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const Bloco = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Search = styled.input`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PassagemContainer = styled.div`
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
