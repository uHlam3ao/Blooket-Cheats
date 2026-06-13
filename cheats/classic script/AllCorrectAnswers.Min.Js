(() => {
    if (window.allCorrectLoop) {
        clearInterval(window.allCorrectLoop);
    }

    const getReact = (el) => {
        for (const key in el) {
            if (key.startsWith('__reactInternalInstance$') || key.startsWith('__reactFiber$')) {
                return el[key];
            }
        }
    };

    window.allCorrectLoop = setInterval(() => {
        try {
            let reactElem = getReact(document.querySelector('#app > div > div'));
            if (reactElem && reactElem.return && reactElem.return.stateNode) {
                let stateNode = reactElem.return.stateNode;
                
                // Targets the active game questions array or single question state
                let q = stateNode.state.question || stateNode.state.currentQuestion;
                
                if (q) {
                    let ans = q.correctAnswer || q.answer;
                    let buttons = document.querySelectorAll('button, [role="button"]');
                    
                    buttons.forEach((btn) => {
                        let text = (btn.innerText || btn.textContent || '').trim().toLowerCase();
                        let target = String(ans).trim().toLowerCase();
                        
                        if (text === target) {
                            btn.click();
                        }
                    });
                }
            }
        } catch (e) {}
    }, 100);

    let n = document.createElement('iframe');
    n.style.display = 'none';
    document.body.append(n);
    n.contentWindow.alert('All Correct Answers Loop Active!');
    n.remove();
    console.clear();
})();
