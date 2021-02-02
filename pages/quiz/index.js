import db from '../../db.json';
import QuizScreen from '../../src/screens/QuizScreen'

export default function Quiz() {
  return (
    <QuizScreen
      questions={db.questions}
      background="assets/background/Cidade-Ouro-Preto.jpg"
    />
  )
}