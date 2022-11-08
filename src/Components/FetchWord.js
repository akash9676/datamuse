import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { datamuse } from "./data";

const FetchWord = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const myparams = id.split("_");

    const type = datamuse.filter((data)=>data.name === myparams[1])[0]

    useEffect(() => {
        fetch(`https://api.datamuse.com/words?${type.keyword}=${myparams[0]}`)
            .then((response) => response.json())
            .then(setData);
    }, [myparams ,type]);

    return (
        <div>
            <ul className="grid place-items-center h-screen mt-6">
                <div className="grid grid-flow-row grid-rows-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
                    {data.map((item) => (
                        <li
                            key={item.word}
                            className="text-lg list-decimal list-inside font-semibold"
                        >
                            {item.word}
                        </li>
                    ))}
                </div>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                    <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</Link>
                </div>
            </ul>
        </div>
    );
};
export default FetchWord;
