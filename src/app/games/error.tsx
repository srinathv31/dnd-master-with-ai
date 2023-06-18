"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>No games were found under your account!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="transition ease-in-out bg-orange-500 hover:bg-orange-700 active:bg-orange-900 p-3 m-2 rounded uppercase font-semibold"
            >
                Try again
            </button>
            <Link
                href={"/games/create"}
                className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
            >
                Create new Game
            </Link>
            <Link
                href={"/"}
                className="transition ease-in-out bg-teal-500 hover:bg-teal-700 active:bg-teal-900 p-3 m-2 rounded uppercase font-semibold"
            >
                Home
            </Link>
        </div>
    );
}
