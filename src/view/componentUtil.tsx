export const scrollToAnchor = (anchorId : string) => {
    const element = window.document.getElementById(anchorId);
    if (element !== null) {
        element.scrollIntoView();
    }
}