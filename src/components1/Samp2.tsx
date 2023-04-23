import React from "react"
import { Form } from "my-firstt-pac/src/index"

function Samp2() {
  return (
    <div className=" w-[74%] m-[10px]  pt-8 presp">
      <p className="f text text-xl t text-right px-[19%] title-resp">
        اطلاعات شخصی
      </p>
      <p className="text-right px-36 title-resp">
        لطفا نام ادرس ایمیل و شماره تلفتن و ادرس سایت خود را وارد کنید
      </p>
      <div className="form-container pl-36">
        <Form
          handleSubmit={() => {}}
          json='[{"formSubjectId":310,"formCurdId":null,"name":"نام خوانوادگی","type":"text","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":0,"fieldMask":null,"length":null,"minLength":3,"maxLength":13,"language":"fa","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":true,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":310,"formCurdId":null,"name":"محل تولد","type":"select-one","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":2,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":{"item1":"بابل", "item2":"بابلسر", "item3":"ساری", "item4":"نوشهر", "item5":"فریدونکنار", "item6":"بهشهر"}},{"formSubjectId":310,"formCurdId":null,"name":"تلفن ثابت","type":"tel","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":310,"formCurdId":null,"name":"پسوورد","type":"password","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"padding:8px","fieldClassCss":null,"fieldOrder":5,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
          size="small"
          style={{ backgroundColor: "inherit", width: "80%" }}
        />
      </div>
    </div>
  )
}

export default Samp2
