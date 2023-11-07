export const isAuth = async () => {
    const response = await fetch("/api/is-auth")
    const json = await response.json()

    return json.success
}