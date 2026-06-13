(() => {
    // Prevent creating duplicate GUIs
    if (document.getElementById('blooket-hack-gui')) {
        return alert('GUI is already open!');
    }

    // 1. Create the Main Container
    const gui = document.createElement('div');
    gui.id = 'blooket-hack-gui';
    gui.style.position = 'fixed';
    gui.style.top = '50px';
    gui.style.left = '50px';
    gui.style.width = '300px';
    gui.style.backgroundColor = '#1e1e24';
    gui.style.color = '#ffffff';
    gui.style.border = '3px solid #4f46e5';
    gui.style.borderRadius = '12px';
    gui.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    gui.style.zIndex = '99999';
    gui.style.fontFamily = 'sans-serif';
    gui.style.overflow = 'hidden';
    gui.style.userSelect = 'none';

    // 2. Create Header Bar (For Dragging)
    const header = document.createElement('div');
    header.innerText = '⚡ Blooket Console Tool';
    header.style.padding = '12px';
    header.style.background = '#4f46e5';
    header.style.fontWeight = 'bold';
    header.style.cursor = 'move';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    // Close Button
    const closeBtn = document.createElement('span');
    closeBtn.innerText = '✕';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = () => gui.remove();
    header.appendChild(closeBtn);
    gui.appendChild(header);

    // 3. Create Content Body
    const body = document.createElement('div');
    body.style.padding = '15px';
    body.style.maxHeight = '400px';
    body.style.overflowY = 'auto';
    gui.appendChild(body);

    // Helper to get React State
    const getReact = () => {
        let el = document.querySelector('#app > div > div');
        if (!el) return null;
        for (const key in el) {
            if (key.startsWith('__reactInternalInstance$') || key.startsWith('__reactFiber$')) {
                return el[key]?.return?.stateNode;
            }
        }
        return null;
    };

    // Helper to add Input + Button Row
    const addInputHack = (label, placeholder, stateKey) => {
        const row = document.createElement('div');
        row.style.marginBottom = '12px';

        const text = document.createElement('div');
        text.innerText = label;
        text.style.fontSize = '12px';
        text.style.marginBottom = '4px';
        text.style.color = '#a5b4fc';

        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = placeholder;
        input.style.width = '70%';
        input.style.padding = '6px';
        input.style.border = '1px solid #374151';
        input.style.borderRadius = '4px';
        input.style.backgroundColor = '#111827';
        input.style.color = '#fff';

        const btn = document.createElement('button');
        btn.innerText = 'Set';
        btn.style.width = '25%';
        btn.style.marginLeft = '5%';
        btn.style.padding = '6px';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.backgroundColor = '#10b981';
        btn.style.color = '#fff';
        btn.style.cursor = 'pointer';

        btn.onclick = () => {
            let val = Number(input.value);
            let stateNode = getReact();
            if (stateNode) {
                let update = {};
                // Handle complex double properties if necessary (like hp/maxHp)
                if (stateKey === 'hp') update.maxHp = val;
                if (stateKey === 'candy') update.candies = val;
                update[stateKey] = val;
                
                stateNode.setState(update);
                alert(`${label} updated to ${val}!`);
            } else {
                alert('Game node not found! Open the specific match.');
            }
        };

        row.appendChild(text);
        row.appendChild(input);
        row.appendChild(btn);
        body.appendChild(row);
    };

    // Helper to add Toggle Buttons
    const addToggleHack = (label, loopName, actionFn) => {
        const btn = document.createElement('button');
        btn.innerText = `Enable ${label}`;
        btn.style.width = '100%';
        btn.style.padding = '8px';
        btn.style.marginBottom = '10px';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.backgroundColor = '#374151';
        btn.style.color = '#fff';
        btn.style.cursor = 'pointer';
        btn.style.fontWeight = 'bold';

        let active = false;
        btn.onclick = () => {
            active = !active;
            if (active) {
                btn.style.backgroundColor = '#ef4444';
                btn.innerText = `Disable ${label}`;
                window[loopName] = setInterval(() => actionFn(getReact()), 250);
            } else {
                btn.style.backgroundColor = '#374151';
                btn.innerText = `Enable ${label}`;
                clearInterval(window[loopName]);
            }
        };
        body.appendChild(btn);
    };

    // --- POPULATE CONTROLS ---

    // 1. Text Fields for Value Setting
    addInputHack('Fossils Total', 'e.g. 5000', 'fossils');
    addInputHack('Monster Brawl EXP', 'e.g. 99999', 'xp');
    addInputHack('Game Level', 'e.g. 50', 'level');
    addInputHack('Player HP', 'e.g. 1000', 'hp');
    addInputHack('Candy Quest Candies', 'e.g. 10000', 'candy');
    addInputHack('Kingdom Materials', '0-100', 'materials');
    addInputHack('Kingdom Happiness', '0-100', 'happiness');
    addInputHack('Kingdom People', '0-100', 'people');

    // Divider Line
    const hr = document.createElement('hr');
    hr.style.border = '0';
    hr.style.height = '1px';
    hr.style.background = '#374151';
    hr.style.margin = '15px 0';
    body.appendChild(hr);

    // 2. Active Toggle Automation Loops
    addToggleHack('Auto-Answer Questions', 'guiAutoAnswer', (stateNode) => {
        if (!stateNode) return;
        let q = stateNode.state.question || stateNode.state.currentQuestion || stateNode.state.quizQuestion;
        if (q) {
            let ans = q.correctAnswer || q.answer || q.correct;
            if (ans) {
                document.querySelectorAll('button, [role="button"]').forEach((btn) => {
                    if (btn.innerText.trim().toLowerCase() === String(ans).trim().toLowerCase()) {
                        btn.click();
                    }
                });
            }
        }
    });

    addToggleHack('Highlight Answers', 'guiHighlight', (stateNode) => {
        if (!stateNode) return;
        let q = stateNode.state.question || stateNode.state.currentQuestion || stateNode.state.quizQuestion;
        if (q) {
            let ans = q.correctAnswer || q.answer || q.correct;
            if (ans) {
                document.querySelectorAll('button, [role="button"]').forEach((btn) => {
                    if (btn.innerText.trim().toLowerCase() === String(ans).trim().toLowerCase()) {
                        btn.style.border = '4px solid #00FF00';
                        btn.style.boxShadow = '0 0 10px #00FF00';
                    }
                });
            }
        }
    });

    addToggleHack('Crazy Kingdom Guest Skipper', 'guiSkipper', (stateNode) => {
        if (!stateNode) return;
        let guest = stateNode.state.guest;
        if (guest) {
            let score = (guest.yes?.materials || 0) + (guest.yes?.people || 0) + (guest.yes?.happiness || 0) + (guest.yes?.gold || 0);
            let noScore = (guest.no?.materials || 0) + (guest.no?.people || 0) + (guest.no?.happiness || 0) + (guest.no?.gold || 0);
            if (score < 0 && noScore < 0) {
                if (typeof stateNode.nextGuest === 'function') stateNode.nextGuest();
                else stateNode.setState({ guest: null });
            }
        }
    });

    // Append GUI to window frame
    document.body.appendChild(gui);

    // 4. Implement Draggable Feature
    let isDragging = false;
    let offsetX, offsetY;

    header.onmousedown = (e) => {
        isDragging = true;
        offsetX = e.clientX - gui.offsetLeft;
        offsetY = e.clientY - gui.offsetTop;
    };

    document.onmousemove = (e) => {
        if (!isDragging) return;
        gui.style.left = `${e.clientX - offsetX}px`;
        gui.style.top = `${e.clientY - offsetY}px`;
    };

    document.onmouseup = () => {
        isDragging = false;
    };
})();
