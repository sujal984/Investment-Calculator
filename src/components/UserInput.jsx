import { InputNumber, Button, Row, Col, Form } from "antd";
import React from "react";

function UserInput({ onChange, userInput, onReset }) {
  return (
    <div
      style={{
        padding: 24,
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Form layout="vertical" style={{ color: "white !important" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item label="Initial Investment">
              <InputNumber
                size="large"
                id="initial-investment"
                required
                value={userInput?.initialInvestment}
                onChange={(value) => onChange("initialInvestment", value)}
                style={{ width: "100%" }}
                placeholder="Initial Investment (in INR)"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Annual Investment">
              <InputNumber
                size="large"
                id="annual-investment"
                required
                value={userInput?.annualInvestment}
                onChange={(value) => onChange("annualInvestment", value)}
                style={{ width: "100%" }}
                placeholder="Annual Investment (in INR)"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Expected Return (%)">
              <InputNumber
                size="large"
                min={0}
                id="expected-return"
                required
                value={userInput?.expectedReturn}
                onChange={(value) => onChange("expectedReturn", value)}
                style={{ width: "100%" }}
                placeholder="Expected Return (%)"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="Duration (Years)">
              <InputNumber
                size="large"
                min={1}
                id="duration"
                required
                value={userInput?.duration}
                onChange={(value) => onChange("duration", value)}
                style={{ width: "100%" }}
                placeholder="Duration (Years)"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: 16 }}>
          <Button
            type="primary"
            danger
            onClick={onReset}
            style={{
              width: "50%",
              padding: "20px",
              fontSize: "24px",
              fontWeight: "normal",
            }}
          >
            Reset
          </Button>
        </Row>
      </Form>
    </div>
  );
}

export default UserInput;
