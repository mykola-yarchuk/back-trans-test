import { ModelCtor } from 'sequelize-typescript';

export interface Options {
  [key: string]: string | number;
}

export class BaseService {
  model: ModelCtor

  constructor(model: ModelCtor) {
    this.model = model;
  }

  getAll = (options: Options) => this.model.findAll({
    where: {
      ...options,
    },
  });

  getOne = (id: number) => this.model.findByPk(id)

  add = (data: any) => this.model.create({ ...data })

  update = async (id: number, data: any) => {
    const template = { ...data };
    const instance = await this.model.findByPk(id);

    if (!instance) {
      return null;
    }

    await instance.update(template);

    return instance;
  }

  delete = async (id: number) => {
    const instance = await this.model.findByPk(id);

    if (!instance) {
      return null;
    }

    await instance.destroy();

    return instance;
  }
}
