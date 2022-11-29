import { querySinglePost, graphcms } from "../../../services/api";

export default async function asynchandler(req, res) {
  try {
    const { slug } = req.query;
    const result = await graphcms.request(querySinglePost, {
      slug,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "Erro ao criar" });
  }
}
