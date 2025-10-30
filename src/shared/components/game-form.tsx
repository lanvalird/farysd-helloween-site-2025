import { useState } from "react";
import { Player } from "../game/Player";

export function GameForm() {
  const [player, setPlayer] = useState<Player | null>(null);

  function formAction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (player) return;

    const formElements = event.currentTarget.elements;
    const nameInput = (formElements.namedItem('name') as HTMLInputElement);
    const name = nameInput.value || undefined

    const newPlayer = new Player(name)
    setPlayer(newPlayer)
  }

  return (
    <form onSubmit={formAction}>
      {player ?
        `Сладость или гадость, ${player.name}?!` :
        (<>
          <input type="text" name="Имя" id="name" placeholder="Ваше имя" />
          <button type="submit">поехали</button>
        </>)
      }</form>
  );
}
