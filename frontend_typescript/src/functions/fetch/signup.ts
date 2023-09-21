import response from "../../interfaces/response";

export default async function signup(firstName: string, lastName: string, email: string, password: string): Promise<response> {
    const response: Response = await fetch("http://localhost:8080/newsApi/signup", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
    });
    const parsedResponse = await response.json();
    return parsedResponse;
}