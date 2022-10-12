import { useEffect } from "react";
import {  useState } from "react";

const Test = () => {
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
            "This is first line",
            "This is second line",
            "This is third line"
        ],
        types : [codeType.keyword, codeType.string, codeType.string],
        isBreak : [true, false, false],
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
        <>
            {code.codeLines.length === 0 ? <h1>Empty code</h1> : 
                <div id="code">
                    {code.codeLines.map(creatCodeLine)}
                </div>
            }
            <button onClick={()=>console.log(re_render)}>Log re-render</button>
        </>
    );
}

export default Test