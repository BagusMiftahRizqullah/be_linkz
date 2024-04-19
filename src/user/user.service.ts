import { Injectable } from '@nestjs/common';
import { MikroORM, EntityManager, wrap } from '@mikro-orm/core';
import { UserInstance, UserModel } from './user.entity';
import { AuthModel } from './auth.entity';
import * as argon from 'argon2';
const moment = require('moment');

const responseHandler = require('../helpers/responseHandler');

@Injectable()
export class UserService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}
  async login(req) {
    try {
      const user = await this.orm.em.findOne(UserModel, {
        email: req.email,
      });

      if (!user)
        return responseHandler.error(
          `Your email and password do not match. Please try again`,
          400,
        );

      const userActived = await this.orm.em.findOne(UserModel, {
        status: 'ACTIVE',
      });
      if (!userActived)
        return responseHandler.error(
          `Your Account is not Active. Please Contact Admin`,
          400,
        );

      const pwMatches = await argon.verify(user.password, req.password);

      if (!pwMatches)
        return responseHandler.error(
          `Your email and password do not match. Please try again`,
          400,
        );
      const mydatas = {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        no_telephone: user.no_telephone,
        token: user.password,
        status: user.status,
      };

      const InsertToAuth = await this.orm.em.create(AuthModel, {
        id_user: user.id,
        uid: req.uid,
        token: user.password,
        role: user.role,
      });

      await this.orm.em.persistAndFlush(InsertToAuth);

      return responseHandler.succes(`success`, mydatas, 200);
    } catch (error) {
      return responseHandler.error(`Server Error`, 500);
    }
  }

  async signup(req: UserInstance) {
    // Generate pws
    const password = await argon.hash(req.password);
    try {
      const user = await this.orm.em.findOne(UserModel, {
        email: req.email,
      });

      if (user) return responseHandler.error(`This email already exists`, 400);

      // Save to db
      const CreateUsers = await this.orm.em.create(UserModel, {
        name: req.name,
        email: req.email,
        password: password,
        age: req.age,
        no_telephone: req.no_telephone,
        role: req.role,
        status: 'ACTIVE',
      });

      await this.orm.em.persistAndFlush(CreateUsers);

      return responseHandler.succes(`success`, CreateUsers, 200);
    } catch (error) {
      return responseHandler.error(`Server Error`, 500);
    }
  }

  async GetAuth() {
    try {
      const dataAuth = await this.orm.em.findAll(AuthModel);

      return responseHandler.succes(`success`, dataAuth, 200);
    } catch (error) {
      return responseHandler.error(`Server Error`, 500);
    }
  }

  async DellUser(req) {
    console.log('DELLREQ', req);
    const dateNow = moment().format('YYYY-MM-DDThh:mm:ss.ms');
    try {
      const userActived = await this.orm.em.findOne(UserModel, {
        status: 'ACTIVE',
      });

      if (!userActived)
        return responseHandler.error(
          `Your Account is not Active. Please Contact Admin`,
          400,
        );

      const idDell = await this.orm.em.findOne(UserModel, req);

      console.log('DELLREQ2', idDell, dateNow);

      const newUser = await wrap(idDell).assign({
        status: 'NONACTIVE',
        deleted_at: `${dateNow}` || dateNow,
      });

      const InsertToAuth = await this.orm.em.create(AuthModel, {
        id_user: idDell.id,
        uid: `UID${Math.random()}`,
        token: idDell.password,
        role: idDell.role,
        deleted_at: `${dateNow}` || dateNow,
      });

      await this.orm.em.persistAndFlush(InsertToAuth);
      await this.orm.em.persistAndFlush(newUser);

      return responseHandler.succes(`success`, newUser, 200);
    } catch (error) {
      return responseHandler.error(`Server Error`, 500);
    }
  }
}
