

const dictionary = {
    noun: {
        animal: {
            singular: ["cat", "dog", "spider", "unicorn", "frog", "owl", "bug", "dragon", "fairy", "centaur"],
            plural: ["cats", "dogs", "spiders", "unicorns", "frogs", "owls", "bugs", "centaur"]
        },
        person: {
            singular: {
                //Words that don't need "A"
                proper: {
                    feminine: ["she", "Hermione Granger", "The Wicked Witch", "Elvira", "Wednesday Addams", "Hillary Clinton","Moaning Myrtle", "Barbie","Lady Gaga", "Ellen Degeneres", "Yennefer", "Triss", "Ciri", "Oprah"],
                    masculine: ["he", "Harry Potter", "Ron Weasley", "Hagrid", "Dracula", "Donald Trump", "Dumbledore", "The Devil", "Joe Biden", "Batman", "Spiderman", "Voldemort", "Frankenstein", "Geralt", "Tom Riddle"],
                    neutral: ["it", "they", "someone", "everyone", "nobody", "BMO", "C-3PO", "The President", "Demi Lovato", "The Dragonborn"],
                },
                //Words that need "A" or the
                nonProper: {
                    feminine: ["witch", "sorceress", "succubus", "mother", "nun", "daughter", "priestess", "actor", "aunt", "sister", "woman", "lady", "girl", "enchantress"],
                    masculine: ["wizard", "man", "grandpa", "uncle", "father", "monk", "son", "guy", "priest", "brother", "actress", "dude", "fellow", "druid", "gentleman", "headsman"],
                    neutral: ["police officer", "demon", "apparition", "goblin", "creature", "shadow-figure", "death eater", "firefighter", "headmaster", "surgeon", "teacher", "spirit", "person", "magician", "executioner", "skeleton", "zombie", "vampire", "werewolf", "mummy", "ghost", "software-engineer", "college student", "necromancer", "groundskeeper"],
                }
            },
            //Words that don't need "A"
            //plural words behave the same even if they are proper, pronouns are always "they, we or you"
            plural: ["doctors", "spirits", "demons", "ghouls", "ghosts", "goblins", "dementors", "death eaters", "creatures", "shadow figures", "apparitions", "witches", "sorceresses", "occultists", "succubi", "women", "ladies", "girls", "wizards", "men", "guys", "dudes", "people", "undead", "skeletons", "zombies", "vampires", "werewolves", "software-engineers", "college students", "necromancers", "groundskeepers"]
        },
        place: {
            //Words that don't need "A"  or the
            proper: {
                small: ["Hagrid's Hut", "The Room of Requirement", "The Chamber of Secrets", "The Great Hall", "The Prefects' Bathroom"],
                medium: ["Safeway", "Dracula's castle", "Target", "Hogwarts", "Hogsmeade", "Azkaban", "Kaer Morhen"],
                large: ["mountains", "woods", "San Francisco", "New York", "Tokyo", "London", "The Spirit Realm", "Outer Space", "The Underworld", "The Forbidden Forest", "The Upside Down"],
            },
            //Words that need "A"
            nonProper: {
                small: ["chair", "car", "train", "bus", "coffin", "closet", "backpack", "satchel", "locked chest", "cage", "jail cell", "cabinet", "suitcase", "tent", "hut", "burrow"],
                medium: ["hut", "shack", "basement", "grocery store", "college", "secret passage", "classroom", "bathroom", "summoning circle", "graveyard", "hospital", "operating room"],
                large: ["city", "town", "village", "desert", "forest", "ruin", "temple", "tomb", "burial site", "graveyard", "crater", "suburb", "crypt", "cave", "passageway"]
            },
        },
        //Rather than small, medium, large, I might get more specific...but we'll see
        thing: {
            //Words that don't need "A" or "The"
            proper: {
                singular: {
                    small: ["The Golden Snitch", "The Elder Wand", "Merlin's Beard", "The Sorcerer's Stone", "The Philosopher's Stone", "Ravenclaw's Diadem", "Slytherin's Locket", "Hufflepuff's Cup"],
                    medium: ["The Nimbus 2000", "The Marauder's Map", "The Sorting Hat", "The Goblet of Fire", "The Sword of Gryffindor"],
                    large: ["The Whomping Willow", "The Shrieking Shack", "The Moon", "Earth", "Neptune", "Mars", "Mercury", "Uranus", "Venus"],
                },
                plural: {
                    small: ["The Rings of Power", "Chaos Emeralds", "Silmarils"],
                    medium: ["The Deathly Hallows", "The Elder Scrolls", ],
                    large: ["The Standing Stones", "Places of Power"]
                }
            },
            //Words that need "A" or "The"
            nonProper: {
                singular: {
                    //Moveable, hold in hand, throwable even
                    small: ["ingredient","poison apple", "wand", "tumor", "broom", "spellbook", "potion", "crystal ball", "tarot card", "halloween candy", "severed head", "eye of newt", "carrot", "human heart", "voodoo doll", "dragon egg", "sword"],
                    //somewhat movable
                    medium: ["cauldron", "staircaise", "tombstone", "portal", "jack-o-lantern", "corpse", "skeleton", "pumpkin", "dead body", "bookcase",],
                    //immovable
                    large: ["tree", "monolith", "sinkhole", "boulder", "pile of bones", "statue", "spire", "monument", "tar pit", "ritual site", "altar", "cataclysm","interdimensional rift"]
                },
                plural: {
                    small: ["foods", "drinks","snacks", "medicine", "pills", "magic mushrooms", "potions", "eggs", "crystal balls", "sedatives", "bones", "taro cards", "slugs", "spiders", "cobwebs", "scrolls", "halloween candies", "hippogriff feathers", "entrails"],
                    medium: ["furniture pieces", "pumpkins", "tombstones", "horcruxes", "brooms", "cauldrons", "jack-o-lanterns", "corpses", "severed limbs", "brains"],
                    large: ["trees", "monoliths", "boulders", "bone piles", "statues", "monuments", "buildings", "spires", "tar pits", "ritual sites", "altars", "cataclysms", "interdimensional rifts"]
                },
            }

        },
    },
    adjective: {
        person: {
            posTone: ["good", "charismatic", "healthy", "smart", "intelligent", "good-looking", "blessed", "talented", "bright", "beautiful", "amazing", "hilarious", "great", "magical", "mythical", "generous", "kind", "attractive", "perfect", "flirty"],
            neuTone: ["tall", "short", "boring", "normal", "random", "peculiar","average", "bewitched", "regular", "chubby", "hungry", "thirsty", "tired", "focused", "typical", "preoccupied", "bored", "oblivious"],
            negTone: ["putrid", "socially-awkward", "sick", "unhealthy", "selfish", "creepy", "cruel", "possessed", "spooky", "stupid", "ugly", "smelly", "disgusting", "horrible", "outrageous", "awful", "weird", "mean", "selfish", "evil", "repulsive", "suspicious", "wicked"]
        },
        nonPerson: {
            posTone: ["delicious", "beautiful", "neat", "shiny", "amazing", "sacred", "enchanted", "great", "magical", "mythical", "perfect"],
            neuTone: ["green", "blue", "purple", "black", "red", "random", "peculiar", "yellow", "luminous", "tall", "short", "boring", "normal", "average", "unique", "interesting", "golden", "sturdy", "fragile", "sharp"],
            negTone: ["putrid", "stupid", "ugly", "smelly", "poisonous", "toxic", "spooky", "creepy", "cursed", "haunted", "disgusting", "horrible", "outrageous", "awful", "weird", "evil", "repulsive", "suspicious", "wicked"]
        }
    },


    //For now, I think I will only use simple past, present, and future tense. See: https://www.grammarly.com/blog/verb-tenses/#:~:text=The%20three%20main%20verb%20tenses,get%20twelve%20unique%20verb%20tenses.
    //I also need to think about verbs that happen to an object, versus ones that don't. ex: you don't breathe an apple, but you do eat an apple
    verb: {
        //He/she/it/that/proper
        singularThird: {
            //Needs object (i.e. Looked for - searched for - )
            needsObj: {
                small: {
                    conTense: ["is selling","is destroying","is enchanting","is repairing", "is cursing", "is having", "is looking for", "is consuming", "is taking", "is discovering", "is finding", "is giving away", "is transfiguring"],
                    pasTense: ["sold", "destroyed", "enchanted", "repaired", "cursed", "had", "threw", "looked for", "consumed", "used", "took", "hid", "discovered", "found", "gave away", "transfigured"],
                    presTense: ["sells", "destroys", "enchants", "repairs", "curses", "has", "throws", "looks for", "finds", "discovers", "hides", "steals", "consumes", "uses", "takes", "gives away", "transfigures"],
                    fuTense: ["will sell", "will destroy", "will enchant", "will repair", "will curse", "will have", "will throw", "will look for", "will find", "will discover", "will steal", "will consume", "will use", "will take", "will give away", "will transfigure"]
                },
                medium: {
                    conTense: ["is selling", "is destroying","is enchanting","is repairing","is hiding", "is looking for", "is using", "is discovering", "is finding", "is stealing", "is consuming", "is giving away", "is transfiguring"],
                    pasTense: ["sold","destroyed", "enchanted","repaired", "hid", "looked for", "used", "discovered", "found", "consumed", "stole", "gave away", "transfigured"],
                    presTense: ["sells", "destroys", "enchants","repairs","looks for", "finds", "discovers", "hides", "steals", "uses", "takes", "gives away", "transfigures"],
                    fuTense: ["will sell","will destroy", "will enchant","will repair", "will throw", "will look for", "will find", "will discover", "will steal", "will use", "will take", "will transfigure"]
                },
                large: {
                    conTense: ["is enchanting", "is repairing", "is looking for", "is finding", "is discovering", "is exploring", "is navigating", "is avoiding"],
                    pasTense: ["destroyed", "enchanted", "repaired", "looked for", "found", "discovered", "saw", "explored", "navigated", "avoided"],
                    presTense: ["destroys", "enchants", "repairs", "looks for", "finds", "discovers", "sees", "explores", "navigates", "avoids"],
                    fuTense: ["will destroy", "will enchant", "will repair", "will look for", "will find", "will discover", "will see", "will explore", "will navigate", "will avoid"]
                }
            },
            noObj: {
                conTense: ["is sleeping","is having visions", "is performing surgery","is placing a curse", "is dying", "is panicking", "is laughing", "is eating", "is crying", "is casting a spell", "is performing a ritual", "is resting", "is opening a portal", "is seeing the future", "is exercising", "is doing arts and crafts", "is brewing potions"],
                pasTense: ["had visions", "performed surgery", "placed a curse", "died", "panicked", "was", "laughed", "slept", "ate", "cried", "casted a spell", "performed a ritual", "rested", "opened a portal", "saw the future", "exercised", "did arts and crafts", "brewed potions"],
                presTense: ["has visions", "performs surgery", "places a curse", "dies", "panicks", "is", "laughs", "sleeps", "eats", "cries", "casts spells", "performs rituals", "rests", "opens portals", "sees the future", "exercises", "does arts and crafts", "brews potions"],
                fuTense: ["will have visions", "will perform surgery", "will place a curse", "will die", "will panick", "will be", "will laugh", "will sleep", "will eat", "will cry", "will cast a spell", "will perform a ritual", "will rest", "will open a portal", "will see the future", "will exercise", "will do arts and crafts", "will brew potions"],
            }
        },
        //I/you/we/they  I am NOT going to use "I" because it is irregular....
        plural: {
            needsObj: {
                small: {
                    conTense: ["are selling","are destroying","are enchanting","are repairing","are cursing", "are having", "are throwing", "are looking for", "are consuming", "are using", "are taking", "are hiding", "are discovering", "are finding", "are giving away", "are transfiguring"],
                    pasTense: ["sold", "destroyed", "enchanted", "repaired", "cursed", "had", "threw", "looked for", "consumed", "used", "took", "hid", "discovered", "found", "gave away", "transfigured"],
                    presTense: ["sell", "destroy", "enchant", "repair", "curse", "have", "throw", "look for", "find", "discover", "hide", "steal", "consume", "use", "take", "give away", "transfigure"],
                    fuTense: ["will sell", "will destroy", "will enchant", "will repair", "will curse", "will have", "will throw", "will look for", "will find", "will discover", "will steal", "will consume", "will use", "will take", "will give away", "will transfigure"]
                },
                medium: {
                    conTense: ["are selling","are destroying","are cursing", "are having", "are looking for", "are consuming", "are using", "are hiding", "are discovering", "are finding", "are giving away", "are transfiguring"],
                    pasTense: ["sold","destroyed", "cursed", "had", "hid", "looked for", "used", "discovered", "found", "consumed", "stole", "gave away", "transfigured"],
                    presTense: ["sell","destroy", "curse", "have", "look for", "find", "discover", "hide", "steal", "use", "take", "give away", "transfigure"],
                    fuTense: ["will sell", "will destroy", "will curse", "will have", "will throw", "will look for", "will find", "will discover", "will steal", "will use", "will take", "will transfigure"]
                },
                large: {
                    conTense: ["are destroying","are cursing", "are looking for", "are discovering", "are finding", "are seeing", "are avoiding", "are seeking"],
                    pasTense: ["destroyed", "cursed", "looked for", "found", "discovered", "saw", "navigated", "avoided", "sought"],
                    presTense: ["destroy", "curse", "look for", "find", "discover", "see", "navigate", "avoid"],
                    fuTense: ["will destroy", "will curse", "will look for", "will find", "will discover", "will see", "will navigate", "will avoid", "will seek"]
                }
            },
            noObj: {
                conTense: ["are sleeping","are having visions", "are performing surgery", "are placing a curse", "are dying", "are panicking", "are laughing", "are eating", "are crying", "are casting a spell", "are performing a ritual", "are resting", "are opening a portal", "are seeing the future", "are exercising", "are doing arts and crafts", "are brewing potions"],
                pasTense: ["had visons","performed surgery","died", "panicked", "laughed", "slept", "ate", "cried", "casted a spell", "performed a ritual", "rested", "opened a portal", "saw the future", "exercised", "did arts and crafts", "brewed potions"],
                presTense: ["have visions","perform surgery", "die", "panick", "laugh", "sleep", "eat", "cry", "cast a spell", "perform rituals", "rest", "open portals", "see the future", "exercise", "do arts and crafts", "brew potions"],
                fuTense: ["will have visions","will perform surgery","will die", "will panick", "will laugh", "will sleep", "will eat", "will cry", "will cast a spell", "will perform a ritual", "will rest", "will open a portal", "will see the future", "will exercise", "will do arts and crafts", "will brew potions"],
            }
        }
    },

    adverb: {
        nonTemporal: {
            negTone: ["stupidly", "clumsily", "terribly", "inaccurately", "horribly", "absent-mindedly", "weirdly", "stubbornly", "rudely", "loudly"],
            neuTone: ["carefully", "slowly", "gradually", "rapidly", "automatically", "deliberately", "practically", "almost", "nearly", "secretly", "openly"],
            posTone: ["carelessly", "quickly", "intelligently", "skillfully", "wonderfully", "accurately", "politely", "kindly", "gently"]
        },
        temporal: {
            negTone: ["never", "rarely", "sometimes"],
            neuTone: ["suddenly"],
            posTone: ["usually", "frequently", "often", "always"],
        }
    },
};

//50 50 chance of true or false
const randBool = () => {
    let num = Math.floor(Math.random() * 2);
    if (num) {
        return true;
    }
    return false;
}

const isCompound = () => {
    let num = Math.floor((Math.random() * 8));
    if (num == 0) {
        return true;
    }
    return false;
}

const randomTense = () => {
    let tense = "presTense";
    let num = Math.floor(Math.random() * 4);
    if (num == 0) {
        tense = "pasTense";
    } else if (num == 1) {
        tense = "presTense";
    } else if (num == 2) {
        tense = "fuTense";
    } else {
        tense = "conTense";
    }
    return tense;
}

const getRandFromArray = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
}

const randomIdentity = () => {
    let identity = "neutral";
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        identity = "feminine";
    } else if (num == 1) {
        identity = "neutral";
    } else {
        identity = "masculine";
    }
    return identity;
}

const generatePronouns = (identity, isSubjectPlural) => {
    let pronouns;
    if (isSubjectPlural) {
        return ["they", "them", "their", "theirs"];
    } else {
        if (identity == "masculine") {
            pronouns = ["he", "him", "his", "his"];
        } else if (identity == "feminine") {
            pronouns = ["she", "her", "her", "hers"];
        } else {
            pronouns = ["they", "them", "their", "theirs"];
        }
        if (identity != "neutral") {
            //One in ten chance pronouns will be neutral
            let num = Math.floor(Math.random() * 11);
            if (num == 0) {
                pronouns = ["they", "them", "their", "theirs"]
            }
        }
    }
    return pronouns;
}

const hasAdverb = () => {
    let num = Math.floor(Math.random() * 8);
    if (num < 3) {
        return true;
    } else {
        return false;
    }
}

const getTemporal = () => {
    let yes = randBool();
    if (yes) {
        return "temporal";
    } else {
        return "nonTemporal";
    }
}

const possiblyAddAdverb = (word, tone, temporal) => {
    if (hasAdverb()) {
        return word + " " + getRandFromArray(dictionary.adverb[temporal][tone]);
    }
    return word;
}



const generateSize = () => {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "small";
    } else if (num == 1) {
        return "medium";
    } else {
        return "large";
    }

}

const getPlace = (isPlaceProper, objectSize) => {
    if (isPlaceProper) {
        return getRandFromArray(dictionary.noun.place.proper[objectSize]);
    } else {
        return getRandFromArray(dictionary.noun.place.nonProper[objectSize]);
    }
}

// one in four chance
const hasAdjective = () => {
    let num = Math.floor(Math.random() * 4)
    if (num == 0) {
        return true;
    }
    return false;
}

const getAdjective = (tone, isInanimate) => {
    if (isInanimate) {
        if (tone == "posTone") {
            return getRandFromArray(dictionary.adjective.nonPerson.posTone);
        } else if (tone == "neuTone") {
            return getRandFromArray(dictionary.adjective.nonPerson.neuTone);
        } else {
            return getRandFromArray(dictionary.adjective.nonPerson.negTone);
        }
    } else {
        if (tone == "posTone") {
            return getRandFromArray(dictionary.adjective.person.posTone);
        } else if (tone == "neuTone") {
            return getRandFromArray(dictionary.adjective.person.neuTone);
        } else {
            return getRandFromArray(dictionary.adjective.person.negTone);
        }
    }
}

const formatSentence = (sentence) => {
    return sentence.slice(0, 1).toUpperCase() + sentence.slice(1) + ".";
}

const getTone = () => {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "posTone";
    } else if (num == 1) {
        return "neuTone";
    } else {
        return "negTone";
    }
}

const possiblyAddAdjective = (word, tone, isInanimate) => {
    if (word != "everyone" && word != "nobody" && word != "someone" && word != "it" && word != "they" && word != "she" && word != "he") {
            if (hasAdjective()) {
            let adj = getAdjective(tone, isInanimate)
            if (word.slice(0, 3) == "The") {
                adj = adj.slice(0, 1).toUpperCase() + adj.slice(1);
                return word.slice(0, 3) + " " + adj + " " + word.slice(4);
            } else if (word.slice(0,1) == word.slice(0,1).toUpperCase()) {
                adj = adj.slice(0, 1).toUpperCase() + adj.slice(1);
            }
            return adj + " " + word;
        } else {
            return word;
        }
    }
    return word;
}

const possiblyRandomizeFutureTense = (word, isVerbTonePositive, alwaysRandomize) => {
    if (randBool() || alwaysRandomize) {
        if (isVerbTonePositive) {
            let replacers = [" may ", " might ", " would ", " could ", " should "];
            return word.replace(" will ", getRandFromArray(replacers));
        } else {
            let replacers = [" will not ", " won't ", " can't ", " didn't ", " wouldn't "]
            return word.replace(" will ", getRandFromArray(replacers));
        };

    };
    return word;

}

const possibleRandomizeContinuousTense = (word, isVerbTonePositive, alwaysRandomize) => {
    if (randBool() || alwaysRandomize) {
        if (word.includes(" is ")) {
            if (isVerbTonePositive) {
                let replacers = [" was ", " had been ", " has been ", " will have been ", " should be ", " would be ", " could be ", " would have been ", " could have been ", " should have been "];
                return word.replace(" is ", getRandFromArray(replacers));
            } else {
                let replacers = [" hasn't been ", " has not been ", " was not ", " wasn't ", " hadn't been ", " wouldn't be ", " couldn't be ", " shouldn't be ", " wouldn't have been ", " couldn't have been ", " shouldn't have been "];
                return word.replace(" is ", getRandFromArray(replacers));
            }

        } else {
            if (isVerbTonePositive) {
                let replacers = [" were ", " had been ", " have been ", " will have been ", " should be ", " would be ", " could be ", " would have been ", " could have been ", " should have been "];
                return word.replace(" are ", getRandFromArray(replacers));
            } else {
                let replacers = [" haven't been ", " have not been ", " were not ", " weren't ", " hadn't been ", " wouldn't be ", " couldn't be ", " shouldn't be ", " wouldn't have been ", " couldn't have been ", " shouldn't have been "];
                return word.replace(" are ", getRandFromArray(replacers));
            }
        }
    }
    return word;
}

const isProper = () => {
    let num = Math.floor(Math.random() * 4);
    if (num == 0) {
        return true;
    }
    return false;
}







//This can be modified to include qualifiers like "every", "some", etc.....
const generateArticle = (object, isObjectPlural, isObjectProper) => {
    let vowels = "aeiouAEIOU";
    if (isObjectProper) {
        return "";
    } else {
        if (isObjectPlural) {
            let articles = ["the ", "", "all of the ", "none of the ", "some of the ", "all ", "some ", "several ", "several of the ", "each of the ", "various ", "numerous ", "few ", "a few of the "]
            return getRandFromArray(articles);
        } else {
            let articles = ["the ", "every ", "each ", "every single ", "every other ", "the other ", "this ", "that "]
            if (vowels.includes(object[0])) {
                articles.push("an ");
            } else {
                articles.push("a ");
            }
            return getRandFromArray(articles);
        }
    }
}


//For now, subjects will always be people
const generateSubject = (isSubjectPlural, identity, isProper) => {
    //Needs to generate a subject i.e. the person
    if (isSubjectPlural) {
        return getRandFromArray(dictionary.noun.person.plural);
    } else {
        if (isProper) {
            return getRandFromArray(dictionary.noun.person.singular["proper"][identity]);
        } else {
            return getRandFromArray(dictionary.noun.person.singular["nonProper"][identity]);
        }
    }
}



const generatePredicate = (tense, isSubjectPlural, hasObject, objectSize, isObjectPlural, isObjectProper, predicateTone) => {
    //Needs to generate a predicate
    let objectPlurality
    let properProperty;
    let object;
    let verb;

    if (isObjectProper) {
        properProperty = "proper";
    } else {
        properProperty = "nonProper";
    }

    if (isObjectPlural) {
        objectPlurality = "plural";
    } else {
        objectPlurality = "singular";
    }

    if (isSubjectPlural) {
        if (hasObject) {
            // verb the/some/ objects
            verb = getRandFromArray(dictionary.verb.plural.needsObj[objectSize][tense])
            object = getRandFromArray(dictionary.noun.thing[properProperty][objectPlurality][objectSize])
            object = possiblyAddAdjective(object, predicateTone, true);
            return verb + " " + generateArticle(object, isObjectPlural, isObjectProper) + object;
        } else {
            verb = getRandFromArray(dictionary.verb.plural.noObj[tense]);
            return verb;
        }

    } else {
        if (hasObject) {
            // verb a/the/an object
            verb = getRandFromArray(dictionary.verb.singularThird.needsObj[objectSize][tense]);
            object = getRandFromArray(dictionary.noun.thing[properProperty][objectPlurality][objectSize])
            object = possiblyAddAdjective(object, predicateTone, true);
            return verb + " " + generateArticle(object, isObjectPlural, isObjectProper) + object
        } else {
            verb = getRandFromArray(dictionary.verb.singularThird.noObj[tense])
            return verb;
        }
    }
}

//This will get called inside the generateSentence function, but how to generate another sentence? probably use generate predicate only, but then the pronouns are subject
const makeSentenceCompound = (isVerbTonePositive, sentence, pronounsArr, isSubjectPlural, tense) => {
    //Bsically generate another sentence but use the pronouns that were generated instead of the subject.
    //decide if we want the same verbTone for the second sentence, or a different one, then choose the connecting word appropriately
    //"although", "but" , "and" , "in addition", etc
    let isToneSame = randBool();

    if (pronounsArr[0] == "they" && isSubjectPlural == false) {
        isSubjectPlural = true;
    }



    if (isToneSame) {
        //append a sentence that is also positive/negative
        //connecting word plus generatePredicate? Might have to fix the spaces too
        let connectingWords = [", and", ". In addition,", ". Also,"];
        if (isVerbTonePositive) {
            //use a positive tone
            let newPredicate = generatePredicate(tense, isSubjectPlural, randBool(), generateSize(), randBool(), randBool(), getTone());
            if (tense == "fuTense") {
                newPredicate = possiblyRandomizeFutureTense(newPredicate, true, true);
            } else if (tense == "conTense") {
                newPredicate = possibleRandomizeContinuousTense(newPredicate, true, true);
            }
            return sentence + getRandFromArray(connectingWords) + " " + pronounsArr[0] + " " + newPredicate;
        } else {
            // Use a negative tone
            let newPredicate = generatePredicate(tense, isSubjectPlural, randBool(), generateSize(), randBool(), randBool(), getTone());
            if (tense == "fuTense") {
                newPredicate = possiblyRandomizeFutureTense(newPredicate, false, true);
            } else if (tense == "conTense") {
                newPredicate = possibleRandomizeContinuousTense(newPredicate, false, true);
            }
            return sentence + getRandFromArray(connectingWords) + " " + pronounsArr[0] + " " + newPredicate;

        }
    } else {

        //append a sentence that is the opposite tone
        let connectingWords = [", but", ". However,", ". Nevertheless,"];
        if (isVerbTonePositive) {
            //use a negative tone
            let newPredicate = generatePredicate(tense, isSubjectPlural, randBool(), generateSize(), randBool(), randBool(), getTone());
            if (tense == "fuTense") {
                newPredicate = possiblyRandomizeFutureTense(newPredicate, false, true);
            } else if (tense == "conTense") {
                newPredicate = possibleRandomizeContinuousTense(newPredicate, false, true);
            }
            return sentence + getRandFromArray(connectingWords) + " " + pronounsArr[0] + " " + newPredicate;
        } else {
            // Use a positive tone
            let newPredicate = generatePredicate(tense, isSubjectPlural, randBool(), generateSize(), randBool(), randBool(), getTone());
            if (tense == "fuTense") {
                newPredicate = possiblyRandomizeFutureTense(newPredicate, true, true);
            } else if (tense == "conTense") {
                newPredicate = possibleRandomizeContinuousTense(newPredicate, true, true);
            }
            return sentence + getRandFromArray(connectingWords) + " " + pronounsArr[0] + " " + newPredicate;
        }
    }
}

//I'm realizing that for the tone, the adjective tone isn't what dictates whether we want "however" versus "and" in a compound sentence.
//I think the distinction actually comes from the positivity/negativity of the verb, which I control inside the article function
const generateSentence = () => {
    //Needs to combine a subject and a predicate
    //Needs to keep track of the tense, plurality of subject and the predicate, and choose random words accordingly.

    let tense = randomTense();
    let isSubjectPlural = randBool();
    let isPredicatePlural = randBool();
    let isSubjectProper = isProper();
    let identity = randomIdentity();
    let pronouns = generatePronouns(identity, isSubjectPlural);
    let hasObject = randBool();
    let objectSize = generateSize();
    let isObjectProper = randBool();
    let isObjectPlural = randBool();
    let isSentenceCompound = isCompound();
    let isVerbTonePositive = randBool();
    let hasPlace = randBool();
    let isPlaceProper = randBool();
    let subjectTone = getTone();
    let predicateTone = getTone();
    let place = null;


    let subject = generateSubject(isSubjectPlural, identity, isSubjectProper);
    subject = possiblyAddAdjective(subject, subjectTone, false);
    subject = possiblyAddAdverb(subject, subjectTone, getTemporal());

    let predicate = generatePredicate(tense, isSubjectPlural, hasObject, objectSize, isObjectPlural, isObjectProper, predicateTone);
    let sentence = generateArticle(subject, isSubjectPlural, isSubjectProper) + subject + " " + predicate;

    if (hasPlace) {
        place = getPlace(isPlaceProper, objectSize);
        sentence += " in " + generateArticle(place, false, isPlaceProper) + possiblyAddAdjective(place, predicateTone, true);
    }

    if (tense == "fuTense") {
        sentence = possiblyRandomizeFutureTense(sentence, isVerbTonePositive, false);
    } else if (tense == "conTense") {
        sentence = possibleRandomizeContinuousTense(sentence, isVerbTonePositive, false);
    }

    if (isSentenceCompound) {
        sentence = makeSentenceCompound(isVerbTonePositive, sentence, pronouns, isSubjectPlural, tense);
    }

    return formatSentence(sentence);
}

const addAnimalIngredients = () => {
    for (animal of dictionary.noun.animal.singular) {
        dictionary.noun.thing.nonProper.plural.small.push("eye of " + animal);
        dictionary.noun.thing.nonProper.plural.small.push("heart of " + animal);
    }
}




//Testing


for (let i = 0; i < 50; i++) {
    addAnimalIngredients();
    console.log(generateSentence());
}

//Potentially use datamuse API to add words! Will have to do some research!
