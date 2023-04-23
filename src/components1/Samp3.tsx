import React from 'react'
import { Form } from "my-firstt-pac/src/index"

function Samp3() {
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
          json='[{"name":"ادرس محصول","type":"url","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":1,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"تاریخ ثبت","type":"jalali","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":3,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":309,"formCurdId":null,"name":"ساعت ثبت","type":"time","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":3,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"نوع محصول","type":"radio","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":{"item1":"خوراکی", "item2":"الکترونیکی", "item3":"صنعتی"},"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":309,"formCurdId":null,"name":"اسم محصول","type":"text","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":0,"fieldMask":null,"length":null,"minLength":2,"maxLength":19,"language":"en","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":true,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
          size="small"
          style={{ backgroundColor: "inherit", width: "80%" }}
        />
      </div>
    </div>
  )
}

export default Samp3