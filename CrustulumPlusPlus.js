if (typeof CPP !== 'undefined') {
    if (CPP === null) {
        delete CPP;
    } else throw new Error('Crustulum already loaded.');
}
let CPP = {
    OG: {}, // Original Game Data
    Game: { // Our overrides
        UpdateMenu: () => {
            CPP.OG.UpdateMenu();
            if (Game.onMenu == 'prefs') {
                let fragment = document.createDocumentFragment();
                fragment.appendChild(CPP.menu.heading('Toggleables'));
                fragment.appendChild(CPP.menu.subheading('None :('));
                fragment.appendChild(CPP.menu.heading('Toggleables: Cheating'));
                fragment.appendChild(CPP.menu.subheading('Automation'));
                fragment.appendChild(CPP.menu.toggleButton('autoClicker', 'Automatically click the big cookie', 'Notice: the mouse can be wherever you want, particles are always summoned but only shown wh'));
                fragment.appendChild(CPP.menu.toggleButton('autoGolden', 'Automatically click golden cookies when they appear', 'Whenever a golden/wrath cookie appears, it will be clicked.'));
                fragment.appendChild(CPP.menu.toggleButton('autoReindeer', 'Automatically click reindeer', 'Whenever a reindeer appears, it will be clicked.'));
                fragment.appendChild(CPP.menu.toggleButton('autoNews', 'Automatically click news', 'Clicks on the news ticker for you (notice: fortunes can\'t appear.)'));
                fragment.appendChild(CPP.menu.subheading('Golden Cookies'));
                fragment.appendChild(CPP.menu.toggleButton('blockWrath', 'Block Wrath Cookies', 'Prevents wrath cookies from spawning.'));
                fragment.appendChild(CPP.menu.subheading('Infinity'));
                fragment.appendChild(CPP.menu.toggleButton('infiniteCookies', 'Infinite Cookies', 'Your cookies constantly regenerate.'));
                fragment.appendChild(CPP.menu.toggleButton('infiniteMagic', 'Infinite Magic', 'Your Grimoire magic recharges almost instantly'));
                fragment.appendChild(CPP.menu.toggleButton('infiniteSwaps', 'Infinite Swaps', 'Your Pantheon swaps regenerates almost instantly.'));
                fragment.appendChild(CPP.menu.subheading('Minigames'));
                fragment.appendChild(CPP.menu.toggleButton('miracleSpells', 'Miracle Spell™', 'Grimoire spells never fail.'));
                fragment.appendChild(CPP.menu.toggleButton('immortalPlants', 'Make Plants Immortal', 'Makes it so plants never wither. Does not affect weeds or fungi.'));
                fragment.appendChild(CPP.menu.toggleButton('neverWeeds', 'Never Weed™', 'Makes it so weeds never spawn on their own. You can still plant them and they still may spread.'));
                fragment.appendChild(CPP.menu.toggleButton('allGodsActive', 'Pantheon \'R Us', 'All Pantheon gods except for Cyclius will be active in slot one.'));
                fragment.appendChild(CPP.menu.toggleButton('allGodsSlotOne', 'Power Of The Gods', 'All Pantheon gods will behave as if they are in slot 1 regardless of which slot they are in.'));
                fragment.appendChild(CPP.menu.heading('Actions'));
                fragment.appendChild(CPP.menu.subheading('Appearance'));
                fragment.appendChild(CPP.menu.actionButton('summonToys', 'Render toys in the milk', 'A series of draggable cookies appear floating in the milk.', CPP.actions.toys));
                fragment.appendChild(CPP.menu.actionButton('party', 'Enter the PARTY!', 'MAkes the screen tilt and change color.', CPP.actions.party));
                fragment.appendChild(CPP.menu.heading('Actions: Cheating'));
                fragment.appendChild(CPP.menu.subheading('Spawning'));
                fragment.appendChild(CPP.menu.actionButton('spawnGolden', 'Spawn a Golden Cookie', 'Spawns a random golden cookie.', CPP.actions.spawnGolden));
                fragment.appendChild(CPP.menu.actionButton('spawnGoldenFrenzy', 'Spawn a Frenzy Cookie', 'Spawns a golden cookie with the Frenzy effect.', CPP.actions.spawnGolden));
                fragment.appendChild(CPP.menu.actionButton('spawnGoldenDragonflight', 'Spawn a Dragonflight Cookie', 'Spawns a golden cookie that will cause a dragonflight.', CPP.actions.spawnGoldenDragonflight));
                fragment.appendChild(CPP.menu.actionButton('giveSugarLump', 'Give 1 Sugar Lump', 'Gives you a sugar limp.', CPP.actions.giveSugarLump));
                fragment.appendChild(CPP.menu.actionButton('giveCookies', 'Give Cookies', 'Gives you the most cookies you can have without getting the cheated cookies achievement.', CPP.actions.giveCookies));
                fragment.appendChild(CPP.menu.subheading('Minigames'));
                fragment.appendChild(CPP.menu.actionButton('refillMagic', 'Refill Magic', 'Refill all of your Grimoire\'s magic.', CPP.actions.refillMagic));
                fragment.appendChild(CPP.menu.actionButton('refillSwaps', 'Refill Swaps', 'Refill all of your Pantheon\'s swaps', CPP.actions.refillSwaps));
                fragment.appendChild(CPP.menu.subheading('Unlocks'));
                fragment.appendChild(CPP.menu.actionButton('unlockAllSeeds', 'Unlock Plant Seeds', 'Unlocks all the plant seeds for your Garden. Does not unlock weeds or fungi.', CPP.actions.unlockAllSeeds));
                fragment.appendChild(CPP.menu.actionButton('unlockAllWeedFungusSeeds', 'Unlock Weed and Fungi Seeds', 'Unlocks all the weed and fungus seeds for the Garden.', CPP.actions.unlockAllWeedFungusSeeds));
                fragment.appendChild(CPP.menu.actionButton('lockAllSeeds', 'Lock All Seeds', 'Locks all the seeds for the Garden except for the starting seed.', CPP.actions.lockAllSeeds));
                fragment.appendChild(CPP.menu.actionButton('unlockAllAchievements', 'Win All Achievements', 'Grants all achievements.', CPP.actions.achievements));
                fragment.appendChild(CPP.menu.actionButton('unlockAllUpgrades', 'Get All Upgrades', 'Unlocks and buys all upgrades.', CPP.actions.upgrades));
                fragment.appendChild(CPP.menu.subheading('Misc'));
                fragment.appendChild(CPP.menu.actionButton('removeCheatedCookies', 'Remove Cheat Achievement', 'Remove \'Cheated cookies taste awful\' achievement', CPP.actions.removeCheatedCookies));

                // Unload Crustulum button. Doesn't work if you loaded other add-ons first. We check only for Cookie Monster.
                if (typeof CM === 'undefined' || CPP.cookieMonsterLoaded) fragment.appendChild(CPP.menu.actionButton('unloadCrustulum', 'Unload Crustulum++', 'Unloads Crustulum++ (and disables all of it\'s features.)', CPP.actions.unloadCrustulum));

                CPP.hooks.UpdateMenu(fragment);

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
        spawnGoldenFrenzy: () => CPP.actions.spawnGoldenFixed('frenzy'),
        spawnGoldenDragonflight: () => CPP.actions.spawnGoldenFixed('dragonflight'),
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
            Object.keys(CPP.ticks).forEach((tickThis) => {
                let tick = CPP.ticks[tickThis];
                if (tick.intervalId) {
                    clearInterval(tick.intervalId);
                    tick.intervalId = 0;
                }
            });
            CPP.liberate.Game();
            CPP.hooks.UnloadPlugins();
            Game.UpdateMenu();
            setTimeout(() => CPP = null, 100);
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
        CPP.hijack.Game();
        CPP.loadConfig();
        CPP.initTicks();
        Game.Win('Third-party');
        if (typeof CM === 'object' && typeof Queue !== 'undefined' && typeof jscolor !== 'undefined') CPP.cookieMonsterLoaded = true;
        CPP.hooks.Init();
    },
    cookieMonsterLoaded: false,
    menu: {
        toggleButton: (configParam, text, description) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            if (!CPP.getConfig(configParam)) a.className = 'option off';
            else a.className = 'option';
            a.id = `crustulum-${configParam}`;
            a.onclick = () => CPP.toggleConfig(configParam);
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
            let subheading = CPP.menu.heading(text);
            subheading.style.fontSize = '17px';
            return subheading;
        },
    },
    saveConfig: () => {
        localStorage.setItem('Crustulum', JSON.stringify(CPP.config));
    },
    loadConfig: () => {
        let config = localStorage.getItem('Crustulum');
        if (config) {
            config = JSON.parse(config);
            Object.keys(config).forEach((key) => {
                CPP.setConfig(key, config[key]);
            });
        }
    },
    getConfig: (configParam) => {
        if (typeof CPP.config[configParam] === 'undefined')
            return CPP.configDefaults[configParam];
        else return CPP.config[configParam];
    },
    setConfig: (configParam, configValue) => {
        if (configValue === CPP.configDefaults[configParam])
            delete CPP.config[configParam];
        else CPP.config[configParam] = configValue;
        CPP.saveConfig();
        return CPP.getConfig(configParam);
    },
    toggleConfig: (configParam) => {
        let val = CPP.setConfig(configParam, !CPP.getConfig(configParam));
        CPP.updateMenuView(configParam);
        return val;
    },
    updateMenuView: (configParam) => {
        if (!CPP.getConfig(configParam))
            l(`crustulum-${configParam}`).className = 'option off';
        else
            l(`crustulum-${configParam}`).className = 'option';
    },
    liberate: {
        Game: () => {
            if (CPP.OG.UpdateMenu) Game.UpdateMenu = CPP.OG.UpdateMenu;
            if (CPP.OG.shimmerPrototypeInit) Game.shimmer.prototype.init = function () {
                Game.shimmerTypes[this.type].initFunc(this);
            };
            if (Game.hasGod) CPP.liberate.hasGod();
            CPP.liberate.miniGames();
        },
        miniGames: () => {
            if (Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants && Game.Objects['Farm'].minigame.soils) {
                if (CPP.OG.gardenPlantsMortality) Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (!plant.weed && !plant.fungus) Object.defineProperty(plant, 'immortal', { value: CPP.OG.gardenPlantsMortality[plantName], configurable: true });
                });

                if (CPP.OG.gardenSoilWeed) Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                    let soil = Game.Objects['Farm'].minigame.soils[soilName];
                    Object.defineProperty(soil, 'weedMult', { value: CPP.OG.gardenSoilWeed[soilName], configurable: true });
                });
            }
            if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.getFailChance) {
                if (CPP.OG.grimoireFailChance) Game.Objects['Wizard tower'].minigame.getFailChance = CPP.OG.grimoireFailChance;
            }
        },
        hasGod: () => {
            if (Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods && CPP.OG.hasGod && Game.hasGod) Game.hasGod = CPP.OG.hasGod;
            else delete Game.hasGod;
        },
    },
    hijack: {
        Game: () => {
            if (!CPP.OG.UpdateMenu) {
                CPP.OG.UpdateMenu = Game.UpdateMenu;
                Game.UpdateMenu = CPP.Game.UpdateMenu;
            }
            if (!CPP.OG.shimmerPrototypeInit) {
                CPP.OG.shimmerPrototypeInit = true;
                Game.shimmer.prototype.init = function () {
                    if (CPP.getConfig('blockWrath')) {
                        this.forceObj = { 'noWrath': true };
                        Game.shimmerTypes[this.type].initFunc(this);
                    } else {
                        Game.shimmerTypes[this.type].initFunc(this);
                    }
                }
            }
            if (!CPP.OG.hasGod) CPP.hijack.hasGod();

            CPP.hijack.miniGames();
        },
        miniGames: () => {
            if (!CPP) return;
            retry = false;

            if (!Game.Objects['Farm'].minigameLoaded || !Game.Objects['Farm'].minigame.plants || !Game.Objects['Farm'].minigame.soils) {
                retry = true;
            } else {
                if (!CPP.OG.gardenPlantsMortality) {
                    CPP.OG.gardenPlantsMortality = {};
                    Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                        let plant = Game.Objects['Farm'].minigame.plants[plantName];
                        if (!plant.weed && !plant.fungus) {
                            CPP.OG.gardenPlantsMortality[plantName] = plant.immortal;
                            Object.defineProperty(plant, 'immortal', { get: () => { return (CPP.getConfig('immortalPlants') ? true : CPP.OG.gardenPlantsMortality[plantName]) }, configurable: true });
                        }
                    });
                }

                if (!CPP.OG.gardenSoilWeed) {
                    CPP.OG.gardenSoilWeed = {};
                    Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                        let soil = Game.Objects['Farm'].minigame.soils[soilName];
                        CPP.OG.gardenSoilWeed[soilName] = soil.weedMult;
                        Object.defineProperty(soil, 'weedMult', { get: () => { return (CPP.getConfig('neverWeeds') ? 0 : CPP.OG.gardenSoilWeed[soilName]) }, configurable: true });
                    });
                }
            }

            if (!Game.Objects['Wizard tower'].minigameLoaded || !Game.Objects['Wizard tower'].minigame.getFailChance) {
                retry = true;
            } else {
                if (!CPP.OG.grimoireFailChance) {
                    CPP.OG.grimoireFailChance = Game.Objects['Wizard tower'].minigame.getFailChance;
                    Game.Objects['Wizard tower'].minigame.getFailChance = (spell) => (CPP.getConfig('miracleSpells') ? 0 : CPP.OG.grimoireFailChance(spell));
                }
            }

            if (retry) setTimeout(CPP.hijack.miniGames, 1000);
        },
        hasGod: () => {
            if (!CPP) return;
            if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) {
                setTimeout(CPP.hijack.hasGod, 1000); // We keep running this until we get the real Game.hasGod()
            } else if (!CPP.OG.hasGod && Game.hasGod) {
                CPP.OG.hasGod = Game.hasGod;
            }
            Game.hasGod = function (what) {
                if (CPP.getConfig('allGodsActive')) {
                    if (['ages'].includes(what)) return false; // Add gods to this if you want to skip them
                    return 1;
                } else if (CPP.getConfig('allGodsSlotOne')) {
                    if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return false; // Don't run if minigame isn't loaded (errors otherwise)
                    let god = Game.Objects['Temple'].minigame.gods[what];
                    for (let i = 0; i < 3; i++)
                        if (Game.Objects['Temple'].minigame.slot[i] == god.id) return 1;
                    return false;
                } else {
                    if (CPP.OG.hasGod) return CPP.OG.hasGod(what);
                    else return false;
                }
            }
        },
    },
    initTicks: () => {
        Object.keys(CPP.ticks).forEach((tickThis) => {
            let tick = CPP.ticks[tickThis];
            if (!tick.intervalId) tick.intervalId = setInterval(tick.onTick, tick.rate);
        });
    },
    ticks: {
        'autoClicker': {
            'intervalId': null,
            'rate': 50,
            'onTick': () => {
                if (!CPP.getConfig('autoClicker')) return;
                Game.ClickCookie();
            },
        },
        'autoGolden': {
            'intervalId': null,
            'rate': 500,
            'onTick': () => {
                if (!CPP.getConfig('autoGolden')) return;
                Game.shimmers.forEach(function (shimmer) {
                    if (shimmer.type == "golden") { shimmer.pop() }
                })
            },
        },
        'autoReindeer': {
            'intervalId': null,
            'rate': 500,
            'onTick': () => {
                if (!CPP.getConfig('autoReindeer')) return;
                Game.shimmers.forEach(function (shimmer) {
                    if (shimmer.type == 'reindeer') { shimmer.pop() }
                })
            },
        },
        'autoNews': {
            'intervalId': null,
            'rate': 3000,
            'onTick': () => {
                if (!CPP.getConfig('autoNews')) return;
                if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') Game.tickerL.click();
            },
        },
        'infiniteCookies': {
            'intervalId': null,
            'rate': 100,
            'onTick': () => {
                if (!CPP.getConfig('infiniteCookies')) return;
                Game.cookies = Game.cookiesEarned;
            },
        },
        'infiniteMagic': {
            'intervalId': null,
            'rate': 1000,
            'onTick': () => {
                if (!CPP.getConfig('infiniteMagic')) return;
                if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                    Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
            },
        },
        'infiniteSwaps': {
            'intervalId': null,
            'rate': 1000,
            'onTick': () => {
                if (!CPP.getConfig('infiniteSwaps')) return;
                if (!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return;
                Game.Objects['Temple'].minigame.swaps = 3;
                Game.Objects['Temple'].minigame.swapT = Date.now();
                Game.Objects['Temple'].minigame.lastSwapT = 0;
            },
        },
    },
    hooks: {
        Init: () => {
            Object.keys(CPP.Plugins).forEach((key) => {
                let plugin = CPP.Plugins[key];
                if (typeof plugin['Init'] === 'function') plugin['Init']();
            });
        },
        UnloadPlugins: () => {
            Object.keys(CPP.Plugins).forEach((key) => {
                let plugin = CPP.Plugins[key];
                if (typeof plugin['Unload'] === 'function') plugin['Unload']();
            });
        },
        UpdateMenu: (fragment) => {
            Object.keys(CPP.Plugins).forEach((key) => {
                let plugin = CPP.Plugins[key];
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
            CPP.Plugins[key] = plugin;
            if (typeof CPP.Plugins[key]['Loaded'] === 'function') CPP.Plugins[key].Loaded();
        } else if (typeof plugin === 'function') {
            CPP.Plugins[key] = plugin;
            CPP.Plugins[key]();
        }
    });
}

// Alternatively, you can set CrustulumInit to false to prevent the Init and set up your plugins after loading the script, remember to call `Crustulum.Init()` afterwards.
if (typeof CrustulumInit === 'undefined' || CrustulumInit) CPP.init();

/* cSpell:ignore Crustulum, Toggleables, prefs, minigame, Mult, grimoire, grimoire's, grimoire\'s, Cyclius, dragonflight, Achiev, jscolor */