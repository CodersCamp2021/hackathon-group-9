import { Page } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Page | Error>
) {
  if (req.method === "POST") {
    const url = decodeURIComponent(req.query.url as string);
    const page = await prisma.page.findUnique({ where: { url } });

    if (!page) {
      res.status(404).end();
      return;
    }

    const updatedPage = await prisma.page.update({
      where: { id: page.id },
      data: { downvotes: page.downvotes + 1 },
    });
    res.status(202).send(updatedPage);

    return;
  }

  res.status(405).end();
}
