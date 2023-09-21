const re: RegExp = new RegExp("^[\\w-\\ß.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

export default function validateEmail(email: string): boolean {
    return re.test(email);
}