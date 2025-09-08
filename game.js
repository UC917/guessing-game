// 定义一个函数来决定电脑的选择
function getComputerChoice() {
    // 定义可能的手势选项
    const choices = ['rock', 'scissors', 'paper'];
    // 随机选择一个手势
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 定义一个函数来判断游戏的结果
function determineWinner(userChoice, computerChoice) {
    const validChoices = ['rock', 'scissors', 'paper'];

    if (!validChoices.includes(userChoice) || !validChoices.includes(computerChoice)) {
        return '无效的选择，请选择 rock, scissors 或 paper';
    }

    if (userChoice === computerChoice) {
        return '平局';
    }
    if (userChoice === computerChoice) {
        return '平局';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return '你赢了！';
    } else {
        return '你输了！';
    }
}

// 定义主函数来启动游戏
function playGame(userChoice) {
    // 获取电脑的选择
    const computerChoice = getComputerChoice();
    // 获取游戏结果
    const result = determineWinner(userChoice, computerChoice);
    // 显示结果
    document.getElementById('result').innerText = `你选择了：${userChoice}，
    电脑选择了：${computerChoice}，结果是：${result}`;
}
