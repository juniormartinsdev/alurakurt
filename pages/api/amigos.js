export default function handler(req, res) {
  const amigos = [
    'juunegreiros',
    'peas',
    'omariosouto',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  res.status(200).json(amigos);
}
