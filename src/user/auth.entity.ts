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

export interface AuthInstance extends BaseAttributes {
  id_user: number;
  uid: string;
  token: string;
  role: string;
  latestLogin: Date;
  softdelete: Date;
}

export const AuthModel = new EntitySchema<AuthInstance>({
  name: 'auth',
  tableName: 'auths',
  properties: {
    ...base,
    id_user: { type: 'number', nullable: true },
    uid: { type: 'string', nullable: true },
    token: { type: 'string', nullable: true },
    role: { type: 'string', nullable: true },
    latestLogin: {
      type: 'date',
      onCreate: () => new Date(),
    },
    softdelete: {
      type: 'date',
      nullable: true,
    },
  },
});
