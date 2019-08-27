export function fetchDataFromServer() {
    const req = new Request('http://localhost:3000/api/');
    return fetch(req).then(res => res.json());
}

