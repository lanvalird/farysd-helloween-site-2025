import { useState } from "react";

import { Player } from "../game/Player";
import { quizQuestions } from "../config/quiz-questions";

export function GameForm() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (player) return;

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || undefined;

    const newPlayer = new Player(name);
    setPlayer(newPlayer);
  }

  function handleAnswer(effect: Record<string, number>) {
    if (!player) return;

    const updatedPlayer = new Player(player.name);

    player.skills.forEach((skill) => {
      updatedPlayer.updateSkillValue(skill.name, skill.value);
    });

    updatedPlayer.updateSkills(effect);

    setPlayer(updatedPlayer);

    nextQuizQuestion();
  }

  function nextQuizQuestion() {
    if (!player) return;

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Квиз завершен!", player.skills);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {player ? (
        <div className="game-content">
          {currentQuestion < quizQuestions.length ? (
            <div className="quiz-question">
              <h3>{quizQuestions[currentQuestion].text}</h3>
              <div className="answers">
                {quizQuestions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleAnswer(answer.effect)}
                    className="answer-button"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-complete">
              <h3>🎉 Квиз завершен! 🎉</h3>
              <p>Твои итоговые характеристики:</p>
              {/* Здесь можно показать финальную роль */}
            </div>
          )}


          <div className="skills-preview">
            {player.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <span>
                  {skill.name}: {skill.value}
                </span>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.getPercent()}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="player-setup">
          <input type="text" name="name" placeholder="Ваше имя" required />
          <button type="submit">Начать игру!</button>
        </div>
      )}
    </form>
  );
}
