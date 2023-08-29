import { Request, Response } from 'express';

export const pingHandler = async (_req: Request, res: Response) => {
  return res.status(200).send('pong').end();
};
