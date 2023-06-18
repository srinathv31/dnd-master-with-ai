import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";

export default function CreateGamePage(): JSX.Element {
    const gameKey = "id" + new Date().getTime();

    async function createGame(formData: FormData) {
        "use server";

        await kv.set(gameKey, {
            name: formData.get("game-name"),
            players: formData.get("players"),
            description: formData.get("description"),
        });

        await kv.sadd("user1", {
            name: formData.get("game-name"),
            key: gameKey,
        });

        redirect(`games/${gameKey}`);
    }

    return (
        <div>
            <h1 className="text-2xl">Create a New Game</h1>
            <form
                action={createGame}
                className="flex flex-col border p-3 my-2 rounded-md"
            >
                <label>Game Name</label>
                <input type="text" name="game-name" />
                <label>Players</label>
                <input type="text" name="players" />
                <label>Description</label>
                <input type="text" name="description" />
                <button
                    className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
