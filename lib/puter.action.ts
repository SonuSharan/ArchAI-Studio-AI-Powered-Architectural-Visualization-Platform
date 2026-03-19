import puter from "@heyputer/puter.js";

export const signIn = async () => await puter.auth.signIn();

export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
    try {
        const isSignedIn = puter.auth.isSignedIn();

        console.log("Is signed in:", isSignedIn);

        if (!isSignedIn) {
            console.log("User not signed in. Redirecting...");
            await puter.auth.signIn();
        }

        const user = await puter.auth.getUser();
        console.log("User:", user);

        return user;
    } catch (e) {
        console.error(`Puter get current user failed: ${JSON.stringify(e)}`);
        return null;
    }
};