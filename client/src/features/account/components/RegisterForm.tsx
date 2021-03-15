import { Divider, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
import { BaseForm, BaseFormProps } from '../../../components/BaseForm';
import { phoneRegex } from '../../../constants/phoneRegex';

const { Option } = Select;

export const RegisterForm: React.FC<BaseFormProps> = (props) => {
  return (
    <BaseForm {...props}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Divider />

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone!' },
          { pattern: phoneRegex, message: 'Please input valid phone' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please input real email' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
    </BaseForm>
  );
};
