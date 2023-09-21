export default interface signupProps {
    buttonText: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    changeResponse: (response: string) => void,
    disabled: boolean
}