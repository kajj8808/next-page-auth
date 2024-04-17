import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) return res.status(404).json({ ok: false });
  const user = await db?.user.findUnique({
    where: {
      id: +req.session.user.id,
    },
  });
  return res.status(200).json({ ok: true, ...user });
}

export default withIronSessionApiRoute(handler, {
  cookieName: "auth-session",
  password: "V<xGM?4ALE>/UQk%;Rg'7=Sr$&jX9Wwb",
});
