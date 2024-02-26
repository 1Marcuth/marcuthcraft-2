function sleep(ms: number): void {
    const end = Date.now() + ms
    while (Date.now() < end) {}
}

function sleepAsync(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export { sleep, sleepAsync }