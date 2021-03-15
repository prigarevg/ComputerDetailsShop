import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { ObjectID } from 'mongodb';
import { EntityEnum } from '../enums/EntityEnum';
import { AbstractController } from './AbstractController';

@Controller('api/details')
export class DetailsController extends AbstractController {
  constructor() {
    super(EntityEnum.Details);
  }

  @Get('/')
  private async getDetails(req: Request, res: Response) {
    const collection = this.getCollection();

    const sortBy: {
      type: string;
      order: 'desc' | 'asc';
    } = JSON.parse(req.query.sortBy as any);

    let category = null;

    if (req.query.category) {
      category = JSON.parse(req.query.category as any);
    }

    let details = await collection
      .find(category ? { category } : undefined)
      .toArray();

    details = details.sort((a, b) => {
      if (a[sortBy.type] < b[sortBy.type]) {
        return -1;
      }
      if (a[sortBy.type] > b[sortBy.type]) {
        return 1;
      }
      return 0;
    });

    res.status(200).send({ result: details });
  }

  @Get('/:_id')
  private async getUser(req: Request, res: Response) {
    const _id = new ObjectID(req.params._id);

    const collection = this.getCollection();

    collection.findOne({ _id }, (err, result) => {
      if (result) {
        return res.status(422).send({
          errors: [{ msg: 'Email must be unique', param: 'email' }],
        });
      }

      return res.status(200).send({ result: { [result._id]: result } });
    });
  }
}
