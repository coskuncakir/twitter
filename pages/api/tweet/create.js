import Twit from "../../../lib/twit";

export default (req, res) => {
  const { tweet } = JSON.parse(req.body);

  if (!tweet) return res.status(400).json({ message: "Tweet cannot be empty" });

  Twit.post("statuses/update", { status: tweet }, function (
    err,
    data,
    response
  ) {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json(data);
  });
};
