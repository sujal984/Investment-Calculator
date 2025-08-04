import React from "react";
import { Table, Form, Input, Button } from "antd";
import { formatter } from "../util/investment";

function Result({ results, initialInvestment }) {
  const dataSource = results.map((yearData) => {
    const totalInterest =
      yearData.valueEndOfYear -
      yearData.annualInvestment * yearData.year -
      initialInvestment;
    const totalInvestedCapital =
      yearData.annualInvestment * yearData.year + initialInvestment;

    return {
      key: yearData.year,
      year: yearData.year,
      investmentValue: formatter.format(yearData.valueEndOfYear),
      interest: formatter.format(yearData.interest),
      totalInterest: formatter.format(totalInterest),
      investedCapital: formatter.format(totalInvestedCapital),
    };
  });

  const columns = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Investment Value",
      dataIndex: "investmentValue",
      key: "investmentValue",
    },
    {
      title: "Interest (Year)",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Total Interest",
      dataIndex: "totalInterest",
      key: "totalInterest",
    },
    {
      title: "Invested Capital",
      dataIndex: "investedCapital",
      key: "investedCapital",
    },
  ];

  return (
    <Table
      bordered
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      scroll={{ x: true }}
      locale={{ emptyText: "No data" }}
      style={{
        padding: "20px",
        backgroundColor: "#2d8e",
      }}
    />
  );
}

export default Result;
