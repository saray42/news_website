import response from "../../interfaces/response";

export default async function login(email: string, password: string): Promise<response> {
    const response: Response = await fetch("http://localhost:8080/newsApi/login", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email: email, password: password })
    });
    const parsedResponse = await response.json();
    return parsedResponse;
}