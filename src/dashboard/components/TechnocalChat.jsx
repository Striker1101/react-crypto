import React from "react";

export default function TechnocalChat({ width }) {
  return (
    <div className="chat">
      <iframe
        height="510"
        title="chat"
        width={width}
        src="https://ssltvc.investing.com/?pair_ID=27&height=510&width=1000&interval=300&plotStyle=area&domain_ID=72&lang_ID=72&timezone_ID=0"
      ></iframe>
      <div className="cover"></div>
    </div>
  );
}
