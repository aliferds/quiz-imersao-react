import React from 'react';
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/QuizScreen'

export default function QuizDaGaleraPage({dbExterno}){
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen
                questions={dbExterno.questions}
                background={dbExterno.bg}
            />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaServer) => {
        if (respostaServer.ok) {
          return respostaServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      // .catch((err) => {
      //   // console.error(err);
      // });
    return {
      props: {
        dbExterno,
      },
    };
  } catch(err) {
    throw new Error(err);
  }
}