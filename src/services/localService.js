export function fetchMessage() {
    const req = new Request('http://localhost:3000/api/message');
    return fetch(req).then(res => res.json());
}

export function fetchDataFromServer() {
    const req = new Request('http://localhost:3000/api/users');
    return fetch(req).then(res => res.json());
}

