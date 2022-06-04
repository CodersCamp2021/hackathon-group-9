import { Page } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Page[] | Page | Error>
) {
  if (req.method === "GET") {
    const pages = await prisma.page.findMany();
    res.status(200).send(pages);
    return;
  }

  if (req.method === "POST") {
    const data = req.body;

    if (await prisma.page.findUnique({ where: { url: data.url } })) {
      res.status(409).send({ error: "Page with given URL already exists" });
      return;
    }

    const newPage = await prisma.page.create({ data });

    res.status(201).send(newPage);
    return;
  }

  res.status(405).end();
}
