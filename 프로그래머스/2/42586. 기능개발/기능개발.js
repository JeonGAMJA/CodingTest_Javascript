function solution(progresses, speeds) {
    const answer = [];
    let days = 0;
    let count = 0;

    for (let i = 0; i < progresses.length; i++) {
        if ((100 - progresses[i]) <= days * speeds[i]) {
            count++;
        } else {
            answer.push(count);
            days = Math.ceil((100 - progresses[i]) / speeds[i]);
            count = 1;
        }
    }

    answer.push(count);

    return answer.slice(1);
}