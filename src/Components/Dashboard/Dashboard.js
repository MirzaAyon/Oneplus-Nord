import React from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-lg-6 col-md-12 col-12">
                        <h3 className="text-primary mb-3">Month Wise Sell</h3>
                        <div style={{ width: "99%", height: 300 }}>
                            <ResponsiveContainer>
                                <LineChart data={data}>
                                    <Line
                                        type="monotone"
                                        dataKey="sell"
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                    />
                                    <XAxis dataKey="month"></XAxis>
                                    <YAxis></YAxis>
                                    <Tooltip></Tooltip>
                                    <Legend></Legend>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <h3 className="text-primary mb-3">Investment VS Revenue</h3>
                        <div style={{ width: "99%", height: 300 }}>
                            <ResponsiveContainer>
                                <AreaChart data={data}>
                                    <XAxis dataKey="month"></XAxis>
                                    <YAxis></YAxis>
                                    <Tooltip></Tooltip>
                                    <Legend></Legend>
                                    <Area
                                        type="monotone"
                                        dataKey="investment"
                                        stackId="1"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stackId="1"
                                        stroke="#82ca9d"
                                        fill="#82ca9d"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-lg-6 col-md-12 col-12">
                        <h3 className="text-primary mb-3">Investment VS Revenue</h3>
                        <div style={{ width: "99%", height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={data}>
                                    <XAxis dataKey="month"></XAxis>
                                    <YAxis></YAxis>
                                    <Tooltip></Tooltip>
                                    <Legend />
                                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <h3 className="text-primary mb-4">Investment VS Revenue</h3>
                        <div style={{ width: "99%", height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="investment"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={60}
                                        fill="#8884d8"
                                    />
                                    <Pie
                                        data={data}
                                        dataKey="revenue"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={90}
                                        fill="#82ca9d"
                                        label
                                    />
                                    <Tooltip></Tooltip>
                                    <Legend></Legend>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
