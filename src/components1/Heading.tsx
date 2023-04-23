import React, { ReactElement } from "react"

type HeadingProps = {
  title: string
  primaryColor?: string
}

function Heading({ title, primaryColor }: HeadingProps): ReactElement {
  return (
    <div className="w-full h-14 py-20 flex justify-between px-52">
      <div className="bg-gray-300 w-28 h-14 justify-center justify-items-center flex items-center rounded-[30px]">
        <p className="text-center">Sing in</p>
      </div>

      <div className="bg-gray-300 w-28 h-14 justify-center justify-items-center flex items-center rounded-[30px]">
        <p>SubmitProduct</p>
      </div>

      <div className="bg-gray-300 w-28 h-14 justify-center justify-items-center flex items-center rounded-[30px]">
        <p>Full Profile</p>
      </div>
    </div>
  )
}

export default Heading
