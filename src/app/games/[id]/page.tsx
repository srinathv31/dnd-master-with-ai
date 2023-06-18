import Game from "@/interfaces/Game";
import { kv } from "@vercel/kv";

async function getGame(id: string) {
    const getExample = await kv.get(id);
    console.log(getExample);
    return getExample as Game;
}

export default async function GamePage({
    params,
}: {
    params: { id: string };
}): Promise<JSX.Element> {
    const game = await getGame(params.id);

    return (
        <div>
            <p>Name: {game.name}</p>
            <p>Players: {game.players}</p>
            <p>Description: {game.description}</p>
        </div>
    );
}
