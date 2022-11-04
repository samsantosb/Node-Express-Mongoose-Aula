import { Request, Response } from "express";

export const mockRequest = () => {
  const req = {} as Request;
  req.body = jest.fn().mockReturnValue(req) as unknown as Request["body"];
  req.params = jest.fn().mockReturnValue(req) as unknown as Request["params"];
  req.query = jest.fn().mockReturnValue(req) as unknown as Request["query"];
  return req;
};

export const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res) as unknown as Response["status"];
  res.json = jest.fn().mockReturnValue(res) as unknown as Response["json"];
  return res;
};
