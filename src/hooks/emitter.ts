import { Express, Request, Response } from "express";

const emitter = (router: Express) => ({
  get: (handler: Function) => (url: string) =>
    router.get(url, async (req: Request, res: Response) => {
      await handler(req, res);
    }),
  post: (handler: Function) => (url: string) =>
    router.post(url, async (req: Request, res: Response) => {
      await handler(req, res);
    }),
  del: (handler: Function) => (url: string) =>
    router.delete(url, async (req: Request, res: Response) => {
      await handler(req, res);
    }),
  put: (handler: Function) => (url: string) =>
    router.put(url, async (req: Request, res: Response) => {
      await handler(req, res);
    }),
});

export default emitter;
