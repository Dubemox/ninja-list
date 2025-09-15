// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Naruto", email: "naruto@konoha.com", website: "naruto.com", address: { city: "Konoha" } },
  { id: 2, name: "Sasuke", email: "sasuke@uchiha.com", website: "sasuke.com", address: { city: "Konoha" } },
  { id: 3, name: "Yuno", email: "yuno@clover.com", website: "yuno.com", address: { city: "Clover Kingdom" } },
  { id: 4, name: "Astar", email: "astar@clover.com", website: "astar.com", address: { city: "Clover Kingdom" } }
  ]);
}
