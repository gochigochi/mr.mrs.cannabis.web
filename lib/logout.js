export const logout = async () => {
    await fetch("/api/logout")
    return
}