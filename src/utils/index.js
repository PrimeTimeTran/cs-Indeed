import React from "react";

export const placeCopyright = (la) => {
  const dt = new Date()
  return <div dangerouslySetInnerHTML={{ __html: `Copyright © <a href="https://github.com/PrimeTimeTran">PrimeTimeTran</a> ${dt.getFullYear()}` }} />
}