import { useRouter } from "next/router"

export default function Chain() {

    const router = useRouter()
    const id = router.query.id
    return(
        <>
            chain{id}
        </>
    )
}