const re: RegExp = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$");

export default function validatePassword(password: string): boolean {
    return re.test(password);
}