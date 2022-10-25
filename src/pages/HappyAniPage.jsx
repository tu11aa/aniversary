import { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import guitarboy from "../assets/guitarboy.gif"

const HappyAniPage = () => {
    const navigate = useNavigate()

    //re-render he he he
    const [re_render, setRender] = useState(0)
    const _render = () => setRender(re_render => re_render + 1)
    
    const codeType = {
        comments : "comments",
        space : "space",
        keyword: "keyword",
        string : "string",
        none : null
    }

    const initialState = {
        plainCodeLines : [
            "/**",
            " ", "* Today, the 10th day of July, is your birthday.",
            " ", "* So I created a webpage to celebrate this special day.",
            "Girl u = ", "new ", "Girl(", `"Girl"`, ");",
        ],
        types : [codeType.comments, 
            codeType.space, codeType.comments, 
            codeType.space, codeType.comments,
            codeType.none, codeType.keyword, codeType.none, codeType.string, codeType.none,
        ],
        isBreak : [true, 
            false, true, 
            false, true,
            false, false, false, false, true,
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
            }, 150);
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
                <img src={guitarboy} style={{marginTop: "3%"}}  onClick={() => navigate("/screen3")} alt="guitar boy"/>
            </div>
        // </div>
    );
}

export default HappyAniPage