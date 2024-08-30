"use server";

import { UTApi } from "uploadthing/server";
export const deleteImg = async (file: string) => {
  const api = new UTApi();
  await api.deleteFiles([file]);
};
