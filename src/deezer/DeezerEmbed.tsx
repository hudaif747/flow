import React, { useState, useEffect } from "react";

interface DeezerEmbedProps {
  deezerUrl: string;
  autoplay?: boolean;
  maxwidth?: number;
  maxheight?: number;
  radius?: boolean;
  tracklist?: boolean;
}

interface DeezerOEmbedResponse {
  html: string;
  // Include other fields from the response as needed
}

const DeezerEmbed: React.FC<DeezerEmbedProps> = ({
  deezerUrl,
  autoplay = false,
  maxwidth = 420,
  maxheight = 420,
  radius = false,
  tracklist = false,
}) => {
  const [embedHtml, setEmbedHtml] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams({
      url: deezerUrl,
      autoplay: autoplay ? "true" : "false",
      maxwidth: maxwidth.toString(),
      maxheight: maxheight.toString(),
      radius: radius ? "true" : "false",
      tracklist: tracklist ? "true" : "false",
    });

    const proxyUrl = "https://corsproxy.io/?";
    const deezerParasUrl = `https://api.deezer.com/oembed?${params.toString()}`;
    const apiUrl = `${proxyUrl}${deezerParasUrl}`;

    const fetchOEmbedContent = async () => {
      try {
        const response = await fetch(apiUrl);
        const data: DeezerOEmbedResponse = await response.json();
        setEmbedHtml(data.html);
      } catch (error) {
        console.error("Error fetching oEmbed content:", error);
      }
    };

    fetchOEmbedContent();
  }, [deezerUrl, autoplay, maxwidth, maxheight, radius, tracklist]);

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default DeezerEmbed;
