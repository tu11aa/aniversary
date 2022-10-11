import {  useState } from "react";

const Test = () => {
    //re-render he he he
    const [re_render, setRender] = useState(true)
    const _render = () => setRender(prev => !prev)
    
    const codeType = {
        comments : "comments",
        space : "space",
        keyword: "keyword",
        string : "string",
    }

    const initialState = {
        plainCodeLines : [
            "This is first line",
            "This is second line",
            "This is third line"
        ],
        types : [codeType.string, codeType.string, codeType.string],
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

    const handleClick = () => {
        const loop = setInterval(() => {
            runCode()
            if (code.plainCodeLines[code.plainCodeLines.length - 1].length === 0) clearInterval(loop)
        }, 150);
    }

    return (
        <>
            {code.codeLines.length === 0 ? <h1>Empty code</h1> : 
                <>
                    {code.codeLines.map((codeLine, index)=>(
                        <span key={index} className={code.types[index]}>{codeLine}</span>
                        //need ajust hear (breakline)
                    ))}
                </>
            }
            <button onClick={handleClick}>Log code object</button>
        </>
    );
}

export default Test