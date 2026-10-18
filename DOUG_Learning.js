//=========================================
// Learning JS for RPG Maker MZ
// DOUG_Learning.js
//=========================================
/*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [v1.0] A plugin by Douglas made to learn javascript for RPG Maker MZ
 * @author DreadnoughtDouglas
 * @url https://dreadnought-douglas.itch.io/
 *
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Douglas Plugin
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param favNumber
 * @type number
 * @text Favorite Number
 * @desc What's your favorite number?
 * @default 1
 *
 * @param favBool
 * @type boolean
 * @text Favorite Boolean
 * @desc What's your favorite boolean?
 * @on Get this man a True...
 * @off Get this man a False...
 * @default true
 *
 * @param auraArmors
 * @type struct<auraArmors>[]
 * @default []
 * @text Aura Armors
 * @desc Armors that you think have extreme aura.
 *
 * @command greetCommand
 * @text Greet Command
 * @desc Greet someone!
 *
 * @arg personToGreet
 * @text Person To Greet
 * @desc Greet a person of your choice.
 * 
 * @arg speaker
 * @text Speaker
 * @desc the person who is saying the greeting
 * 
 * @help
 *
 * Did you know that RPG Maker is used for making RPGs?
 *
 * License: MIT
 *
*/
/*~struct~auraArmors:
 *
 * @param nickname
 * @text Nickname
 * @desc The nickname you'd give to this aura armor. (Optional)
 *
 * @param armor
 * @type armor
 * @text Aura Armor
 * @desc An armor piece with mad aura.
 * 
 *
*/

const DreadnoughtDouglas = {};
DreadnoughtDouglas.pluginName = "DOUG_Learning";

// Get all parameters

DreadnoughtDouglas.parameters = PluginManager.parameters(
    DreadnoughtDouglas.pluginName
)

// Command

PluginManager.registerCommand(
    DreadnoughtDouglas.pluginName,
    "greetCommand",
    (args) => {
        console.log(args)
        DreadnoughtDouglas.greetedPersonName = String(args.personToGreet || "Doug")
        DreadnoughtDouglas.speakerName = String(args.speaker || "Ony")
        $gameMessage.setSpeakerName(DreadnoughtDouglas.speakerName)
        $gameMessage.add(`Hello ${DreadnoughtDouglas.greetedPersonName}!`)
    }
)