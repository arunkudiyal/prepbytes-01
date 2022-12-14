class Demo {
    constructor(property1, property2) {
        this.property1 = property1
        this.property2 = property2
    }

    getDetails = () => {
        return `${this.property1} ${this.property2}`
    }
}

export default Demo;