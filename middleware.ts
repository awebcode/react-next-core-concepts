export { default } from "next-auth/middleware"

console.log("called")
export const config = {
    matcher:["/"]
}