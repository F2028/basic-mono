import type { PlayerRef } from "./Types";
import { RentPool } from "../economy/RentPool";
export class Property {
    public owner: PlayerRef | null = null;
    public rentpool:RentPool = new RentPool;
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number,
        public readonly rent: number,
    ) { }

    public isOwned(): boolean {
        return this.owner !== null;
    }
}