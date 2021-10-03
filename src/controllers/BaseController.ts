import { Request, Response } from 'express';
import { BaseService, Options } from '@/services/BaseService';

export class BaseController {
  service: BaseService

  constructor(service: BaseService) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response) => {
    let response: unknown;
    const options = {
      ...req.query,
    };

    try {
      const instances = await this.service.getAll(options as Options);

      response = { data: instances };
    } catch (error: any) {
      response = { error: error.message || error };
    }

    return res.send(response);
  }

  getOne = async (req: Request, res: Response) => {
    let response: unknown;

    try {
      const { id } = req.params;
      const instance = await this.service.getOne(+id);

      response = { data: instance };
    } catch (error: any) {
      response = { error: error.message || error };
    }

    return res.send(response);
  }

  add = async (req: Request, res: Response) => {
    let response: unknown;

    try {
      const instance = await this.service.add(req.body);

      response = { data: instance };
    } catch (error: any) {
      response = { error: error.message || error };
    }

    return res.send(response);
  }

  update = async (req: Request, res: Response) => {
    let response: unknown;

    try {
      const { id } = req.params;
      const instance = await this.service.update(+id, req.body);

      response = { data: instance };
    } catch (error: any) {
      response = { error: error.message || error };
    }

    return res.send(response);
  }

  delete = async (req: Request, res: Response) => {
    let response: unknown;

    try {
      const { id } = req.params;
      const instance = await this.service.delete(+id);

      response = { data: instance };
    } catch (error: any) {
      response = { error: error.message || error };
    }

    return res.send(response);
  }
}
