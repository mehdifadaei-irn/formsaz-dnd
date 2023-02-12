import React, { ReactElement } from "react"

type HeadingProps = {
  title: string
  primaryColor: string
}

function Heading({ title, primaryColor }: HeadingProps): ReactElement {
  return (
    <div>
      <h1 className={`text-3xl font-bold text-[${primaryColor}]`}>{title}</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default Heading
