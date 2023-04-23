import React from "react"
import { Form } from "my-firstt-pac/src/index"

function Custome2() {

  function handleSub(e: any) {
    console.log(e)
  }

  return (
    <div className="mt-4">
      <h2 style={{ textAlign: "center" }} className={"my-2"}>
        FORM2
      </h2>
      <div className="flex w-full justify-center">
        {/* <button onClick={clicked}>clicasa</button> */}
        <Form
          handleSubmit={handleSub}
          json='[{"formSubjectId":310,"formCurdId":null,"name":"نام خوانوادگی","type":"text","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":0,"fieldMask":null,"length":null,"minLength":3,"maxLength":13,"language":"fa","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":true,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":310,"formCurdId":null,"name":"محل تولد","type":"select-one","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":2,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":{"item1":"بابل", "item2":"بابلسر", "item3":"ساری", "item4":"نوشهر", "item5":"فریدونکنار", "item6":"بهشهر"}},{"formSubjectId":310,"formCurdId":null,"name":"تلفن ثابت","type":"tel","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"color: blue;","fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":310,"formCurdId":null,"name":"پسوورد","type":"password","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":5,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
          label="SAMINRAY"
          size="small"
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  )
}

export default Custome2
