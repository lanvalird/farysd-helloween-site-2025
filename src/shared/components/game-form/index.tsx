import type { GameRole, SkillEffect } from "../../types";
import type { QuizQuestion as QuizQuestionClass } from "../../game/qiuz/Question";

import { useMemo, useState } from "react";

import { Player } from "../../game/Player";

import { quizQuestions } from "../../config/quiz-questions";
import { RoleSystem } from "../../game/RoleSystem";

export function GameForm() {
  const [player, setPlayer] = useState<Player | null>(null);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (player) return;

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || undefined;

    const newPlayer = new Player(name);
    setPlayer(newPlayer);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {player ? <GameContent player={player} /> : <WelcomeScreen />}
    </form>
  );
}

function GameContent({ player }: { player: Player }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const roleSystem = RoleSystem.getInstance();

  function handleAnswer(effect: SkillEffect) {
    if (!player) return;

    player.updateSkills(effect);

    nextQuizQuestion();
  }

  function nextQuizQuestion() {
    if (!player) return;

    if (currentQuestion < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Greate! You are done >:)");
    }
  }

  const playerRole = useMemo(() => {
    if (currentQuestion >= quizQuestions.length) {
      return roleSystem.calculateRole(player);
    }
    return null;
  }, [currentQuestion, player]);

  const showResults = currentQuestion >= quizQuestions.length;

  return (
    <div className="game-content">
      {!showResults ? (
        <QuizQuestion
          value={quizQuestions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <QuizComplete player={player} role={playerRole} />
      )}

      <SkillsPreview player={player} />
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="player-setup">
      <input type="text" name="name" placeholder="Ваше имя" required />
      <button type="submit">Начать игру!</button>
    </div>
  );
}

function SkillsPreview({ player }: { player: Player }) {
  return (
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
  );
}

function QuizQuestion({
  value,
  handleAnswer,
}: {
  value: QuizQuestionClass;
  handleAnswer: (effect: SkillEffect) => void;
}) {
  return (
    <div className="quiz-question">
      <h3>{value.text}</h3>
      <div className="answers">
        {value.answers.map((answer, index) => (
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
  );
}

function QuizComplete({
  player,
  role,
}: {
  player: Player;
  role: GameRole | null;
}) {
  const finalRole = role;
  const roleSystem = RoleSystem.getInstance();
  const matchingRoles = useMemo(() => {
    const allRoles = roleSystem.getAllRoles();
    const scored = allRoles
      .map((r) => ({
        role: r,
        score: (roleSystem as any).calculateRoleScore(player, r),
        meets: (roleSystem as any).meetsHardRequirements(
          player,
          r.hardRequirements,
        ),
      }))
      .filter((item) => item.meets)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    return scored.map((item) => item.role);
  }, [player]);

  return (
    <div className="quiz-complete">
      <h3>🎉 Квиз завершен! 🎉</h3>

      <div className="role-result">
        <h4>
          {player.name}, ты — {finalRole?.name}!
        </h4>
        <p className="role-description">{finalRole?.description}</p>
        {finalRole?.category && (
          <p className="role-category">Категория: {finalRole.category}</p>
        )}
      </div>

      {matchingRoles.length > 1 && (
        <div className="alternative-roles">
          <h5>Другие подходящие роли:</h5>
          {matchingRoles.slice(1).map((role, index) => (
            <div key={role.id} className="alternative-role">
              {index + 1}. {role.name} - {role.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
