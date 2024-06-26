const fs = require('fs')

let cards = []
let output = ""

const g = (name, link, title) => {
  const card = {}
  card.name = name
  card.link = link
  card.title = title
  cards.push(card)
}

const h3 = (text) => {
  output += `### ${text}\n`
}

const link = (text, link) => {
  output += `- [${text}](${link})\n`
}

const makeTable = () => {
  const titles = cards.reduce((acc, card) => acc + `${card.name}|`, "|")
  const spaces = cards.reduce((acc, _) => acc + `-|`, "|")
  const links = cards.reduce((acc, card) => acc + `<img src="${card.link}" title="${card.title ?  card.title : card.name}" width="75" height="75"/>|`, "|")
  cards = []
  output += `${titles}\n${spaces}\n${links}\n\n`
}

h3("Seu titulo aqui")
g("Javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")
g("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")
g("React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg")
g("Vue", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg")
makeTable()

h3("Outro titulo?")
g("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg")
g("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg")
g("Less", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg")
g("Sass", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg")
g("Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg")
g("JQuery", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg")
g("Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg")
makeTable()

h3("Versioning")
g("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg")
g("Github", "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png")
makeTable()

h3("Tools")
g("VSCode", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg")
g("Chrome", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg")
makeTable()

h3("Seus Links")
link("Alura", "https://cursos.alura.com.br/user/deysaherdy")


fs.writeFileSync('./README.md', output)