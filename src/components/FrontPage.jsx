import React from 'react'

const background='./img1/f1.jpg';
export default function FrontPage() {
  return (
    <div style={{ backgroundImage: `url(${background})` ,
     height:"103vh"
    }
     
    }>
    Hello World
  </div>
  )
}
