import millify from "millify";
import { useState } from "react";

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  const text = isOpen
    ? video.description
    : video.description.slice(0, 100) + "  ... daha fazlası";
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-secondary rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2">
        <p>{millify(video.viewCount)} Görüntülenme</p>
        <p>
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default Description;
