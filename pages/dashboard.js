import { useState } from "react";
import { bookStore } from "@/data/books";

export default function Dashboard() {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    }
    return (
        <>
            Welcome to the Dashboard
            <button onClick={() => addingData()}>Show data</button>
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == "java") {
                        return (
                            <div key={index}>
                                <h1>{b.title}</h1>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <div key={ind}>
                                                {a}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                })
            }
        </>
    )
}