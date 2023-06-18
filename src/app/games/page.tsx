import Game from "@/interfaces/Game";
import { kv } from "@vercel/kv";
import Link from "next/link";
import React from "react";

interface UserGame {
    name: string;
    key: string;
}

async function getGames() {
    const games = await kv.smembers("user1");
    console.log(games);

    // if (games.length < 1) {
    //     throw new Error("No Games");
    // }

    return games;
}

export default async function GamesPage() {
    const userGames = (await getGames()) as unknown as UserGame[];

    return (
        <>
            {userGames.map((game) => {
                return (
                    <React.Fragment key={game.key}>
                        <Link
                            href={`/games/${game.key}`}
                            className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
                        >
                            {game.name}
                        </Link>
                    </React.Fragment>
                );
            })}
        </>
    );
}
