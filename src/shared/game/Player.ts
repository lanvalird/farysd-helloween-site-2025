import type { PlayerCharacter } from "./PlayerCharacter";

export class Player {
    protected _name: string = "Spooky Gamer"
    protected _characters: PlayerCharacter[] = []

    constructor(name?: string) {
        name && (this._name = name);
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    get characters(): PlayerCharacter[] {
        return this._characters;
    }
}