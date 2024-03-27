import { auth } from "../../auth"
export const actions = { default: async(event) => {
    var result = auth.signIn(event);
    // TODO check to see if sign in was successful
    // if it was then check the database for someone
    // with that email, if it doesnt exist then
    // create a new user with that email.
    return result;
}};