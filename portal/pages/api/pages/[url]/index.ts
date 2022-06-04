import { Page } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

type Error = {
  error: string;
};

type Data = Page & {
  flag?: "green" | "orange" | "red";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const url = decodeURIComponent(req.query.url as string);
  const page = await prisma.page.findUnique({ where: { url } });

  if (!page) {
    res.status(404).end();
    return;
  }

  if (req.method === "GET") {
    let flag: Data["flag"] = "green";

    if (page.upvotes + page.downvotes >= 5) {
      const rate = page.downvotes / page.upvotes;

      if (rate >= 1) {
        flag = "orange";
      }
      if (rate >= 3) {
        flag = "red";
      }
    }

    res.status(200).send({
      ...page,
      flag,
    });
    return;
  }

  if (req.method === "PUT") {
    const updatedPage = await prisma.page.update({
      where: { id: page.id },
      data: {
        ...(typeof req.body.upvotes !== "undefined" && {
          upvotes: req.body.upvotes,
        }),
        ...(typeof req.body.downvotes !== "undefined" && {
          downvotes: req.body.downvotes,
        }),
      },
    });

    res.status(202).send(updatedPage);
  }

  if (req.method === "DELETE") {
    await prisma.page.delete({ where: { id: page.id } });
    res.status(204).end();
  }

  res.status(405).end();
}
