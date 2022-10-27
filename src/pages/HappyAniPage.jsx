import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import guitarboy from "../assets/guitarboy.gif"

const HappyAniPage = () => {
    const navigate = useNavigate()

    //re-render he he he
    const [re_render, setRender] = useState(0)
    const _render = () => setRender(re_render => re_render + 1)
    const t = 100;
    
    const codeType = {
        comments : "comments",
        space : "space",
        keyword: "keyword",
        string : "string",
        none : null
    }

    const initialState = {
        plainCodeLines : [
            "// Hôm nay, ngày 5/11/2022 một trong những ngày không bao giờ quên trong đời anh.",
            "// Vì thế anh tạo ra những dòng code này, hãy đọc và cảm nhận tình cảm anh dành cho em.",
            "\n",
            "import", " Girl ", "form ", `"You"`,
            "import", " Boy ", "form ", `"Me"`,
            "\n",
            "yesterday = ", "new", " Yesterday()", 
            "today = ", "new", " Today()", 
            "tomorrow = ", "new", " Tomorrow()", 
            "\n",
            "if (yesterday ", "or", " today ", "or", " tomorrow ", "==", " day(", `"5/11/2019"`, ")) {",
            "Boy.ILoveU( Girl )",
            "} else {",
            "Boy.ILoveU( Girl )",
            "}",
            "\n",
            "if Girl.Happy() Boy.ILoveU( Girl )",
            "if Girl.Sad() Boy.ILoveU( Girl )",
            "if Girl.Angry() Boy.ILoveU( Girl )",
            "\n",
            "while (Boy) Boy.I_STILL_LOVE_U( Girl )",
            "\n",
            "\n",
            "// Tuy em không phải lập trình viên nhưng chắc chắn em hiểu được những dòng trên!",
            "// Yêu em ❤",
            "\n",
            "Bấm vào cây Guitar để qua trang tiếp theo nhaaaaaa!!!"
        ],
        types : [
            codeType.comments, 
            codeType.comments, 
            codeType.none,
            codeType.keyword, codeType.none, codeType.keyword, codeType.string,
            codeType.keyword, codeType.none, codeType.keyword, codeType.string,
            codeType.none,
            codeType.none, codeType.keyword, codeType.none,
            codeType.none, codeType.keyword, codeType.none,
            codeType.none, codeType.keyword, codeType.none,
            codeType.none,
            codeType.none, codeType.keyword, codeType.none, codeType.keyword, codeType.none, codeType.keyword, codeType.none, codeType.string, codeType.none,
            codeType.space,
            codeType.none,
            codeType.space,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.none,
            codeType.comments,
            codeType.comments,
            codeType.none,
            codeType.comments,
        ],
        isBreak : [
            true, 
            true, 
            true, 
            false, false, false, true,
            false, false, false, true,
            true,
            false, false, true,
            false, false, true,
            false, false, true,
            true,
            false, false, false, false, false, false, false, false, true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ],
        codeLines : [],
    }

    const [code] = useState(()=>{
        const newPlainCodeLine = initialState.plainCodeLines.map(codeLine => codeLine.split(""))
        return {...initialState, plainCodeLines : newPlainCodeLine}
    })

    const runCode = () => {
        for (let i = 0; i < code.plainCodeLines.length; i++) {
            if (code.plainCodeLines[i].length > 0){
                if (code.codeLines.length === i) {
                    //first add
                    code.codeLines.push(code.plainCodeLines[i][0])
                    _render()
                }
                else {
                    //add plainCodeLine to codeLine
                    code.codeLines[i] += code.plainCodeLines[i][0]
                    _render()
                }
                //delete code.plainCodeLines[i][0]
                code.plainCodeLines[i].shift()
                break
            }
        }
    }

    const creatCodeLine = (codeLine, index)=> {
        return !code.isBreak[index] ? <span key={index} className={code.types[index]}>{codeLine}</span> :
        <span key={index} className={code.types[index]}>{codeLine}<br/></span>
    }

    //inittial run
    useEffect(() => {
        if (re_render === 0) {
            const loop = setInterval(() => {
                runCode()
                if (code.plainCodeLines[code.plainCodeLines.length - 1].length === 0) clearInterval(loop)
            }, t);
        }
    }, [])
    

    return (
        // <div style={{height:"100%", width: "100%", backgroundColor:}}>
            <div style={{display: "inline-block", background : "white", backgroundSize: "cover", marginTop: "1%"}}>
                {code.codeLines.length === 0 ? <h1>Empty code</h1> : 
                    <div id="code">
                        {code.codeLines.map(creatCodeLine)}
                    </div>
                }
                {/* <button onClick={()=>console.log(re_render)}>Log re-render</button> */}
                <img src={guitarboy} style={{marginTop: "3%", cursor:"pointer"}}  onClick={() => navigate("/screen3")} alt="guitar boy"/>
            </div>
        // </div>
    );
}

export default HappyAniPage