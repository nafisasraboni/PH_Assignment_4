function getQuizSummary(scores: number[]): { total: number, average: number } {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        }
    }

    let total = scores.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator
    }, 0)
    let average = total / scores.length;
    return {
        total: total,
        average: average
    }
}
