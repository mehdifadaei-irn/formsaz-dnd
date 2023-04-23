import React from "react"
import { Form } from "my-firstt-pac/src/index"
import { json1 } from "./saved"
import jso from "./index.json"
import imgs1 from "../assets/bg-4.svg"
import Samp1 from "./Samp1"
import Samp2 from "./Samp2"
import Samp3 from "./Samp3"
import Samp4 from "./Samp4"

interface CustomeProps {
  myJson?: string
}

function Custome({ myJson }: CustomeProps) {
  // function Clicked() {
  //   console.log(jso[0].name)
  // }
  const [withc, setWithc] = React.useState(0)

  function allValidations(...rest: boolean[]) {
    let result: boolean = false

    console.log(rest[0] && rest[1])
  }

  function clicked() {
    // console.log(allValidations(true, true, true))
    // console.log(allValidations(true, false, true, false, false, false))
    console.log([32, 78, 99, 100].includes(99))
  }

  function handleSub(e: any) {
    console.log(e)
  }

  return (
    <div className="bg-sky-100 h-screen flex flex-row py-10 px-32">
      <div
        className="bg-white border-2 border-black w-full flex"
        style={{
          borderRadius: "17px",
        }}
      >
        <div className="flex flex-1 h-[100%] relative">
          <img
            src={imgs1}
            alt="bgS"
            height={"96%"}
            style={{ position: "absolute", zIndex: 0, margin: "12px" }}
          />

          <div className="z-10 mt-9 ml-9  w-48">
            <div
              className="flex mb-6 cursor-pointer hover:-translate-y-1 transition-all duration-500"
              onClick={() => setWithc(0)}
            >
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: withc == 0? "#fff": "inherit",
                  color: withc == 0? "#000": "#FFF",
                  marginRight: 20,
                  border: "1.7px #fff solid",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={"res-circle"}
              >
                <p className="">1</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="num-p">قدم 1</p>
                <p>اطلاعات شما</p>
              </div>
            </div>

            <div
              className="flex mb-6 cursor-pointer hover:-translate-y-1 transition-all duration-500"
              onClick={() => setWithc(1)}
            >
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: withc == 1? "#fff": "inherit",
                  color: withc == 1? "#000": "#FFF",
                  marginRight: 20,
                  border: "1.7px #fff solid",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={"res-circle"}
              >
                <p className="">2</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="num-p">قدم 2</p>
                <p>تکمیل اطلاعات</p>
              </div>
            </div>
            <div
              className="flex mb-6 cursor-pointer hover:-translate-y-1 transition-all duration-500"
              onClick={() => setWithc(2)}
            >
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: withc == 2? "#fff": "inherit",
                  color: withc == 2? "#000": "#FFF",
                  marginRight: 20,
                  border: "1.7px #fff solid",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={"res-circle"}
              >
                <p className="">3</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="num-p">قدم 3</p>
                <p>ثبت محصول</p>
              </div>
            </div>
            <div
              className="flex mb-6 cursor-pointer hover:-translate-y-1 transition-all duration-500"
              onClick={() => setWithc(3)}
            >
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: withc == 3? "#fff": "inherit",
                  color: withc == 3? "#000": "#FFF",
                  marginRight: 20,
                  border: "1.7px #fff solid",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={"res-circle"}
              >
                <p className="">4</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="num-p">قدم 4</p>
                <p>your info</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" w-[74%] m-[10px] pl-36 pt-10">
          <p className="f text text-xl">Personal Info</p>
          <p className="p-reg">
            please provide yourName, email address, and phone number
          </p>
          <Form
            handleSubmit={() => {}}
            json='[{"name":"Name","type":"text","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:1.7px solid black; padding:8px","fieldClassCss":null,"fieldOrder":0,"fieldMask":null,"length":null,"minLength":2,"maxLength":15,"language":"en","tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":true,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"name":"Email Address","type":"email","required":true,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:2px solid black;padding:8px","fieldClassCss":null,"fieldOrder":1,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":311,"formCurdId":null,"name":"Phone number","type":"tel","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:2px solid black;padding:8px","fieldClassCss":null,"fieldOrder":3,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null},{"formSubjectId":311,"formCurdId":null,"name":"address","type":"url","required":false,"value":null,"readonly":false,"tableVisibility":false,"fieldCSS":"border:2px solid black;padding:8px","fieldClassCss":null,"fieldOrder":4,"fieldMask":null,"length":null,"minLength":null,"maxLength":null,"language":null,"tab":false,"space":false,"textColor":null,"textBackgroundColor":null,"textFontName":null,"textFontSize":null,"isJustChar":false,"isJustDigit":false,"minimum":null,"maximum":null,"submitUrl":null,"submitAction":null,"tokenSend":false,"trueTitle":null,"falseTitle":null,"radioOptions":null,"dependentDate":null,"headers":null,"selectOneServerUrl":null,"selectOneServerDependentName":null,"selectOptions":null}]'
            size="small"
            style={{ backgroundColor: "inherit", marginTop: 40 }}
          />
        </div> */}
        {/* <Samp1 /> */}
        {withc == 0 ? (
          <Samp1 />
        ) : withc == 1 ? (
          <Samp2 />
        ) : withc == 2 ? (
          <Samp3 />
        ) : (
          <Samp4 />
        )}
      </div>
    </div>
  )
}

export default Custome
