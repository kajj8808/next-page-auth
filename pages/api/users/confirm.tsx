import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../lib/db";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = JSON.parse(req.body);
  const exists = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!exists) return res.status(404).end();
  req.session.user = {
    id: exists.id,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(handler, {
  cookieName: "auth-session",
  password: "V<xGM?4ALE>/UQk%;Rg'7=Sr$&jX9Wwb",
});
