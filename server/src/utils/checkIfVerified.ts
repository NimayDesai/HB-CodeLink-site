import { User } from "prisma/generated";

export const checkIfVerified = (user: User): boolean => {
  if (!user.verified) {
    throw new Error("not verified");
  }
  return true;
};
