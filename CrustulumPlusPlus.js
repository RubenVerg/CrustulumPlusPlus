if (typeof crustulumPlusPlus !== 'undefined') {
    if (crustulumPlusPlus === null) {
        delete crustulumPlusPlus;
    } else throw new Error('Crustulum++ already loaded.');
}
let crustulumPlusPlus = {
    OG: {}, // Original Game Data
    Game: { // Our overrides
        UpdateMenu: () => {
            crustulumPlusPlus.OG.UpdateMenu();
            if (Game.onMenu == 'prefs') {
                let fragment = document.createDocumentFragment();
                fragment.appendChild(crustulumPlusPlus.menu.heading('Toggleables'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('None :('));
                fragment.appendChild(crustulumPlusPlus.menu.heading('Toggleables: Cheating'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Automation'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('autoClicker', 'Automatically click the big cookie', 'Notice: the mouse can be wherever you want, particles are always summoned but only shown wh'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('autoGolden', 'Automatically click golden cookies when they appear', 'Whenever a golden/wrath cookie appears, it will be clicked.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('autoReindeer', 'Automatically click reindeer', 'Whenever a reindeer appears, it will be clicked.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('autoNews', 'Automatically click news', 'Clicks on the news ticker for you (notice: fortunes can\'t appear.)'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Golden Cookies'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('blockWrath', 'Block Wrath Cookies', 'Prevents wrath cookies from spawning.'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Infinity'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('infiniteCookies', 'Infinite Cookies', 'Your cookies constantly regenerate.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('infiniteMagic', 'Infinite Magic', 'Your Grimoire magic recharges almost instantly'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('infiniteSwaps', 'Infinite Swaps', 'Your Pantheon swaps regenerates almost instantly.'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Minigames'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('miracleSpells', 'Miracle Spell™', 'Grimoire spells never fail.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('immortalPlants', 'Make Plants Immortal', 'Makes it so plants never wither. Does not affect weeds or fungi.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('neverWeeds', 'Never Weed™', 'Makes it so weeds never spawn on their own. You can still plant them and they still may spread.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('allGodsActive', 'Pantheon \'R Us', 'All Pantheon gods except for Cyclius will be active in slot one.'));
                fragment.appendChild(crustulumPlusPlus.menu.toggleButton('allGodsSlotOne', 'Power Of The Gods', 'All Pantheon gods will behave as if they are in slot 1 regardless of which slot they are in.'));
                fragment.appendChild(crustulumPlusPlus.menu.heading('Actions'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Appearance'));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('summonToys', 'Render toys in the milk', 'A series of draggable cookies appear floating in the milk.', crustulumPlusPlus.actions.toys));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('party', 'Enter the PARTY!', 'MAkes the screen tilt and change color.', crustulumPlusPlus.actions.party));
                fragment.appendChild(crustulumPlusPlus.menu.heading('Actions: Cheating'));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Spawning'));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('spawnGolden', 'Spawn a Golden Cookie', 'Spawns a random golden cookie.', crustulumPlusPlus.actions.spawnGolden));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('spawnGoldenFrenzy', 'Spawn a Frenzy Cookie', 'Spawns a golden cookie with the Frenzy effect.', crustulumPlusPlus.actions.spawnGolden));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('spawnGoldenDragonflight', 'Spawn a Dragonflight Cookie', 'Spawns a golden cookie that will cause a dragonflight.', crustulumPlusPlus.actions.spawnGoldenDragonflight));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('giveSugarLump', 'Give 1 Sugar Lump', 'Gives you a sugar limp.', crustulumPlusPlus.actions.giveSugarLump));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('giveCookies', 'Give Cookies', 'Gives you the most cookies you can have without getting over max baked.', crustulumPlusPlus.actions.giveCookies));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Minigames'));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('refillMagic', 'Refill Magic', 'Refill all of your Grimoire\'s magic.', crustulumPlusPlus.actions.refillMagic));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('refillSwaps', 'Refill Swaps', 'Refill all of your Pantheon\'s swaps', crustulumPlusPlus.actions.refillSwaps));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Unlocks'));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('unlockAllSeeds', 'Unlock Plant Seeds', 'Unlocks all the plant seeds for your Garden. Does not unlock weeds or fungi.', crustulumPlusPlus.actions.unlockAllSeeds));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('unlockAllWeedFungusSeeds', 'Unlock Weed and Fungi Seeds', 'Unlocks all the weed and fungus seeds for the Garden.', crustulumPlusPlus.actions.unlockAllWeedFungusSeeds));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('lockAllSeeds', 'Lock All Seeds', 'Locks all the seeds for the Garden except for the starting seed.', crustulumPlusPlus.actions.lockAllSeeds));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('unlockAllAchievements', 'Win All Achievements', 'Grants all achievements.', crustulumPlusPlus.actions.achievements));
                fragment.appendChild(crustulumPlusPlus.menu.actionButton('unlockAllUpgrades', 'Get All Upgrades', 'Unlocks and buys all upgrades.', crustulumPlusPlus.actions.upgrades));
                fragment.appendChild(crustulumPlusPlus.menu.subheading('Misc'));
                //fragment.appendChild(crustulumPlusPlus.menu.actionButton('removeCheatedCookies', 'Remove Cheat Achievement', 'Remove \'Cheated cookies taste awful\' achievement', crustulumPlusPlus.actions.removeCheatedCookies));

                // Unload Crustulum button. Doesn't work if you loaded other add-ons first. We check only for Cookie Monster.
                if (typeof CM === 'undefined' || crustulumPlusPlus.cookieMonsterLoaded) fragment.appendChild(crustulumPlusPlus.menu.actionButton('unloadCrustulum', 'Unload Crustulum++', 'Unloads Crustulum++ (and disables all of it\'s features.)', crustulumPlusPlus.actions.unloadCrustulum));

                crustulumPlusPlus.hooks.UpdateMenu(fragment);

                l('menu').childNodes[2].insertBefore(fragment, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length - 1]);
            }
        },
    },
    actions: { // Our action library
        toys: () => {
            Game.TOYS = true;
        },
        party: () => {
            if (confirm('Epilepsy warning: Party Mode contains flashing colors and lights, rapidly moving objects and tilting. Do you want to proceed?')) game.PARTY = true;
        },
        spawnGolden: () => {
            Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
        },
        spawnGoldenFrenzy: () => crustulumPlusPlus.actions.spawnGoldenFixed('frenzy'),
        spawnGoldenDragonflight: () => crustulumPlusPlus.actions.spawnGoldenFixed('dragonflight'),
        spawnGoldenFixed: (type) => {
            let newShimmer = new Game.shimmer('golden', { noWrath: true });
            newShimmer.dur = 10000;
            newShimmer.life = Math.ceil(Game.fps * newShimmer.dur);
            newShimmer.force = type;
            newShimmer.sizeMult = 2;
            return newShimmer;
        },
        removeCheatedCookies: () => Game.RemoveAchiev('Cheated cookies taste awful'),
        refillMagic: () => {
            if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
        },
        refillSwaps: () => {
            if (Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods) {
                Game.Objects['Temple'].minigame.swaps = 3;
                Game.Objects['Temple'].minigame.swapT = Date.now();
                Game.Objects['Temple'].minigame.lastSwapT = 0;
            }
        },
        giveSugarLump: () => {
            Game.gainLumps(1);
        },
        giveCookies: () => {
            Game.cookies = Game.cookiesEarned;
        },
        unlockAllSeeds: () => {
            if (Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (plant.weed || plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        unlockAllWeedFungusSeeds: () => {
            if (Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (!plant.weed && !plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        lockAllSeeds: () => {
            if (Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) Game.Objects['Farm'].minigame.lockSeed(plant);
                });
                Game.Objects['Farm'].minigame.unlockSeed(Game.Objects['Farm'].minigame.plants['bakerWheat']);
            }
        },
        achievements: () => { //++
            Game.AchievementsById.forEach( (achievement) => {
                achievement.won = 1;
            });
        },
        upgrades: () => { //++
            Game.UpgradesById.forEach( (upgrade) => {
                upgrade.bought = 1;
            });
        },
        unloadCrustulum: () => {
            Object.keys(crustulumPlusPlus.ticks).forEach((tickThis) => {
                let tick = crustulumPlusPlus.ticks[tickThis];
                if (tick.intervalId) {
                    clearInterval(tick.intervalId);
                    tick.intervalId = 0;
                }
            });
            crustulumPlusPlus.liberate.Game();
            crustulumPlusPlus.hooks.UnloadPlugins();
            Game.UpdateMenu();
            setTimeout(() => crustulumPlusPlus = null, 100);
        },
    },
    configDefaults: { // The default value for the configs
        'autoClicker': false,
        'autoGolden': false,
        'autoReindeer': false,
        'autoNews': false,
        'infiniteCookies': false,
        'infiniteMagic': false,
        'infiniteSwaps': false,
        'blockWrath': false,
        'immortalPlants': false,
        'neverWeeds': false,
        'miracleSpells': false,
        'allGodsActive': false,
        'allGodsSlotOne': false,
        'toys': false
    },
    config: {}, // User settings
    init: () => { // Initialize the add-on.
        if (!Game || !Game.version || !Game.updateLog) {
            alert('The game isn\'t loaded yet or this isn\'t the game.');
            return;
        }
        crustulumPlusPlus.hijack.Game();
        crustulumPlusPlus.loadConfig();
        crustulumPlusPlus.initTicks();
        Game.Win('Third-party');
        if (typeof CM === 'object' && typeof Queue !== 'undefined' && typeof jscolor !== 'undefined') crustulumPlusPlus.cookieMonsterLoaded = true;
        crustulumPlusPlus.hooks.Init();
    },
    cookieMonsterLoaded: false,
    menu: {
        toggleButton: (configParam, text, description) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            if (!crustulumPlusPlus.getConfig(configParam)) a.className = 'option off';
            else a.className = 'option';
            a.id = `crustulum-${configParam}`;
            a.onclick = () => crustulumPlusPlus.toggleConfig(configParam);
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        actionButton: (configParam, text, description, action) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            a.className = 'option';
            a.id = `crustulum-${configParam}`;
            a.onclick = action;
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        heading: (text) => {
            let heading = document.createElement('div');
            heading.className = 'title';
            heading.textContent = text;
            return heading;
        },
        subheading: (text) => {
            let subheading = crustulumPlusPlus.menu.heading(text);
            subheading.style.fontSize = '17px';
            return subheading;
        },
    },
    saveConfig: () => {
        localStorage.setItem('Crustulum', JSON.stringify(crustulumPlusPlus.config));
    },
    loadConfig: () => {
        let config = localStorage.getItem('Crustulum');
        if (config) {
            config = JSON.parse(config);
            Object.keys(config).forEach((key) => {
                crustulumPlusPlus.setConfig(key, config[key]);
            });
        }
    },
    getConfig: (configParam) => {
        if (typeof crustulumPlusPlus.config[configParam] === 'undefined')
            return crustulumPlusPlus.configDefaults[configParam];
        else return crustulumPlusPlus.config[configParam];
    },
    setConfig: (configParam, configValue) => {
        if (configValue === crustulumPlusPlus.configDefaults[configParam])
            delete crustulumPlusPlus.config[configParam];
        else crustulumPlusPlus.config[configParam] = configValue;
        crustulumPlusPlus.saveConfig();
        return crustulumPlusPlus.getConfig(configParam);
    },
    toggleConfig: (configParam) => {
        let val = crustulumPlusPlus.setConfig(configParam, !crustulumPlusPlus.getConfig(configParam));
        crustulumPlusPlus.updateMenuView(configParam);
        return val;
    },
    updateMenuView: (configParam) => {
        if (!crustulumPlusPlus.getConfig(configParam))
            l(`crustulum-${configParam}`).className = 'option off';
        else
            l(`crustulum-${configParam}`).className = 'option';
    },
    liberate: {
        Game: () => {
            if (crustulumPlusPlus.OG.UpdateMenu) Game.UpdateMenu = crustulumPlusPlus.OG.UpdateMenu;
            if (crustulumPlusPlus.OG.shimmerPrototypeInit) Game.shimmer.prototype.init = function () {
                Game.shimmerTypes[this.type].initFunc(this);
            };
            if (Game.hasGod) crustulumPlusPlus.liberate.hasGod();
            crustulumPlusPlus.liberate.miniGames();
        },
        miniGames: () => {
            if (Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants && Game.Objects['Farm'].minigame.soils) {
                if (crustulumPlusPlus.OG.gardenPlantsMortality) Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (!plant.weed && !plant.fungus) Object.defineProperty(plant, 'immortal', { value: crustulumPlusPlus.OG.gardenPlantsMortality[plantName], configurable: true });
                });

                if (crustulumPlusPlus.OG.gardenSoilWeed) Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                    let soil = Game.Objects['Farm'].minigame.soils[soilName];
                    Object.defineProperty(soil, 'weedMult', { value: crustulumPlusPlus.OG.gardenSoilWeed[soilName], configurable: true });
                });
            }
            if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.getFailChance) {
                if (crustulumPlusPlus.OG.grimoireFailChance) Game.Objects['Wizard tower'].minigame.getFailChance = crustulumPlusPlus.OG.grimoireFailChance;
            }
        },
        hasGod: () => {
            if (Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods && crustulumPlusPlus.OG.hasGod && Game.hasGod) Game.hasGod = crustulumPlusPlus.OG.hasGod;
            else delete Game.hasGod;
        },
    },
    hijack: {
        Game: () => {
            if (!crustulumPlusPlus.OG.UpdateMenu) {
                crustulumPlusPlus.OG.UpdateMenu = Game.UpdateMenu;
                Game.UpdateMenu = crustulumPlusPlus.Game.UpdateMenu;
            }
            if (!crustulumPlusPlus.OG.shimmerPrototypeInit) {
                crustulumPlusPlus.OG.shimmerPrototypeInit = true;
                Game.shimmer.prototype.init = function () {
                    if (crustulumPlusPlus.getConfig('blockWrath')) {
                        this.forceObj = { 'noWrath': true };
                        Game.shimmerTypes[this.type].initFunc(this);
                    } else {
                        Game.shimmerTypes[this.type].initFunc(this);
                    }
                }
            }
            if (!crustulumPlusPlus.OG.hasGod) crustulumPlusPlus.hijack.hasGod();

            crustulumPlusPlus.hijack.miniGames();
        },
        miniGames: () => {
            if (!crustulumPlusPlus) return;
            retry = false;

            if (!Game.Objects['Farm'].minigameLoaded || !Game.Objects['Farm'].minigame.plants || !Game.Objects['Farm'].minigame.soils) {
                retry = true;
            } else {
                if (!crustulumPlusPlus.OG.gardenPlantsMortality) {
                    crustulumPlusPlus.OG.gardenPlantsMortality = {};
                    Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                        let plant = Game.Objects['Farm'].minigame.plants[plantName];
                        if (!plant.weed && !plant.fungus) {
                            crustulumPlusPlus.OG.gardenPlantsMortality[plantName] = plant.immortal;
                            Object.defineProperty(plant, 'immortal', { get: () => { return (crustulumPlusPlus.getConfig('immortalPlants') ? true : crustulumPlusPlus.OG.gardenPlantsMortality[plantName]) }, configurable: true });
                        }
                    });
                }

                if (!crustulumPlusPlus.OG.gardenSoilWeed) {
                    crustulumPlusPlus.OG.gardenSoilWeed = {};
                    Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                        let soil = Game.Objects['Farm'].minigame.soils[soilName];
                        crustulumPlusPlus.OG.gardenSoilWeed[soilName] = soil.weedMult;
                        Object.defineProperty(soil, 'weedMult', { get: () => { return (crustulumPlusPlus.getConfig('neverWeeds') ? 0 : crustulumPlusPlus.OG.gardenSoilWeed[soilName]) }, configurable: true });
                    });
                }
            }

            if (!Game.Objects['Wizard tower'].minigameLoaded || !Game.Objects['Wizard tower'].minigame.getFailChance) {
                retry = true;
            } else {
                if (!crustulumPlusPlus.OG.grimoireFailChance) {
                    crustulumPlusPlus.OG.grimoireFailChance = Game.Objects['Wizard tower'].minigame.getFailChance;
                    Game.Objects['Wizard tower'].minigame.getFailChance = (spell) => (crustulumPlusPlus.getConfig('miracleSpells') ? 0 : crustulumPlusPlus.OG.grimoireFailChance(spell));
                }
            }

            if (retry) setTimeout(crustulumPlusPlus.hijack.miniGames, 1000);
        },
        hasGod: () => {
            if (!crustulumPlusPlus) return;
            if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) {
                setTimeout(crustulumPlusPlus.hijack.hasGod, 1000); // We keep running this until we get the real Game.hasGod()
            } else if (!crustulumPlusPlus.OG.hasGod && Game.hasGod) {
                crustulumPlusPlus.OG.hasGod = Game.hasGod;
            }
            Game.hasGod = function (what) {
                if (crustulumPlusPlus.getConfig('allGodsActive')) {
                    if (['ages'].includes(what)) return false; // Add gods to this if you want to skip them
                    return 1;
                } else if (crustulumPlusPlus.getConfig('allGodsSlotOne')) {
                    if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return false; // Don't run if minigame isn't loaded (errors otherwise)
                    let god = Game.Objects['Temple'].minigame.gods[what];
                    for (let i = 0; i < 3; i++)
                        if (Game.Objects['Temple'].minigame.slot[i] == god.id) return 1;
                    return false;
                } else {
                    if (crustulumPlusPlus.OG.hasGod) return crustulumPlusPlus.OG.hasGod(what);
                    else return false;
                }
            }
        },
    },
    initTicks: () => {
        Object.keys(crustulumPlusPlus.ticks).forEach((tickThis) => {
            let tick = crustulumPlusPlus.ticks[tickThis];
            if (!tick.intervalId) tick.intervalId = setInterval(tick.onTick, tick.rate);
        });
    },
    ticks: {
        'autoClicker': {
            'intervalId': null,
            'rate': 50,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('autoClicker')) return;
                Game.ClickCookie();
            },
        },
        'autoGolden': {
            'intervalId': null,
            'rate': 500,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('autoGolden')) return;
                Game.shimmers.forEach(function (shimmer) {
                    if (shimmer.type == "golden") { shimmer.pop() }
                })
            },
        },
        'autoReindeer': {
            'intervalId': null,
            'rate': 500,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('autoReindeer')) return;
                Game.shimmers.forEach(function (shimmer) {
                    if (shimmer.type == 'reindeer') { shimmer.pop() }
                })
            },
        },
        'autoNews': {
            'intervalId': null,
            'rate': 3000,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('autoNews')) return;
                if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') Game.tickerL.click();
            },
        },
        'infiniteCookies': {
            'intervalId': null,
            'rate': 100,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('infiniteCookies')) return;
                Game.cookies = Game.cookiesEarned;
            },
        },
        'infiniteMagic': {
            'intervalId': null,
            'rate': 1000,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('infiniteMagic')) return;
                if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                    Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
            },
        },
        'infiniteSwaps': {
            'intervalId': null,
            'rate': 1000,
            'onTick': () => {
                if (!crustulumPlusPlus.getConfig('infiniteSwaps')) return;
                if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return;
                Game.Objects['Temple'].minigame.swaps = 3;
                Game.Objects['Temple'].minigame.swapT = Date.now();
                Game.Objects['Temple'].minigame.lastSwapT = 0;
            },
        },
    },
    hooks: {
        Init: () => {
            Object.keys(crustulumPlusPlus.Plugins).forEach((key) => {
                let plugin = crustulumPlusPlus.Plugins[key];
                if (typeof plugin['Init'] === 'function') plugin['Init']();
            });
        },
        UnloadPlugins: () => {
            Object.keys(crustulumPlusPlus.Plugins).forEach((key) => {
                let plugin = crustulumPlusPlus.Plugins[key];
                if (typeof plugin['Unload'] === 'function') plugin['Unload']();
            });
        },
        UpdateMenu: (fragment) => {
            Object.keys(crustulumPlusPlus.Plugins).forEach((key) => {
                let plugin = crustulumPlusPlus.Plugins[key];
                if (typeof plugin['Game'] === 'object' && typeof plugin['Game']['UpdateMenu'] === 'function') plugin['Game']['UpdateMenu'](fragment);
            });
        },
    },
    Plugins: {}, // Plugins
};

// You can setup `CrustulumPlugins` (object) with your custom plugins before loading this script
if (typeof CrustulumPlugins === 'object') {
    Object.keys(CrustulumPlugins).forEach((key) => {
        let plugin = CrustulumPlugins[key];
        if (typeof plugin === 'object') {
            crustulumPlusPlus.Plugins[key] = plugin;
            if (typeof crustulumPlusPlus.Plugins[key]['Loaded'] === 'function') crustulumPlusPlus.Plugins[key].Loaded();
        } else if (typeof plugin === 'function') {
            crustulumPlusPlus.Plugins[key] = plugin;
            crustulumPlusPlus.Plugins[key]();
        }
    });
}

// Alternatively, you can set CrustulumInit to false to prevent the Init and set up your plugins after loading the script, remember to call `Crustulum.Init()` afterwards.
if (typeof CrustulumInit === 'undefined' || CrustulumInit) crustulumPlusPlus.init();

/* cSpell:ignore Crustulum, Toggleables, prefs, minigame, Mult, grimoire, grimoire's, grimoire\'s, Cyclius, dragonflight, Achiev, jscolor */