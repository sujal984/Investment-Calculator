import React from "react";
import { Table } from "antd";
import { formatter } from "../util/investment";

function Result({ results, initialInvestment }) {
  const dataSource = results.map((yearData) => {
    const totalInvestedCapital =
      initialInvestment + yearData.annualInvestment * yearData.year;
    const totalInterest = yearData.valueEndOfYear - totalInvestedCapital;

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
    <div style={{ padding: "20px", backgroundColor: "#2dd88e" }}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: true }}
        locale={{ emptyText: "No data" }}
      />
    </div>
  );
}

export default Result;
