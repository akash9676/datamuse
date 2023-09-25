import { useState } from "react";
import { Link } from "react-router-dom";
import { datamuse } from "./data";

const Home = () => {
    const [word, setWord] = useState("");
    const buttons = datamuse;
    return (
        <>
            <div className="grid place-items-center h-screen ">
                <form className="flex flex-col gap-4 items-center">
                    <label htmlFor="input" className="text-4xl mb-4">
                        Enter Your Word
                    </label>
                    <input
                        id="input"
                        value={word}
                        placeholder="Example : fire"
                        onChange={(e) => setWord(e.target.value)}
                        className="mb-4 h-10 border-2 rounded border-gray-600"
                    />
                    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {buttons.map((button) => {
                            const { id, name } = button;
                            return (
                                <Link
                                    to={`/FetchWord/${word}_${name}`}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded"
                                    key={id}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Home;
