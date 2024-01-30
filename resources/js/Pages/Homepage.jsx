import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50 ">
            <Head title={props.title} />
            <div>
                <p>{props.description}</p>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black shadow-md border rounded-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p>{data.description}</p>
                                <i className="text-sm">{data.category}</i>
                                <i className="text-sm">{data.author}</i>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada berita saat ini</p>
                )}
            </div>
        </div>
    );
}
