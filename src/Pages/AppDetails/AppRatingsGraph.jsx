import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const AppRatingsGraph = ({ ratings }) => {

  if (!ratings || ratings.length === 0) {
    return <p className="text-gray-500 mt-4">No ratings data available</p>;
  }

  return (
    <div className="my-10 w-full h-80">
      <h1 className="text-2xl font-semibold mb-4 px-5 sm:px-0">Ratings</h1>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={60} />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" barSize={30} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingsGraph;
