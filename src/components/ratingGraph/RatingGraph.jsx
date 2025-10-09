import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


const RatingGraph = ({ ratings }) => {

    return (
        <div>
            <BarChart width={1000} height={400} data={[...ratings].reverse()} layout='vertical'>
                <XAxis type="number" stroke="black" />
                <YAxis type="category" dataKey="name" stroke="#FF8811" />
                <Tooltip></Tooltip>
                <CartesianGrid stroke='#ccc' strokeDasharray='5.5'></CartesianGrid>
                <Bar dataKey='count' fill='#FF8811' barSize={30}></Bar>
            </BarChart>
        </div>
    );
};

export default RatingGraph;