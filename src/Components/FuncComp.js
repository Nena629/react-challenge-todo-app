import { useEffect, useState } from "react"

const FuncComp = () => {

    const [compteur, setCompteur] = useState(0)

    // equivalent à utiliser componentDidMount
    useEffect(() => {
    //partie pour component DidMount
        console.log("hook -ComponentDidMount !!")

    //componentWillUnmout return+Function
        return ()=>console.log("Good Bye component")
    }, [])

    // equivalent à utiliser componentDidUpdate
    useEffect(() => {
        if (compteur === 0) {
            console.log("hook -componentDidUpdate !!")
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