function getPerson(name, age) {
    if (typeof name !== "string" || typeof age !== "number") {
        throw new Error('Invalid parameter type');
    } else {
        this.name = name;
        this.age = age;
    }
}

try {
    const personDetail = new getPerson("Hanish", 20);
    console.log(personDetail)
} catch (e) {
    console.log('Invalid parameter Type', e)
}
