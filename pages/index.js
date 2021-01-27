import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Logo from '../src/components/Logo'
import Card from '../src/components/Card'
import Footer from '../src/components/Footer'
import Background from '../src/components/Background'
import GithubCorner from '../src/components/GithubCorner'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

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
  const [name, setName] = React.useState('');

  return (
    <Background backgroundImage="assets/background/Cidade-Ouro-Preto.jpg">
      <Head>
        <title>Ouro Preto Quiz</title>
      </Head>
      <Page>
        <GithubCorner projectUrl="https://github.com/aliferds/quiz-imersao-react" />

        <Logo />

        <Card>
          <Card.Header> Ouro Preto Quiz </Card.Header>
          <Card.Content>
            <form onSubmit={function (eventInfo) {
                eventInfo.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissao por meio do react');
              }}
              >
                <Input
                  onChange={(eventInfo) => {
                    console.log(eventInfo.target.value);
                    // State
                    // name = eventInfo.target.value;
                    setName(eventInfo.target.value);
                  }}
                  placeholder="Seu nome"
                />
                <Button type="submit" disabled={name.value === 0}>
                  Jogar Agora
                </Button>
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
