import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = JSON.parse(req.body);
  if (!email || !name) return res.status(400).json({ ok: false });

  await db.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  return res.json({
    ok: true,
  });
}
