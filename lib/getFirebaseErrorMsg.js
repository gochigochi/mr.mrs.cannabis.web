export const getFirebaseErrorMsg = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
            return "User already in use."
        case "auth/wrong-password":
            return "Password is incorrect."
        case "auth/user-not-found":
            return "User doesn't exist."
        case "auth/weak-password":
            return "Password must have 6 character at least."
        case "auth/too-many-requests":
            return "Too many intents. Retry later..."
        default:
            return "An error ocurred. Retry later..."
    }
}