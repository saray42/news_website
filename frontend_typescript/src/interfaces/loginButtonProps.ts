import response from "./response"

export default interface loginProps {
    buttonText: string,
    email: string,
    password: string,
    changeResponse: (response: response) => void
}