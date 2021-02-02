import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import db from '../db.json'

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
  h1 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  li {
    list-style: none;
  }
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <Background backgroundImage="assets/background/Cidade-Ouro-Preto.jpg">
      <Head>
        <title>Ouro Preto Quiz</title>
      </Head>
      <Page>

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
                    setName(eventInfo.target.value);
                  }}
                  value={name}
                  placeholder="Seu nome"
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar Agora
                </Button>
              </form>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <h1>Quiz da galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno.replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', ' ')
                .split('.');
                return (
                  <li key={linkExterno}>
                    <Card.Topic href={`/quiz/${projectName}___${githubUser}`}>
                      {`${githubUser} | ${projectName}`}
                    </Card.Topic>
                  </li>
                );
              })}
            </ul>
          </Card.Content>
        </Card>

        <Footer />
      </Page>
      <GithubCorner projectUrl="https://github.com/aliferds/quiz-imersao-react" />
    </Background>
  )
}
