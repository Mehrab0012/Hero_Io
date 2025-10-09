import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const RatingGraph = ({ ratings }) => {

    return (
        <div className='w-full '>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={[...ratings].reverse()} layout="vertical">
                    <XAxis type="number" stroke="black" />
                    <YAxis type="category" dataKey="name" stroke="#FF8811" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5.5" />
                    <Bar dataKey="count" fill="#FF8811" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingGraph;