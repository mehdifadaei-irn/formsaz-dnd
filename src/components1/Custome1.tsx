import React from "react"
import { Form } from "my-firstt-pac/src/index"

function Custome1() {
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
          json='[{"name":"ادرس محصول","type":"url","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"color: white; background-color: black","fieldClassCss":null,"fieldOrder":1,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"تاریخ ثبت","type":"jalali","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":3,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":309,"formCurdId":null,"name":"ساعت ثبت","type":"time","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":3,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"نوع محصول","type":"radio","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":{"item1":"خوراکی", "item2":"الکترونیکی", "item3":"صنعتی"},"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":309,"formCurdId":null,"name":"اسم محصول","type":"text","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":0,"fieldMask":null,"length":null,"minLength":2,"maxLength":19,"language":"en","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":true,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
          label="SAMINRAY"
          size="medium"
          style={{ borderRadius: "5px",  }}
        />
      </div>
      {/* <Form
        handleSubmit={() => {}}
        json='[{"formSubjectId":2,"formCurdId":null,"name":"متنی","type":"text","required":false,"value":null,"readonly":false,"tableVisibility":true,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":1,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":"en","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"باتون","type":"submit","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":2,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":"http://localhost:8109/api/form-curd","submitAction":null,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":2,"formCurdId":null,"name":"نمونه","type":"email","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":1,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
        label="Lable"
        size="small"
      /> */}
    </div>
  )
}

export default Custome1
