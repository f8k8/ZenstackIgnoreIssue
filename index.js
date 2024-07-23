const { Prisma, PrismaClient, User } = require("@prisma/client");
const { enhance } = require("@zenstackhq/runtime");
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"]
});
const enhanced = enhance(prisma, {
  user: {
          id: "",
          isAdmin: true
        }
});

enhanced.user.create({
        data: {
          name: "Test"
        },
      })
      .then(() => console.log("Done"))
      .catch(err => console.log(err));