import { useState } from "react"

export default function Code() {
  const [code, setCode] = useState(`
.container {  
  background-color: red;
}
  `)

  return (
    <section>
      <h2>Code</h2>
    </section>
  )
}
