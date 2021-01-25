import styled from 'styled-components'
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
  return (
    <Background backgroundImage={db.bg}>
      <Page>
        <GithubCorner projectUrl="https://github.com/aliferds/quiz-imersao-react" />
        <Logo>Minha Logo</Logo>
        <Card>
        <Card.Header>
          Meu quiz
        </Card.Header>
        <Card.Content>
          Este quiz ...
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
