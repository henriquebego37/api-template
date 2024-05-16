import { Express } from "express";
import getRoute from "./routes/getRoute";
import postRoute from "./routes/postRoute";
import delRoute from "./routes/delRoute";
import emitter from "../../hooks/emitter";
import putRoute from "./routes/putRoute";

const rtsApiTemplate = ({ router }: { router: Express }) => {
  // ------------------------------------------------------------------------------>
  const sURL = "/example";
  // ------------------------------------------------------------------------------>

  const { get, post, del, put } = emitter(router);
  // ------------------------------------------------------------------------------>
  get(getRoute)(`${sURL}/list`);
  // ------------------------------------------------------------------------------>
  post(postRoute)(`${sURL}/create`);
  // ------------------------------------------------------------------------------>
  del(delRoute)(`${sURL}/delete/:id`);
  // ------------------------------------------------------------------------------>
  put(putRoute)(`${sURL}/update/:id`);
  // ------------------------------------------------------------------------------>
};
export default rtsApiTemplate;
