"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const AdminPage = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            const querySnapshot = await getDocs(collection(db, "userQueries"));
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setQueries(data);
        };

        fetchQueries();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">User Queries</h1>
            <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Phone</th>
                        <th className="border border-gray-300 px-4 py-2">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map((query) => (
                        <tr key={query.id}>
                            <td className="border border-gray-300 px-4 py-2">{query.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{query.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{query.phone}</td>
                            <td className="border border-gray-300 px-4 py-2">{query.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
