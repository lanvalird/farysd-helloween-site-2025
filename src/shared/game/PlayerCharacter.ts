export type PlayerCharacterInfo = { name: string, description: string };

export class PlayerCharacter {
    private readonly _name: string;
    private readonly _description: string;

    private _count: number;

    constructor(name: string, description: string, count = 0) {
        this._name = name;
        this._description = description;
        this._count = count;
    }

    public getInfo(): PlayerCharacterInfo {
        return {
            name: this._name,
            description: this._description
        }
    }

    get count(): number {
        return this._count
    }

    public calculatePercent(fullbar: number): number {
        return (this.count / fullbar) * this.count;
    }
}