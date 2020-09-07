import Twit from "../../lib/twit";

export default (req, res) => {
  Twit.get(
    "statuses/user_timeline",
    { screen_name: "coscakir", count: 20 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json({ error: err });
      }

      res.status(200).json(data);
    }
  );
};
