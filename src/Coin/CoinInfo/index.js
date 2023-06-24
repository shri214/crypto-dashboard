import React, { useState } from "react";
import "./style.css";
const CoinInfo = ({ header, desc }) => {
  const [flag, setFlag] = useState(true);

  const shortDesc = desc.substring(0, 200) + `<p class="read">Read more...</p>`;
  const longDesc = desc + `<p class="read">Read less</p>`;

  return (
    <div className="description">
      <h3>{header}</h3>
      {!desc ? (
        <p style={{ color: "var(--white)" }}>Description is not available...</p>
      ) : flag ? (
        <p
          dangerouslySetInnerHTML={{ __html: shortDesc }}
          onClick={() => setFlag(!flag)}
        />
      ) : (
        <p
          dangerouslySetInnerHTML={{ __html: longDesc }}
          onClick={() => setFlag(!flag)}
        />
      )}
    </div>
  );
};
export default CoinInfo;
