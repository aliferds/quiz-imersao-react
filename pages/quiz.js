import db from '../db.json';
import Card from '../src/components/Card';
import Logo from '../src/components/Logo';
import Background from '../src/components/Background';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';

function LoadingCard() {
  return (
    <Card>
      <Card.Header>
        Carregando...
      </Card.Header>

      <Card.Content>
        [Desafio do Loading]
      </Card.Content>
    </Card>
  );
}

function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = (selectedAlternative === question.answer);
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Card>
      <Card.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Card.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Card.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Card.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Card.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>Voce Acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Voce Errou!</p>}
        </AlternativesForm>
      </Card.Content>
    </Card>
  );
}

function ResultsCard({ results }) {
  return (
    <Card>
      <Card.Header>
        Tela de Resultado
      </Card.Header>

      <Card.Content>
        <p>Você acertou {results.reduce((somaAtual, resultAtual) => {
          const isAcertou = resultAtual === true;
          if(isAcertou){
            return somaAtual+1;
          }
          return somaAtual;
        }, 0)} perguntas</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index+1}
              {' '}
              Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <Background backgroundImage="assets/background/Cidade-Ouro-Preto.jpg">
      <QuizContainer>
        <Logo />
        {screenState === screenStates.QUIZ && (
          <QuestionCard
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingCard />}

        {screenState === screenStates.RESULT && <ResultsCard results={results} />}
      </QuizContainer>
    </Background>
  );
}