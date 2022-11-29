// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  graphcms,
  makeCommentMutation,
  publishComment,
} from "../../services/api";

export default async function asynchandler(req, res) {
  try {
    const result = await graphcms.request(makeCommentMutation, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug,
    });
    const id = result.createComment.id;
    await graphcms.request(publishComment, {
      id: id,
    });
    res.status(200).json({ message: "Comentário criado com sucesso!" });
  } catch (err) {
    res.status(400).json({ message: "Erro ao criar" });
  }
}
