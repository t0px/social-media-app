import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {/* image="/src/images/feed/landscape.jpg" */}
      {/* "/src/images/avatar/1.jpg" */}
      <Post
        avatar="/src/images/avatar/1.jpg"
        name="Roland Meir"
        date="February 19, 2023"
        imgPath="/src/images/feed/landscape.jpg"
        desc="A picture I took yesterday! What do y'all think?"
      />

      <Post
        avatar="/src/images/avatar/2.jpg"
        name="Austin Evans"
        date="February 18, 2023"
        imgPath="/src/images/feed/hot air balloons.jpg"
        desc="Some balloons were flying around..."
      />
      <Post
        avatar="/src/images/avatar/3.jpg"
        name="Gilad Adam"
        date="February 18, 2023"
        imgPath="/src/images/feed/snowy mountains.jpg"
        desc="Surrounded by majestic snow-capped mountains, I'm captivated by their serene beauty. The tranquility of this winter wonderland takes my breath away. ❄️🏔️ Nature's masterpiece in all its glory, reminding me of the simple joys and the power of nature's embrace. Grateful for this awe-inspiring experience."
      />

      <Post
        avatar="/src/images/avatar/4.jpg"
        name="Emily Rogers"
        date="February 16, 2023"
        imgPath="/src/images/feed/night out.jpg"
        desc="Unforgettable memories made with my favorite girls, lighting up the night with laughter and love. 💃✨"
      />

      <Post
        avatar="/src/images/avatar/luffy.png"
        name="David Katz"
        date="February 13, 2023"
        imgPath="/src/images/feed/highway.jpg"
        desc="Cruising down the highway, the thrill of freedom courses through my veins as I chase endless possibilities, fueled by the open road and the promise of unforgettable adventures. 🚗💨"
      />
    </Box>
  );
};

export default Feed;
