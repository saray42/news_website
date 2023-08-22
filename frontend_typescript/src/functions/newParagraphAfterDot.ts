export default function newParagraphAfterDot(text: string): string {
    return text.replaceAll(". ", ".\n");
}