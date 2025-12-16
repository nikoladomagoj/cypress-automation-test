export function randomNumber(length = 5) {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
function randomString(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
export function randomEmail() {
    return `user${randomNumber(6)}@mail.com`;
}

export function randomMobile() {
    return randomNumber(10);
}

export function randomFirstName() {
    return `Name${randomString(4)}`;
}

export function randomLastName() {
    return `Surname${randomString(4)}`;
}
