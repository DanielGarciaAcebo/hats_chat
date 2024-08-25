export function typingEffect(
    element: HTMLElement,
    text: string,
    speed: number = 50,
    callback?: () => void
) {
    let arr = text.split("");
    let i = 0;
    element.innerHTML = "";
    let interval = setInterval(() => {
        if (i === arr.length - 1) {
            element.innerHTML += arr[i];
            clearInterval(interval);
            if (callback) callback();
        } else {
            if (arr[i] === " ") {
                element.innerHTML += arr[i];
                element.innerHTML += arr[i + 1];
                i += 2;
            } else {
                element.innerHTML += arr[i];
                i++;
            }
        }
    }, speed);
}