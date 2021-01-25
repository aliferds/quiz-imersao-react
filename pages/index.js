import styled from 'styled-components'
import db from '../db.json'
import Card from '../src/components/Card'
import Footer from '../src/components/Footer'
import Background from '../src/components/Background'

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
        Meu quiz
        <Card>
        <Card.Header>
          Quiz
        </Card.Header>
        <Card.Content>
          Este quiz ...
        </Card.Content>

        </Card>
        <Card>
          <Card.Content>
            Card2
            Este quiz ...
          </Card.Content>
        </Card>
        <Footer />
      </Page>
    </Background>
  )
}
