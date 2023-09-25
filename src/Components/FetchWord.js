/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { datamuse } from "./data";

const FetchWord = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const myparams = id.split("_");

    const [loading, setloading] = useState(false);

    const type = datamuse.filter((data) => data.name === myparams[1])[0];

    const handleevent = async () => {
        setloading(true);
        await fetch(
            `https://api.datamuse.com/words?${type.keyword}=${myparams[0]}`
        )
            .then((response) => response.json())
            .then(setData);
        setloading(false);
    };

    useEffect(() => {
        handleevent();
    }, []);

    return (
        <div>
            {loading ? (
                <div className="h-screen flex items-center justify-center">
                    <div
                        classname="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                    >
                        <span classname="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) : (
                <>
                    <ul className="grid place-items-center h-screen mt-6">
                        <div className="grid grid-flow-row grid-rows-1 gap-5 md:grid-rows-8">
                            {data.map((item) => (
                                <li
                                    key={item.word}
                                    className="text-lg list-decimal list-inside font-semibold"
                                >
                                    {item.word}
                                </li>
                            ))}
                        </div>
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link
                                to="/"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Home
                            </Link>
                        </div>
                    </ul>
                </>
            )}
        </div>
    );
};
export default FetchWord;
