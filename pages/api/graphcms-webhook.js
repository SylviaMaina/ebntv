export default async function handler(req, res) {

  const payload = req.body;

  res.status(200).json({ success: true });
}
