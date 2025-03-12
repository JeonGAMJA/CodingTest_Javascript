const getUserScore = (userAnswer, answers) => {
    const scores = userAnswer.map((pattern, index) => {
        const correctCount = answers.filter((answer, i) => 
            answer === pattern[i % pattern.length]
        ).length;
        
        return { id: index + 1, score: correctCount };
    });
    
    return scores
}

const getMaxScore = (userScores) => {
    return Math.max(...userScores.map(s => s.score));
}

const solution = (answers) => {
    const userAnswer = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    const userScore = getUserScore(userAnswer, answers)
    const maxScore = getMaxScore(userScore)
    return  userScore
        .filter(s => s.score === maxScore)
        .map(s => s.id)
        .sort((a, b) => a - b);
}
