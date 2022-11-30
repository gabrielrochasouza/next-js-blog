import { graphcms, newsLetterMutation } from "../../services/api";

export default async function asynchandler(req, res) {
  try {
    const result = await graphcms.request(newsLetterMutation, {
      email: req.body.email,
    });
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
}
