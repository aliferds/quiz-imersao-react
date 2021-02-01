import db from 'db.json';

export default function (request, response) {
    request.json(db);
}