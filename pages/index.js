import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import Card from '../src/components/Card'
import Logo from '../src/components/Logo'
import Footer from '../src/components/Footer'
import Background from '../src/components/Background'
import GithubCorner from '../src/components/GithubCorner'

const Page = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');

  return (
    <Background backgroundImage={db.bg}>
      <Head>
        <title>Ouro Preto Quiz</title>
      </Head>
      <Page>
        <GithubCorner projectUrl="https://github.com/aliferds/quiz-imersao-react" />
        <Logo><img src="assets/logo/op-logo.png" alt="Logotipo de Ouro Preto" /></Logo>
        <Card>
        <Card.Header>
          Ouro Preto Quiz
        </Card.Header>
        <Card.Content>
        <form onSubmit={function (infosDoEvento) {
          infosDoEvento.preventDefault();
          router.push(`/quiz?name=${name}`);
          }}
        >
          <input
            onChange={function (infosDoEvento) {
              setName()
            }}
            placeholder="Seu nome"
            id="nameInput"
            type="text"
          />
          <button 
            type="submit" 
            disabled={name.length === 0}
          >
            Jogar
          </button>
        </form>
        </Card.Content>

        </Card>
        <Card>
          <Card.Content>
            <h1>Quiz da galera</h1>
            <p> Este quiz ... </p>
          </Card.Content>
        </Card>
        <Footer />
      </Page>
    </Background>
  )
}
