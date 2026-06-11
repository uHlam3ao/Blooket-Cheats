<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blooket Panel v22.4 - Complete Injector Matrix</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, sans-serif; }
        :root {
            --bg-p: #04060a; --bg-s: #0b0e17; --bg-t: #101422; --border: #1a2238;
            --text-m: #f8fafc; --text-muted: #4b587c; --blue: #3b82f6; --blue-h: #1d4ed8;
            --green: #10b981; --red: #ef4444; --orange: #f59e0b;
            --panel-w: 1100px; --panel-h: 750px; --sidebar-w: 240px;
        }
        body { background-color: var(--bg-p); color: var(--text-m); min-height: 100vh; display: flex; justify-content: center; align-items: center; overflow: hidden; }
        .master-panel { width: var(--panel-w); height: var(--panel-h); background-color: var(--bg-s); border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 30px 60px rgba(0,0,0,0.8); display: flex; flex-direction: column; overflow: hidden; }
        .panel-header { height: 40px; background-color: var(--bg-t); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 16px; flex-shrink: 0; }
        .header-brand { font-weight: 700; font-size: 13px; letter-spacing: 0.5px; }
        .header-brand span { color: var(--blue); font-size: 10px; background: rgba(59,130,246,0.1); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(59,130,246,0.2); margin-left: 6px; }
        .panel-body { display: flex; flex: 1; overflow: hidden; }
        .sidebar { width: var(--sidebar-w); background-color: var(--bg-t); border-right: 1px solid var(--border); display: flex; flex-direction: column; padding: 8px 0; overflow-y: auto; flex-shrink: 0; }
        .sidebar-title { font-size: 9px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); padding: 10px 14px 4px 14px; font-weight: 800; }
        .nav-item { display: flex; align-items: center; padding: 8px 14px; font-size: 12px; font-weight: 600; color: #94a3b8; cursor: pointer; border-left: 3px solid transparent; }
        .nav-item:hover { background-color: rgba(255,255,255,0.02); color: var(--blue); }
        .nav-item.active { background-color: rgba(59,130,246,0.06); border-left-color: var(--blue); color: var(--blue); }
        .workspace { flex: 1; display: flex; flex-direction: column; overflow: hidden; padding: 16px; }
        .viewport { flex: 1; overflow-y: auto; display: none; }
        .viewport.active-view { display: block; }
        .view-header { margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
        .view-header h2 { font-size: 16px; font-weight: 700; }
        .view-header p { font-size: 11px; color: var(--text-muted); }
        .grid-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
        .macro-card { background-color: var(--bg-t); border: 1px solid var(--border); border-radius: 6px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; min-height: 90px; }
        .macro-card:hover { border-color: var(--blue); }
        .macro-title { font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .macro-desc { font-size: 11px; color: var(--text-muted); line-height: 1.3; margin-bottom: 8px; }
        .panel-btn { background-color: var(--blue); color: #fff; border: none; padding: 6px 10px; border-radius: 4px; font-size: 10px; font-weight: 700; cursor: pointer; text-align: center; width: 100%; transition: background 0.1s; }
        .panel-btn:hover { background-color: var(--blue-h); }
        .panel-btn.copied { background-color: var(--green) !important; }
        .monitor-box { background-color: #020306; border: 1px solid var(--border); border-radius: 6px; padding: 10px; font-family: monospace; font-size: 11px; color: var(--green); height: 85px; overflow-y: auto; margin-top: 12px; flex-shrink: 0; box-shadow: inset 0 2px 8px rgba(0,0,0,0.5); }
    </style>
</head>
<body>

    <div class="master-panel">
        <div class="panel-header">
            <div class="header-brand">⚙️ Blooket Macro Panel Engine <span>v22.4 Max Density</span></div>
            <div style="display:flex; gap:6px;"><span style="width:10px; height:10px; background:var(--red); border-radius:50%;"></span><span style="width:10px; height:10px; background:var(--orange); border-radius:50%;"></span><span style="width:10px; height:10px; background:var(--green); border-radius:50%;"></span></div>
        </div>
        
        <div class="panel-body">
            <div class="sidebar" id="appSidebar">
                <div class="sidebar-title">Global Systems</div>
                <div class="nav-item active" data-target="v-global">🌐 Global Workspace</div>
                <div class="nav-item" data-target="v-host">🖥️ Conductor / Host</div>
                
                <div class="sidebar-title">Core Game Modes</div>
                <div class="nav-item" data-target="v-gold">🎮 Gold Quest</div>
                <div class="nav-item" data-target="v-crypto">🔑 Crypto Hack</div>
                <div class="nav-item" data-target="v-factory">🏭 Factory Mode</div>
                <div class="nav-item" data-target="v-cafe">☕ Café Automation</div>
                
                <div class="sidebar-title">Combat & Strategy</div>
                <div class="nav-item" data-target="v-tower">🏹 Tower Defense</div>
                <div class="nav-item" data-target="v-td2">🏰 Tower Defense 2</div>
                <div class="nav-item" data-target="v-monster">👹 Monster Brawl</div>
                <div class="nav-item" data-target="v-doom">☠️ Tower of Doom</div>
                
                <div class="sidebar-title">Alternative Modules</div>
                <div class="nav-item" data-target="v-kingdom">👑 Crazy Kingdom</div>
                <div class="nav-item" data-target="v-rush">🏴‍☠️ Blook Rush</div>
                <div class="nav-item" data-target="v-race">🏎️ Racing Hub</div>
                <div class="nav-item" data-target="v-fish">🎣 Fishing Frenzy</div>
                <div class="nav-item" data-target="v-santa">🎄 Santa's Workshop</div>
            </div>
            
            <div class="workspace">
                
                <!-- VIEW: GLOBAL -->
                <div class="viewport active-view" id="v-global">
                    <div class="view-header"><h2>Global Core Environment</h2><p>General client adjustments and store mechanics.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Get Daily Rewards</div><div class="macro-desc">Claim daily tokens and XP instantly.</div><button class="panel-btn" onclick="cc(this,'global/getDailyRewards.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Use Any Blook</div><div class="macro-desc">Unlocks all blooks on choice layer.</div><button class="panel-btn" onclick="cc(this,'global/useAnyBlook.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Spam Buy Packs</div><div class="macro-desc">Automates open pack sequences.</div><button class="panel-btn" onclick="cc(this,'global/spamBuyBlocks.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Every Answer Correct</div><div class="macro-desc">Auto-flags truth answer elements.</div><button class="panel-btn" onclick="cc(this,'global/everyAnswerCorrect.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Auto Sell Duplicates</div><div class="macro-desc">Clears vault items for money fast.</div><button class="panel-btn" onclick="cc(this,'global/autoSellDupes.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Highlight Answers</div><div class="macro-desc">Draws green outlines around key choices.</div><button class="panel-btn" onclick="cc(this,'global/highlightAnswers.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: HOST -->
                <div class="viewport" id="v-host">
                    <div class="view-header"><h2>Host Dashboard Controls</h2><p>Lobby and lobby conductor configurations.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Anti Flood Control</div><div class="macro-desc">Filters websocket connection spams.</div><button class="panel-btn" onclick="cc(this,'host/antiFlood.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">End Game Instantly</div><div class="macro-desc">Forces win checks across the array.</div><button class="panel-btn" onclick="cc(this,'host/endGame.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Remove Player Element</div><div class="macro-desc">Evicts targeted matching ID directly.</div><button class="panel-btn" onclick="cc(this,'host/removePlayer.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Override Settings</div><div class="macro-desc">Bypass time limits and match conditions.</div><button class="panel-btn" onclick="cc(this,'host/overrideSettings.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: GOLD -->
                <div class="viewport" id="v-gold">
                    <div class="view-header"><h2>Gold Quest Core Modifications</h2><p>Chest and inventory variable changes.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Chest ESP Highlight</div><div class="macro-desc">See inside chests before picking.</div><button class="panel-btn" onclick="cc(this,'games/goldquest/chestEsp.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Gold Target</div><div class="macro-desc">Updates gold count limits dynamically.</div><button class="panel-btn" onclick="cc(this,'games/goldquest/setGold.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Auto Steal Loop</div><div class="macro-desc">Always swipes from matching top layers.</div><button class="panel-btn" onclick="cc(this,'games/goldquest/autoSteal.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Reset Enemy Scores</div><div class="macro-desc">Reduces total lobby opponent counts.</div><button class="panel-btn" onclick="cc(this,'games/goldquest/resetScores.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: CRYPTO -->
                <div class="viewport" id="v-crypto">
                    <div class="view-header"><h2>Crypto Hack Engine</h2><p>Password bypass pipelines and metric changes.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Auto Password Crack</div><div class="macro-desc">Instantly unlock password panels.</div><button class="panel-btn" onclick="cc(this,'games/crypto/autoPassword.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">View Enemy Hashes</div><div class="macro-desc">Renders user keys clearly inside sidebar.</div><button class="panel-btn" onclick="cc(this,'games/crypto/viewPasswords.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Crypto Score</div><div class="macro-desc">Mutates balance integers right away.</div><button class="panel-btn" onclick="cc(this,'games/crypto/setCrypto.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Bypass Hack Attempts</div><div class="macro-desc">Negates input penalties from enemies.</div><button class="panel-btn" onclick="cc(this,'games/crypto/bypassHacks.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: FACTORY -->
                <div class="viewport" id="v-factory">
                    <div class="view-header"><h2>Factory Production Engines</h2><p>Worker structures, speed tiers, and upgrade metrics.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Set Factory Cash</div><div class="macro-desc">Changes currency variables on runtime.</div><button class="panel-btn" onclick="cc(this,'games/factory/setCash.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Mega Bots Matrix</div><div class="macro-desc">Replaces workforce maps with top tiers.</div><button class="panel-btn" onclick="cc(this,'games/factory/maxMegaBots.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Free Upgrades Loop</div><div class="macro-desc">Sets pricing validations directly to zero.</div><button class="panel-btn" onclick="cc(this,'games/factory/freeUpgrades.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Block Ad Glitches</div><div class="macro-desc">Removes error generation intervals.</div><button class="panel-btn" onclick="cc(this,'games/factory/removeGlitches.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: CAFE -->
                <div class="viewport" id="v-cafe">
                    <div class="view-header"><h2>Café Task Automation</h2><p>Serving systems and inventory restocking adjustments.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Auto Stock & Serve</div><div class="macro-desc">Refills items and checks out guests.</div><button class="panel-btn" onclick="cc(this,'games/cafe/autoServe.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Upgrade Tiers</div><div class="macro-desc">Instantly buy shop configurations.</div><button class="panel-btn" onclick="cc(this,'games/cafe/maxLevel.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Infinite Cash Ledger</div><div class="macro-desc">Gives max returns per checkout task.</div><button class="panel-btn" onclick="cc(this,'games/cafe/setCash.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Instant Customer Spawn</div><div class="macro-desc">Removes customer table entry delays.</div><button class="panel-btn" onclick="cc(this,'games/cafe/fastSpawn.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: TOWER DEFENSE -->
                <div class="viewport" id="v-tower">
                    <div class="view-header"><h2>Tower Defense Legacy Layout</h2><p>Boundaries, currency, and fire-rate arrays.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Max Stats Override</div><div class="macro-desc">Ceiling caps on damage vectors.</div><button class="panel-btn" onclick="cc(this,'games/tower/maxStats.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Place Anywhere Grid</div><div class="macro-desc">Disables barrier box block metrics.</div><button class="panel-btn" onclick="cc(this,'games/tower/placeAnywhere.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Tokens Cache</div><div class="macro-desc">Gives max in-game build cash.</div><button class="panel-btn" onclick="cc(this,'games/tower/setTokens.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Advance Run Wave</div><div class="macro-desc">Skips round indexes instantly.</div><button class="panel-btn" onclick="cc(this,'games/tower/setRound.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: TOWER DEFENSE 2 -->
                <div class="viewport" id="v-td2">
                    <div class="view-header"><h2>Tower Defense 2 System</h2><p>Advanced map changes and tower profiles.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Unlock All Map Slots</div><div class="macro-desc">Bypass standard restriction boundaries.</div><button class="panel-btn" onclick="cc(this,'games/towerdefense2/placeAnywhere.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Infinite Gold Ledger</div><div class="macro-desc">Modify building token properties.</div><button class="panel-btn" onclick="cc(this,'games/towerdefense2/setTokens.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Level Buffs</div><div class="macro-desc">Configures turret metrics to max values.</div><button class="panel-btn" onclick="cc(this,'games/towerdefense2/maxStats.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Skip To Max Round</div><div class="macro-desc">Increments active round limits fast.</div><button class="panel-btn" onclick="cc(this,'games/towerdefense2/setRound.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: MONSTER BRAWL -->
                <div class="viewport" id="v-monster">
                    <div class="view-header"><h2>Monster Brawl Settings</h2><p>Invincibility triggers, range grids, and leveling loops.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Godmode Toggle</div><div class="macro-desc">Sets incoming parser hits to zero.</div><button class="panel-btn" onclick="cc(this,'games/monster/godmode.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Instant Board Wipe</div><div class="macro-desc">Flashes zero health variables on foes.</div><button class="panel-btn" onclick="cc(this,'games/monster/killEnemies.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Magnet Pull Range</div><div class="macro-desc">Extends grab boundaries for drops.</div><button class="panel-btn" onclick="cc(this,'games/monster/magnet.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Skills Load</div><div class="macro-desc">Loads up max tier ability blocks.</div><button class="panel-btn" onclick="cc(this,'games/monster/maxAbilities.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: DOOM -->
                <div class="viewport" id="v-doom">
                    <div class="view-header"><h2>Tower of Doom Card Layout</h2><p>Deck structural changes and money variables.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Max Card Strengths</div><div class="macro-desc">Bumps slot stats to maximum integers.</div><button class="panel-btn" onclick="cc(this,'games/doom/maxStats.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Infinite Gold Ledger</div><div class="macro-desc">Modifies available purchasing cash.</div><button class="panel-btn" onclick="cc(this,'games/doom/setCoins.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Player HP</div><div class="macro-desc">Lock active health pool counters.</div><button class="panel-btn" onclick="cc(this,'games/doom/setHealth.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">One Hit Enemy Kills</div><div class="macro-desc">Sets opponent defense arrays to 1.</div><button class="panel-btn" onclick="cc(this,'games/doom/oneHitKill.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: KINGDOM -->
                <div class="viewport" id="v-kingdom">
                    <div class="view-header"><h2>Crazy Kingdom Framework</h2><p>Resource lockers and automation matching paths.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Freeze Stat Pools</div><div class="macro-desc">Locks resources at max levels.</div><button class="panel-btn" onclick="cc(this,'games/kingdom/maxStats.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Auto Choice Resolve</div><div class="macro-desc">Resolves prompts safely for state.</div><button class="panel-btn" onclick="cc(this,'games/kingdom/autoChoice.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Infinite Materials Bar</div><div class="macro-desc">Locks building asset counts at 100.</div><button class="panel-btn" onclick="cc(this,'games/kingdom/infMaterials.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Keep People Happy</div><div class="macro-desc">Maintains popularity variables high.</div><button class="panel-btn" onclick="cc(this,'games/kingdom/maxPeople.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: RUSH -->
                <div class="viewport" id="v-rush">
                    <div class="view-header"><h2>Blook Rush Adjustments</h2><p>Shield properties, multipliers, and asset speed hooks.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Infinite Safeguards</div><div class="macro-desc">Stops defense damage parsing checks.</div><button class="panel-btn" onclick="cc(this,'games/blookrush/setBlooks.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Yield Loops</div><div class="macro-desc">Forces multipliers into ceiling boundaries.</div><button class="panel-btn" onclick="cc(this,'games/blookrush/maxMult.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Auto Attack Teams</div><div class="macro-desc">Sends assault waves automatically.</div><button class="panel-btn" onclick="cc(this,'games/blookrush/autoAttack.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Blook Balance</div><div class="macro-desc">Direct adjustments to target totals.</div><button class="panel-btn" onclick="cc(this,'games/blookrush/setBalance.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: RACE -->
                <div class="viewport" id="v-race">
                    <div class="view-header"><h2>Racing Workspace Engine</h2><p>Velocity checks and location tracking modifiers.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Instant Win Line</div><div class="macro-desc">Changes location bounds to complete.</div><button class="panel-btn" onclick="cc(this,'games/racing/instantWin.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Speed Multiplier Boost</div><div class="macro-desc">Multiplies progress metrics per click.</div><button class="panel-btn" onclick="cc(this,'games/racing/speedBoost.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Freeze Opponent Tracks</div><div class="macro-desc">Stops other tracking progress changes.</div><button class="panel-btn" onclick="cc(this,'games/racing/freezeEnemies.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Perfect Answer Speed</div><div class="macro-desc">Maximizes answer speed calculations.</div><button class="panel-btn" onclick="cc(this,'games/racing/perfectSpeed.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: FISH -->
                <div class="viewport" id="v-fish">
                    <div class="view-header"><h2>Fishing Frenzy Hooks</h2><p>Reel metrics and weight mutation overrides.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Auto Reel Mechanics</div><div class="macro-desc">Pulls catches without task delay frames.</div><button class="panel-btn" onclick="cc(this,'games/fishing/autoReel.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Weight Modifier</div><div class="macro-desc">Forces sizes into extreme limits.</div><button class="panel-btn" onclick="cc(this,'games/fishing/maxWeight.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Instant Cast Hook</div><div class="macro-desc">Bypasses water throwing loops completely.</div><button class="panel-btn" onclick="cc(this,'games/fishing/instantCast.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Set Frenzy Status</div><div class="macro-desc">Triggers map wide multiplier status.</div><button class="panel-btn" onclick="cc(this,'games/fishing/setFrenzy.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- VIEW: SANTA -->
                <div class="viewport" id="v-santa">
                    <div class="view-header"><h2>Santa's Workshop Automation</h2><p>Toy construction loops, room variables, and resource counts.</p></div>
                    <div class="grid-container">
                        <div class="macro-card"><div class="macro-title">Auto Build & Ship</div><div class="macro-desc">Finishes material work items fast.</div><button class="panel-btn" onclick="cc(this,'games/santasworkshop/autoBuild.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Max Out Toys Count</div><div class="macro-desc">Forces item production parameters high.</div><button class="panel-btn" onclick="cc(this,'games/santasworkshop/setToys.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Infinite Materials Bar</div><div class="macro-desc">Locks parts supply directly at max values.</div><button class="panel-btn" onclick="cc(this,'games/santasworkshop/infMaterials.js')">Copy Code</button></div>
                        <div class="macro-card"><div class="macro-title">Unlock Shop Buffs</div><div class="macro-desc">Applies all production station upgrades.</div><button class="panel-btn" onclick="cc(this,'games/santasworkshop/maxUpgrades.js')">Copy Code</button></div>
                    </div>
                </div>

                <!-- MONITOR PREVIEW INTERFACE -->
                <div class="monitor-box" id="terminal">Live Code Monitor: Select a mode subcategory from the sidebar list, then choose your option module card block above.</div>
            </div>
        </div>
    </div>

    <script>
        // TAB SWAPPING LOGIC
        const navItems = document.querySelectorAll('.nav-item');
        const viewports = document.querySelectorAll('.viewport');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.getAttribute('data-target');
                navItems.forEach(i => i.classList.remove('active'));
                viewports.forEach(v => v.classList.remove('active-view'));
                item.classList.add('active');
                document.getElementById(targetId).classList.add('active-view');
            });
        });

        // HIGH PERFORMANCE INSTANT COPY FUNCTION
        function cc(btn, path) {
            const rawInjectedString = `javascript:(function(){fetch('https://githubusercontent.com{path}').then(res=>res.text()).then(code=>eval(code));})();`;
            
            navigator.clipboard.writeText(rawInjectedString).then(() => {
                const term = document.getElementById('terminal');
                term.style.color = '#10b981';
                term.innerHTML = `[SUCCESSFULLY EXPORTED CODES]<br>Path payload location compiled to storage lines:<br><span style="color:#e2e8f0; font-size:10px;">${rawInjectedString}</span>`;
                
                btn.innerText = "✓ Ready!";
                btn.classList.add('copied');
                setTimeout(() => { btn.innerText = "Copy Code"; btn.classList.remove('copied'); }, 1000);
            }).catch(() => {
                const dummy = document.createElement("textarea");
                dummy.value = rawInjectedString; document.body.appendChild(dummy);
                dummy.select(); document.execCommand("copy"); document.body.removeChild(dummy);
                document.getElementById('terminal').innerHTML = `[COPIED VIA SYSTEM FALLBACK UTILITY]`;
            });
        }
    </script>
</body>
</html>
