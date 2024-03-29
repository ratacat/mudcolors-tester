/**
 * Typically just run `nodemon index.js` from this folder, and keep a split
 * screen where you can see this text file, and the nodemon terminal at the
 * same time. Thus, everytime you cmd + s or ctrl + s to save, it updates the
 * colors in the terminal. Very good for playing around. 
 * 
 * Oftentimes it takes me a few tries to get colors where I like them.
 * But over time you also start to learn some patterns that really work well together.
 */

/* eslint-disable no-console */
"use strict"
let ansi = require("mudcolors")
let wrap = require("wrap-ansi")

/**
 * this array lets you add any number of strings of text
 * and each are parsed to the terminal with color on save
 * when using nodemon. I left some strings in there as an example. NOTE* This whole file must be properly formatted javascript or nothing will work. Remove a comma or quote from below and it all breaks =)
 */
let ar = [
	"B]A w]shalloW]w cw]rater B]is littered broken rock.",
	"y]A large B]fw]iB]ssw]uB]re y]in the ground stretches deep out of sight.",
	"u]A tiny buU]bu]bliU]nu]g spring is covered in g]lY]ig]lypads.",
	"c]An oval shaped pond is full of r]cR]oY]lG]org]fY]ul B]sw]tW]onesc].",
	"C]A large crescent shaped pond is surrounded by y]tY]hy]ick g]caty]tailsC].",
	"y]A muddy B]hw]oB]le y]in the ground has been worn from usage.",
	"u]A blue W]shw]eW]et u]of w]iW]cu]e has errupted from the earth.",
	"y]An g]oy]lY]d Y]ry]otg]tG]eB]n y]tree stump clings to the w]rW]oB]ckW]y y]soil.",
	"Y]A soft vy]eY]in of rw]oY]cy]k is exposed to the air.",
	"B]A rough vew]inB] of W]rock B]is exposed to the air.",
	"Y]A few small sand dunes are teeming with sandfleas.",
	"C]A roaring toc]rC]rec]nC]t of water falls down the W]rockC], collecting in a u]deepC] pool.",
	"Y]A narrow y]caY]ny]yon Y]stretches to the southeast.",
	"W]A wC]iW]nc]dC]swept W]ridge shelters a few craggy pines.",
	"W]A jagged outcropping of B]gW]rw]aB]nW]iB]tW]e is exposed to the wind and the raC]iW]n.",
]

let styles = "r]cR]oY]lG]org]fY]ul R]hawB]tw]hW]orne M]rom]seM]wood"

/**
 * Each color code uses a single letter followed by a right bracket. -> ]
 * 
 * Capitals are generally the brighter version. Each color has a regular and a bright, except black at the moment, has just the bright. These 15 colors are what almost all muds of yore used, and they can be woven together in all kinds of ways. 
 * 
 * Because Enceladus is accessed in a web browser, we have the ability to add new colors. I haven't done this yet, but the possibility is there.
 */

let demo = "w]white   W]White   y]yellow   Y]Yellow   g]green   G]Green   c]cyan   C]Cyan   m]magenta   M]Magenta   u]blue   U]Blue   B]Black   r]red   R]Red"
let tags = "w]%sW]%sy]%sY]%sg]%sG]%sc]%sC]%sm]%sM]%su]%sU]%sB]%sr]%sR]"
let div = "C]-------------------------------------------------------"
 
for (let e of ar){
	console.log(ansi.parse(e))
}

console.log("")
console.log(wrap(ansi.parse(styles)))
console.log(ansi.parse(div))
console.log(wrap(ansi.parse(demo), 90))
console.log(wrap(tags, 90), Array(5).join(" "), Array(5).join(" "), Array(6).join(" "), Array(6).join(" "), Array(5).join(" "), Array(5).join(" "), Array(4).join(" "), Array(4).join(" "), Array(7).join(" "), Array(7).join(" "), Array(4).join(" "), Array(4).join(" "), Array(5).join(" "), Array(3).join(" "))
console.log(ansi.parse(div))
