"use client";

import Link from "next/link";

export default function GameCard({
    action,
    game,
    gameKey,
}: {
    action: (params: string) => void;
    game: { name: string };
    gameKey: string;
}): JSX.Element {
    return (
        <div className="flex flex-row">
            <Link
                href={`/games/${gameKey}`}
                className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
            >
                {game.name}
            </Link>
            <button
                className="transition ease-in-out bg-red-500 hover:bg-red-700 active:bg-red-900 p-3 m-2 rounded uppercase font-semibold"
                onClick={() => action(gameKey)}
            >
                DEL
            </button>
        </div>
    );
}
