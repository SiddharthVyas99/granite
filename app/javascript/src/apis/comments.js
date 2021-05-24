import axios from "axios";

const list = () => axios.get("/comments");

const show = slug => axios.get(`/comments/${slug}`);

const create = payload => axios.post("/comments/", payload);

const update = ({ slug, payload }) => axios.put(`/comments/${slug}`, payload);

const destroy = slug => axios.delete(`/comments/${slug}`);

const tasksApi = {
  list,
  show,
  create,
  update,
  destroy,
};

export default tasksApi;
