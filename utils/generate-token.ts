const jwt = require("jsonwebtoken");
export default function () {
  const key: string = process.env.GHOST_ADMIN_API_KEY || "";

  const [id, secret] = key.split(":");
  const token = jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid: id,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: `/admin/`,
  });

  return token;
}
