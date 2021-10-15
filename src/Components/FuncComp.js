import { useEffect, useState } from "react"

const FuncComp = () => {

    const [compteur, setCompteur] = useState(0)

    // equivalent a utiliser componentDidMount
    useEffect(() => {
        //partie pour cmpDM
        console.log("hook -ComponentDidMount 😎 !!")
        //componentWillUnmout
        return ()=>console.log("Good By 😄 ")
    }, [])

    // equivalent a utiliser componentDidUpdate
    useEffect(() => {
        if (compteur === 0) {
            console.log("hook -componentDidUpdate 😎 !!")
        }
    })

    
    return (
        <p>
            {compteur}
            <br />
            Bonjour Je suis une Smart Composante 😇 !!
            <button onClick={
                () => setCompteur(compteur + 1)}>
                ADD
            </button>
        </p>
    )

}
export default FuncComp