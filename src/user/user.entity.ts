import { EntitySchema } from '@mikro-orm/core';

export interface BaseAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const base = {
  id: { type: 'number', primary: true },
  createdAt: { type: 'date', onCreate: () => new Date() },
  updatedAt: {
    type: 'date',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  },
};

export interface UserInstance extends BaseAttributes {
  name: string;
  email: string;
  password: string;
  age: number;
  no_telephone: number;
  role: string;
  status: string;
  deleted_at: Date;
}

export const UserModel = new EntitySchema<UserInstance>({
  name: 'users',
  tableName: 'users',
  properties: {
    ...base,
    name: { type: 'string', unique: true, nullable: true, length: 255 },
    email: { type: 'string', unique: true, nullable: true, length: 255 },
    password: { type: 'string' },
    age: { type: 'number', nullable: true },
    no_telephone: { type: 'string', nullable: true },
    role: { type: 'string', nullable: true },
    status: { type: 'string', nullable: true },
    deleted_at: { type: 'date', nullable: true },
  },
});
