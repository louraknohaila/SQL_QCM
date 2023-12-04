import "./Qcm.css";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import Trivia from "../components/trivia";

function QCM() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Quelle est la syntaxe correcte pour déclarer une variable dans PL/SQL?",
      answers: [
        {
          text: "DECLARE @variable_name data_type;",
          correct: false,
        },
        {
          text: "CREATE VARIABLE variable_name data_type;",
          correct: false,
        },
        {
          text: "VAR variable_name data_type;",
          correct: false,
        },
        {
          text: "DECLARE variable_name data_type;",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Quelle fonction SQL est utilisée pour trouver le nombre total d'enregistrements dans une table?",
      answers: [
        {
          text: "COUNT(*)",
          correct: true,
        },
        {
          text: "SUM(*)",
          correct: false,
        },
        {
          text: "TOTAL(*)",
          correct: false,
        },
        {
          text: "NUMBER(*)",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Quelle est la syntaxe correcte pour une boucle FOR dans PL/SQL?",
      answers: [
        {
          text: "LOOP i FOR 1 TO 10",
          correct: false,
        },
        {
          text: "LOOP FOR i IN 1 TO 10",
          correct: false,
        },
        {
          text: "FOR i FROM 1 TO 10 LOOP",
          correct: false,
        },
        {
          text: "FOR i IN 1 TO 10 LOOP",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "Quelle est la manière correcte de définir une exception personnalisée dans PL/SQL?",
        answers: [
          {
            text: "DEFINE EXCEPTION custom_exception;",
            correct: false,
          },
          {
            text: "CREATE EXCEPTION custom_exception;",
            correct: true,
          },
          {
            text: "DECLARE EXCEPTION custom_exception;",
            correct: false,
          },
          {
            text: "EXCEPTION custom_exception;",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Quelle requête SQL est utilisée pour supprimer tous les enregistrements d'une table sans supprimer la table elle-même?",
        answers: [
          {
            text: "DELETE FROM table_name;",
            correct: true,
          },
          {
            text: "REMOVE * FROM table_name;",
            correct: false,
          },
          {
            text: "TRUNCATE TABLE table_name;",
            correct: false,
          },
          {
            text: "DROP TABLE table_name;",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: "Quelle commande PL/SQL est utilisée pour afficher un message dans la fenêtre de sortie?",
        answers: [
          {
            text: "PRINT 'Message';",
            correct: false,
          },
          {
            text: "DBMS_OUTPUT.PUT_LINE('Message');",
            correct: true,
          },
          {
            text: "DISPLAY 'Message';",
            correct: false,
          },
          {
            text: "SHOW 'Message';",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "Quelle est la syntaxe correcte pour une boucle FOR dans PL/SQL?",
        answers: [
          {
            text: "LOOP i FOR 1 TO 10",
            correct: false,
          },
          {
            text: "LOOP FOR i IN 1 TO 10",
            correct: false,
          },
          {
            text: "FOR i FROM 1 TO 10 LOOP",
            correct: false,
          },
          {
            text: "FOR i IN 1 TO 10 LOOP",
            correct: true,
          },
        ],
      },
      {
        id: 8,
        question: "Que signifie l’acronyme PL/SQL ?",
        answers: [
          {
            text: "Private Language/SQL",
            correct: false,
          },
          {
            text: "Pattern Language/SQL",
            correct: false,
          },
          {
            text: "Procedural Language/SQL",
            correct: true,
          },
          {
            text: "Primary Language/SQL",
            correct: false,
          },
        ],
      },
      {
        id: 9,
        question: "Quelle clause SQL est utilisée pour filtrer les résultats d'une requête SELECT ?",
        answers: [
          {
            text: "FILT",
            correct: false,
          },
          {
            text: "WHERE",
            correct: true,
          },
          {
            text: " SELECTIF",
            correct: false,
          },
          {
            text: "LIMIT",
            correct: false,
          },
        ],
      },
      {
        id: 10,
        question: "Comment trier les résultats d'une requête SELECT par ordre décroissant ?",
        answers: [
          {
            text: "ORDER DESC",
            correct: false,
          },
          {
            text: "SORT DESC",
            correct: false,
          },
          {
            text: "DESC",
            correct: false,
          },
          {
            text: " ORDER BY DESC",
            correct: true,
          },
        ],
      },
      {
        id: 11,
        question: "L’instruction CASE utilise quel mot clé pour fonctionner comme l’instruction IF ?",
        answers: [
          {
            text: "INTO",
            correct: false,
          },
          {
            text: "AS",
            correct: false,
          },
          {
            text: "WHEN",
            correct: true,
          },
          {
            text: "  IN",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "En utilisant _______, vous pouvez exécuter de manière répétitive une ou plusieurs déclarations, encore et encore.",
        answers: [
          {
            text: "Curseur",
            correct: false,
          },
          {
            text: " Boucles",
            correct: true,
          },
          {
            text: "Variables",
            correct: false,
          },
          {
            text: " IF-THEN-ELSE",
            correct: true,
          },
        ],
      },
      {
        id: 13,
        question: "_______ Loop en PL/SQL garantit qu’au moins une instruction est exécutée avant que la boucle ne se termine.",
        answers: [
          {
            text: " Exit",
            correct: true,
          },
          {
            text: " Cursor For",
            correct: false,
          },
          {
            text: "While",
            correct: false,
          },
          {
            text: "For",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "L’instruction _______ en PL/SQL vous permet de sauter d’une instruction à une étiquette d’instruction spécifique spécifique au sein du même sous-programme dans un bloc PL/SQL.",
        answers: [
          {
            text: "JUMP",
            correct: false,
          },
          {
            text: " EXIT",
            correct: false,
          },
          {
            text: "CONTINUE",
            correct: false,
          },
          {
            text: " GOTO",
            correct: true,
          },
        ],
      },
      {
        id: 15,
        question: "Le compteur dans la boucle FOR de PL/SQL est par défaut incrémenté de ____.",
        answers: [
          {
            text: "0",
            correct: false,
          },
          {
            text: "2",
            correct: false,
          },
          {
            text: "1",
            correct: true,
          },
          {
            text: "null",
            correct:false,
          },
        ],
      },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
        { amount: "Finish" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
        <>
          <div className="main">
            {timeOut ? (
               <>
              <h1 className="endText">You earned: {earned}</h1>
                <div className="button">
                   <button className="Rejouer">
                   <Link to="/QCM" className="nav">
           Rejouer
          </Link></button>
                   <button className="Quitter">
                   <Link to="/" className="nav">
                   Quitter
          </Link></button>
                </div>
               
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
    </div>
  );
}

export default QCM;
