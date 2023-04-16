export function CallPopModal(text: string, {setClassName, setText}: {setClassName: any, setText: any}) {
    setClassName(false)
    setText(text)
    setTimeout(()=>{
        setClassName(true)
        setText("")
    }, 2000)
}