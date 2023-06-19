import GameCard from "@/components/GameCard";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import React from "react";

interface UserGame {
    name: string;
}

async function getGames() {
    const games = await kv.hgetall("user1");
    console.log(games);

    return games;
}

async function deleteGame(gameKey: string) {
    "use server";

    kv.hdel("user1", gameKey);
    kv.getdel(gameKey);

    revalidatePath("/games");
}

export default async function GamesPage() {
    const userGames = (await getGames()) as Record<string, UserGame>;

    return (
        <>
            <p>{JSON.stringify(userGames)}</p>
            {Object.entries(userGames).map(([gameKey, game]) => {
                return (
                    <React.Fragment key={gameKey}>
                        <GameCard
                            action={deleteGame}
                            game={game}
                            gameKey={gameKey}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
}
