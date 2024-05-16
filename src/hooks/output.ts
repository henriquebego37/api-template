import { Response } from "express";

type HttpStatusCode =
  | "continue"
  | "switching_protocols"
  | "processing"
  | "ok"
  | "accepted"
  | "multi_status"
  | "moved_permanently"
  | "use_proxy"
  | "permanent_redirect"
  | "bad_request"
  | "unauthorized"
  | "not_found"
  | "internal_server_error"
  | "bad_gateway"
  | "insufficient_storage";

type ComponentTypes = {
  res: Response;
  type: HttpStatusCode;
  message: string;
  data?: unknown;
};

const output = ({ res, type, message, data }: ComponentTypes) => {
  switch (type) {
    //  ----------------------------->
    case "continue":
      if (!data) {
        res.status(100).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(100).json({
        message: message || "OK!",
        response: data,
      });
      res.end();
      return;
    //  ----------------------------->
    case "switching_protocols":
      if (!data) {
        res.status(101).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(101).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "processing":
      if (!data) {
        res.status(102).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(102).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "ok":
      if (!data) {
        res.status(200).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(200).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "accepted":
      if (!data) {
        res.status(202).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(202).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "multi_status":
      if (!data) {
        res.status(207).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(207).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "moved_permanently":
      if (!data) {
        res.status(302).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(302).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "use_proxy":
      if (!data) {
        res.status(305).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(305).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "permanent_redirect":
      if (!data) {
        res.status(308).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(308).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "bad_request":
      if (!data) {
        res.status(400).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(400).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "unauthorized":
      if (!data) {
        res.status(401).json({ message: "Usuário não autorizado!" });
        res.end();
        return;
      }
      res.status(401).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "not_found":
      if (!data) {
        res.status(404).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(404).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "internal_server_error":
      if (!data) {
        res.status(500).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(500).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "bad_gateway":
      if (!data) {
        res.status(502).json({ message: message || "Insufficient Data!" });
        res.end();
        return;
      }
      res.status(502).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    case "insufficient_storage":
      if (!data) {
        res.status(507).json({
          message: message || "Insufficient Data!",
        });
        res.end();
        return;
      }
      res.status(507).json({ message: message || "OK!", response: data });
      res.end();
      return;
    //  ----------------------------->
    default:
      res.status(500).send({ message: "Internal server error!" });
      res.end();
  }
};

export default output;
