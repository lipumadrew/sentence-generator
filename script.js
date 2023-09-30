//This project is intended as an improved version of the mixed messages project.
//The results may be more rudimentary, but I want them to be more dynamic, focusing on creating organic grammar structures from scratch, but randomly.

//Subject contains what sentance is about, predicate says something about the subject.
/* I'm thinking something like:

function generateSubject() ....

function generatePredicate() ....


Of course there will be a dictionary object. The object should be more complex than before, but lets not get to that yet...


In the subject, we will have the noun, which the sentance is about. This can be a person, place, or thing, including verbs like "running".
-The noun is the same regardless of the tense, but the plurality and tense will affect which verb should be used. 
for example: "She was running". "She ran." "She is running.", "She runs.", "She has run"

Notice for "She was running" and "She is running", "running" functions almost as a noun/adjective. I feel like this will be important later.

I could include pronoun support as well.

---------------------

The predicate is the "is running", or in the sentence "I saw an ugly witch", "saw an ugly witch" is the predicate.

Thinking abstractly, certain words have certain attributes, like good or bad tone, masculine or feminine, particularly for people.
Large vs small objects (You wouldn't hand someone a tree, but you would hand them a pumpkin), large places like a valley,
medium places like inside a building, and small places like a chair, a bed, or a car. This concept can be extrapolated to accomodate verbs.
Meaning, certain verbs only make sense with certain items. So maybe "eat" would only work for items which are "edible", and "sleep" would only
work for places, particularly small or medium.


---------------------

The dictionary object is going to be complex. I'm gonna run through two possible approaches I thought of.

So, if we need a random noun that is a small object that is edible, we could have something like:

    dictionary.nouns.smallobjects.isEdible[random index]
    -->I'm thinking for this approach, each property would be a variable that is generated by the function, and then it would be accessed
        something like dictionary[noun][nounType][nounSize] etc
        -->So we might need separate functions to help us access the words in the tree, like getNoun() or getAdj() since the traversal
            is different for each word type.

    This would mean that the dictionary would follow a hierarchical structure, in which the actual words themselves are the end nodes
    of a tree. They would be accessed by knowing their properties in advance.

    Another approach, could be having each word be an object, and each word would have it's own set of key value pairs.

    so, the word "ugly" would be a key, and the value would be another object, maybe looking like {wordType: adj, tone: negative, describesPerson: true, describesItem: true}

    Even with this approach, we could still incorporate these attributes into a tree structure,

    So we could have something like dictionary.adjectives.describesPerson.negative[0] <-- which would finally be an array of words with these criteria

    There is also potentially a hybrid approach, where we could have something like dictionary.adjectives[0] 
    and that item would have key value pairs associated with it.

    I think the way I would proceed is following a total tree structure, because accessing the items is the most consistent, and we know that the bottom of the tree
    would always be an array of items containing words that we could use for whatever criteria we need at that moment.

*/

//Here we go....
const dictionary = {
    noun: {
        person: {
            singular: {
                //Words that don't need "A" 
                proper: {
                    feminine: ["Hermione Granger", "The Wicked Witch", "Elvira", "Wednesday Addams", "Moaning Myrtle", "Lady Gaga"],
                    masculine: ["Harry Potter", "Ron Weasley", "Hagrid", "Dracula", "Dumbledore", "The Devil", "Batman", "Voldemort"],
                    neutral: ["someone", "everyone", "nobody", "BMO", "C-3PO"],
                },
                //Words that need "A" or the
                nonProper: {
                    feminine: ["witch", "sorceress", "succubus", "woman", "lady", "girl"],
                    masculine: ["wizard", "man", "guy", "dude"],
                    neutral: ["person", "skeleton", "zombie", "vampire", "werewolf", "ghost", "software-engineer", "college student", "necromancer", "groundskeeper"],
                }
            },
            //Words that don't need "A"
            //plural words behave the same even if they are proper, pronouns are always "they, we or you"
            plural: ["witches", "sorceresses", "succubi", "women", "ladies", "girls", "wizards", "men", "guys", "dudes", "people", "skeletons", "zombies", "vampires", "werewolves", "ghosts", "software-engineers", "college students", "necromancers", "groundskeepers"]
        },
        place: {
            //Words that don't need "A"  or the
            proper: {
                small: ["Hagrid's Hut"],
                medium: ["Safeway", "Dracula's castle", "Target", "Hogwarts"],
                large: ["San Francisco", "New York", "Tokyo", "The Spirit Realm", "Outer Space", "The Underworld", "The Forbidden Forest"],
            },
            //Words that need "A"
            nonProper: {
                small: ["chair", "car", "train", "coffin", "closet", "bathroom", "backpack", "satchel", "locked chest"],
                medium: ["hut", "basement", "grocery store", "college"],
                large: ["city", "town", "village", "desert", "forest"]
            },
        },
        //Rather than small, medium, large, I might get more specific...but we'll see
        thing: {
            //Words that don't need "A" or "The"
            proper: {
                small: ["The Golden Snitch", "The Elder Wand", "Merlin's Beard", "dinner"],
                medium: [], //none yet
                large: ["The Whomping Willow"],
            },
            //Words that need "A" or "The"
            nonProper: {
                singular: {
                    //Moveable, hold in hand, throwable even
                    small: ["poison apple", "wand", "broom", "spellbook", "potion", "crystal ball", "halloween candy", "severed head", "eye of newt", "carrot", "human heart", "voodoo doll", "dragon egg", "sword"],
                    //somewhat movable
                    medium: ["cauldron", "tombstone", "jack-o-lantern", "car", "corpse", "skeleton", "pumpkin"],
                    //immovable
                    large: ["tree", "monolith", "boulder", "ritual circle", "bonfire", "pile of bones"]
                },
                plural: {
                    small: ["magic mushrooms", "potions", "eggs", "crystal balls", "bones", "slugs", "spiders", "cobwebs", "scrolls", "halloween candy", "hippogriff feathers", "entrails"],
                    medium: ["pumpkins", "tombstones", "horcruxes", "brooms", "cauldrons", "jack-o-lanterns", "corpses", "severed limbs"],
                    large: ["trees", "monoliths", "boulders", "bone piles", "statues", "monuments", "buildings"]
                },
            }
        
        },
        animal: {
            singular: ["cat", "dog", "spider", "unicorn", "frog", "owl", "bug"],
            plural: ["cats", "dogs", "spiders", "unicorns", "frogs", "owls", "bugs"]
        },
    },
    adjective: {
        person: {
            negTone: ["delicious", "intelligent", "beautiful", "amazing", "hilarious", "great", "magical", "mythical", "generous", "kind", "attractive"],
            neuTone: ["green", "blue", "purple", "glowing", "tall", "short", "boring", "normal", "average"],
            posTone: ["stupid", "ugly", "smelly", "disgusting", "horrible", "outrageous", "awful", "weird", "mean", "selfish", "evil", "repulsive"]
        },
        nonPerson: {
            negTone: ["delicious", "beautiful", "amazing", "hilarious", "great", "magical", "mythical"],
            neuTone: ["green", "blue", "purple", "glowing", "tall", "short", "boring", "normal", "average"],
            posTone: ["stupid", "ugly", "smelly", "disgusting", "horrible", "outrageous", "awful", "weird", "mean", "evil", "repulsive"]
        }
    },


    //For now, I think I will only use simple past, present, and future tense. See: https://www.grammarly.com/blog/verb-tenses/#:~:text=The%20three%20main%20verb%20tenses,get%20twelve%20unique%20verb%20tenses.
    //I also need to think about verbs that happen to an object, versus ones that don't. ex: you don't breathe an apple, but you do eat an apple
    verb: {
        //He/she/it/that/proper
        singularThird: {
            //Needs object (i.e. Looked for - searched for - )
            needsObj: {
                pasTense: ["threw", "looked for", "found", "discovered", "hid", "stole", "consumed", "used", "took", "gave away"],
                presTense: ["throws", "looks for", "finds", "discovers", "hides", "steals", "consumes", "uses", "takes", "gives away"],
                fuTense: ["will throw", "will look for", "will find", "will discover", "will steal", "will consume", "will use", "will take", "will give away"],
            },
            noObj: {
                pasTense: ["was", "laughed", "slept", "ate", "cried", "casted a spell", "performed a ritual", "rested", "opened a portal", "saw the future", "exercised", "did arts and crafts", "brewed potions"],
                presTense: ["is", "laughs", "sleeps", "eats", "cries", "casts spells", "performs rituals", "rests", "opens portals", "sees the future", "exercises", "does arts and crafts", "brews potions"],
                fuTense: ["will be", "will laugh", "will sleep", "will eat", "will cry", "will cast a spell", "will perform a ritual", "will rest", "will open a portal", "will see the future", "will exercise", "will do arts and crafts", "will brew potions"],
            }
        },
        //I/you/we/they
        plural: {
            needsObj: {
                pasTense: ["threw", "looked for", "found", "discovered", "hid", "stole", "consumed", "used", "took", "gave away"],
                presTense: ["throw", "look for", "find", "discover", "hide", "steal", "consume", "use", "take", "give away"],
                fuTense: ["will throw", "will look for", "will find", "will discover", "will steal", "will consume", "will use", "will take", "will give away"],
            },
            noObj: {
                pasTense: ["laughed", "slept", "ate", "cried", "casted a spell", "performed a ritual", "rested", "opened a portal", "saw the future", "exercised", "did arts and crafts", "brewed potions"],
                presTense: ["laugh", "sleep", "eat", "cry", "cast a spell", "perform rituals", "rest", "open portals", "see the future", "exercise", "do arts and crafts", "brew potions"],
                fuTense: ["will laugh", "will sleep", "will eat", "will cry", "will cast a spell", "will perform a ritual", "will rest", "will open a portal", "will see the future", "will exercise", "will do arts and crafts", "will brew potions"],
            }
        }
    },

    adverb: {
        nonTemporal: {
            negTone: ["slowly", "stupidly", "clumsily", "gradually", "terribly"],
            posTone: ["quickly", "intelligently", "skillfully", "rapidly", "suddenly", "wonderfully"],
        },
        temporal: {
            negTone: ["never", "rarely", "sometimes"],
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

const randomTense = () => {
    let tense = "present";
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        tense = "past";
    } else if (num == 1) {
        tense = "present";
    } else {
        tense = "future";
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

const generateSentence = () => {
    //Needs to combine a subject and a predicate
    //Needs to keep track of the tense, plurality of subject and the predicate, and choose random words accordingly.
    
    let tense = randomTense();
    let isSubjectPlural = randBool();
    let isPredicatePlural = randBool();
    let isProper = randBool();
    let identity = randomIdentity();
    let pronoun = generatePronouns(identity, isSubjectPlural);
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

const generatePredicate = (tense, isPredicatePlural) => {
    //Needs to generate a predicate
}


//Testing
let testarr = [1,2,3,4,5]
for (let i = 0; i < 50; i++) {
    console.log(generateSubject(randBool(), randomIdentity(), randBool()));
}
