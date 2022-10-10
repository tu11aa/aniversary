import {  useState } from "react";

const Test = () => {
    const initialState = {
        plainCode : [
            "This is first line",
            "This is second line",
            "This is third line"
        ],
        code : []
    }

    const [code, setCode] = useState(initialState)

    const texts = [
        "This is first line",
        "This is second line",
        "This is third line"
    ]
    const [codes, setCodes] = useState([])

    const countString = (letter, str) => {
        const re = new RegExp(letter, 'g');
        return str.match(re).length;
    }

    const handleClick = (e) => {
        if (e.target.innerText !== "Started") {
            e.target.innerText = "Started"

            let i = 0
            const mainLoop = setInterval(async () => {
                if (i >= texts.length) return clearInterval(mainLoop)
                await letGo(texts[i], i)
                i++
            }, 1000 * countString(" ", texts[i]));
            // texts.forEach(async (text, index)=>{
            //     await letGo(text, index)
            // })
        }
        else {
            console.log(codes)
        }
    }

    const letGo = async (text, index) => {
        const wordList = text.split(" ")
        // codes.push(wordList[0])
        setCodes(pre => [...pre, wordList[0]])

        let i = 1
        const loop = setInterval(() => {
            if (i >= wordList.length) return clearInterval(loop)
            // codes[index] += " " + wordList[i++]
            setCodes(prevCodes => (prevCodes.map((code, j) => 
                j === i ? code + " " + wordList[i] : code
            )))
            i++
        }, 1000);
    }

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            {codes.length === 0 ? <h1>Empty code</h1> : 
                <>
                    {codes.map((code, index)=>(
                        <h1 key={index}>{code}</h1>
                    ))}
                </>
            }
            <h1>This is a test</h1>
        </>
    );
}

export default Test