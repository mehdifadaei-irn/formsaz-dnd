import React from "react"
import { Form } from "my-firstt-pac/src/index"

function Samp4() {
  return (
    <div className=" w-[74%] m-[10px] pl-36 pt-10">
      <p>a</p>
      <iframe
        style={{borderRadius: 12}}
        src="https://open.spotify.com/embed/artist/7kyv6pxakvg25qRWqq9vj7?utm_source=generator"
        width="100%"
        height="352"
        // frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Samp4
