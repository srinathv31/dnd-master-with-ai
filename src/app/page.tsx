import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link
                href={"/games"}
                className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
            >
                View List of Games
            </Link>
            <Link
                href={"/games/create"}
                className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
            >
                Create new Game
            </Link>
        </main>
    );
}
