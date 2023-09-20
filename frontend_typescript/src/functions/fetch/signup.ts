export default async function signup(firstName: string, lastName: string, email: string, password: string): Promise<string> {
    const response: Response = await fetch("http://localhost:8080/articles/createAuthor", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
    });
    const parsedResponse = await response.json();
    return parsedResponse;
}