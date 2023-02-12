import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Heading from "./components/Heading"
import SectionH from "./components/SectionH"
import Counter from "./components/Counter"
import List from "./components/List"
import Custome from "./components/Custome";
import {Form} from 'my-firstt-pac'

const myJson: string =
  '[{"name":"باتون","type":"submit","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"height: 40px;width: 130px;border-radius: 5px;margin: 5px;","fieldClassCss":"","fieldOrder":2,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":"http://172.16.20.155:8109/api/form-curd","submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":"{\\"content-type\\":\\"application/json\\"}","selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"ایمیل","type":"email","required":false,"value":null,"readonly":true,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":2,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"جنسیت","type":"checkbox","required":false,"value":null,"readonly":false,"tableVisibility":true,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":"مذکر","falseTitle":"مونث","radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"متن","type":"text","required":true,"value":null,"readonly":true,"tableVisibility":true,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":5,"fieldMask":null,"length":null,"minLength":1,"maxLength":10,"language":"en","tab":true,"space":true,"textColor":"#ef2525","textBackgroundColor":"#6ae2d4","textFontName":"","textFontSize":30,"isJustChar":true,"isJustDigit":true,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":2,"formCurdId":null,"name":"تاریخ","type":"jalali","required":false,"value":null,"readonly":false,"tableVisibility":true,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":8,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":"{\\"name\\":1, \\"family\\":2}","dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"رادیو","type":"radio","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":null,"fieldClassCss":null,"fieldOrder":20,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":"{\\"name\\":\\"John\\", \\"age\\":30, \\"car\\":null}\\n","dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div>
      {/* <Heading title="MyTitle" primaryColor="#ff2ff2" />
      <SectionH>MMDNABUDI bebini!!!!</SectionH>
      <Counter setCount={setCount}>count is {count}</Counter>
      <List
        items={["coffee", "mmd", "Nder"]}
        render={(item: string) => (
          <span className="t text-yellow-400">{item.toUpperCase()}</span>
        )}
      />
      <Custome myJson={myJson}/> */}
      <Form label="MyForm" json={myJson}/>
    </div>
  )
}

export default App
