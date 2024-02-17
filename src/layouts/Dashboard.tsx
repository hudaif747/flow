import CookieConsent from "@/components/cookieConsent";
import DeezerEmbed from "@/deezer/DeezerEmbed";

const Dashboard = () => {
  const focusMusicPlaylistUrl = "https://www.deezer.com/playlist/9817127782";

  return (
    <div className="flex items-center h-screen">
      <div className="w-1/6 bg-black h-screen flex justify-center items-center">
        <h1>Side Panel</h1>
      </div>
      <div className="w-5/6 flex justify-center items-center ">
        <CookieConsent />
        <DeezerEmbed
          deezerUrl={focusMusicPlaylistUrl}
          autoplay={true}
          maxwidth={700}
          maxheight={300}
          radius={true}
          tracklist={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
