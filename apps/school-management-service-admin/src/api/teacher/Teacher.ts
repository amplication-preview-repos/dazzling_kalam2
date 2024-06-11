export type Teacher = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  subjects?: Array<"Option1">;
  updatedAt: Date;
};
